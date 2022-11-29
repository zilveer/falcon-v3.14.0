import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                      Echarts Radar Multiple Chart                          */
/* -------------------------------------------------------------------------- */

const echartsRadarMultipleChartInit = () => {
  const $radarChartEl = document.querySelector('.echart-radar-multiple-chart');

  if ($radarChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($radarChartEl, 'options');
    const chart = window.echarts.init($radarChartEl);

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const getCenter = () => {
      if (window.innerWidth < 1540 && window.innerWidth > 992) {
        return [
          ['25%', '40%'],
          ['50%', '75%'],
          ['75%', '40%']
        ];
      } else if (window.innerWidth < 992) {
        return [
          ['50%', '20%'],
          ['50%', '50%'],
          ['50%', '80%']
        ];
      } else {
        return [
          ['15%', '50%'],
          ['50%', '50%'],
          ['85%', '50%']
        ];
      }
    };

    const getDefaultOptions = () => ({
      legend: {
        left: 'left',
        textStyle: {
          color: utils.getGrays()['600']
        }
      },
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        }
      },

      radar: [
        {
          indicator: [
            { text: 'Brand', max: 100 },
            { text: 'content', max: 100 },
            { text: 'Usability', max: 100 },
            { text: 'Features', max: 100 }
          ],
          center: getCenter()[0],
          radius: 85,
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          }
        },
        {
          indicator: [
            { text: 'Exterior', max: 100 },
            { text: 'Take pictures', max: 100 },
            { text: 'system', max: 100 },
            { text: 'performance', max: 100 },
            { text: 'screen', max: 100 }
          ],
          radius: 85,
          center: getCenter()[1],
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          }
        },
        {
          indicator: months.map(month => ({
            text: month,
            max: 100
          })),
          center: getCenter()[2],
          radius: 85,
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          }
        }
      ],

      series: [
        {
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          areaStyle: {
            color: utils.rgbaColor(utils.getColors()['info'], 0.5)
          },
          data: [
            {
              value: [60, 73, 85, 40],
              name: 'A software',
              itemStyle: {
                color: utils.getColor('info')
              }
            }
          ]
        },
        {
          type: 'radar',
          radarIndex: 1,
          data: [
            {
              value: [85, 90, 90, 95, 95],
              name: 'A staple mobile phone',
              itemStyle: {
                color: utils.rgbaColor(utils.getColors()['primary'], 0.8)
              },
              areaStyle: {
                color: utils.rgbaColor(utils.getColors()['primary'], 0.3)
              }
            },
            {
              value: [95, 80, 75, 90, 93],
              name: 'A fruit phone',
              itemStyle: {
                color: utils.getColor('success')
              },
              areaStyle: {
                color: utils.rgbaColor(utils.getColors()['success'], 0.3)
              }
            }
          ]
        },
        {
          type: 'radar',
          radarIndex: 2,
          areaStyle: {},
          tooltip: {
            show: false
          },
          data: [
            {
              name: 'Precipitation',
              value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
              itemStyle: {
                color: utils.getColor('primary')
              },
              areaStyle: {
                color: utils.rgbaColor(utils.getColors()['primary'], 0.5)
              }
            },
            {
              name: 'Evaporation',
              value: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3],
              itemStyle: {
                color: utils.getColor('warning')
              },
              areaStyle: {
                color: utils.rgbaColor(utils.getColors()['warning'], 0.5)
              }
            }
          ]
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    // - set chart position on Window resize
    utils.resize(() => {
      chart.setOption({
        radar: getCenter().map(item => ({
          center: item
        }))
      });
    });
  }
};

export default echartsRadarMultipleChartInit;
