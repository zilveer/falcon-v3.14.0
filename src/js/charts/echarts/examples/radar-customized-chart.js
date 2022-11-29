import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Pie Chart                              */
/* -------------------------------------------------------------------------- */

const echartsRadarCustomizedChartInit = () => {
  const $radarChartEl = document.querySelector('.echart-radar-customized-chart');
  function getFormatter(params) {
    const indicators = [
      ['Marketing', 'Sales', 'Dev', 'Support', 'Tech', 'Admin'],
      ['Language', 'Math', 'English', 'Physics', 'Chemistry', 'Biology']
    ];
    const num = params.seriesIndex;
    return `<strong > ${params.name} </strong>
    <div class="fs--1 text-600">
      <strong >${indicators[params.seriesIndex][0]}</strong>: ${params.value[0]}  <br>
      <strong>${indicators[num][1]}</strong>: ${params.value[1]}  <br>
      <strong>${indicators[num][2]}</strong>: ${params.value[2]}  <br>
      <strong>${indicators[num][3]}</strong>: ${params.value[3]}  <br>
      <strong>${indicators[num][4]}</strong>: ${params.value[4]}  <br>
      <strong>${indicators[num][5]}</strong>: ${params.value[5]}  <br>
    </div>`;
  }

  if ($radarChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($radarChartEl, 'options');
    const chart = window.echarts.init($radarChartEl);

    const getDefaultOptions = () => ({
      legend: {
        orient: 'vertical',
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
        },
        formatter: getFormatter
      },

      radar: [
        {
          radius: window.innerWidth < 576 ? 90 : 120,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          center: window.innerWidth < 992 ? ['50%', '30%'] : ['25%', '50%'],
          indicator: [
            { name: 'Admin', max: 6500 },
            { name: 'Tech', max: 16000 },
            { name: 'Support', max: 30000 },
            { name: 'Dev', max: 38000 },
            { name: 'Sales', max: 52000 },
            { name: 'Marketing', max: 25000 }
          ],
          name: {
            formatter: '{value}',
            textStyle: {
              color: utils.getGrays()['700']
            }
          },
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          }
        },

        {
          indicator: [
            { text: 'Language', max: 150 },
            { text: 'Math', max: 150 },
            { text: 'English', max: 150 },
            { text: 'physics', max: 120 },
            { text: 'Chemistry', max: 108 },
            { text: 'Biology', max: 72 }
          ],
          radius: window.innerWidth < 576 ? 90 : 120,
          center: window.innerWidth < 992 ? ['50%', '75%'] : ['75%', '50%'],
          splitLine: {
            lineStyle: {
              color: utils.rgbaColor(utils.getGrays()['700'])
            }
          },
          name: {
            textStyle: {
              color: utils.rgbaColor(utils.getGrays()['1000']),
              backgroundColor: utils.rgbaColor(utils.getGrays()['100']),
              borderRadius: 3,
              padding: [3, 5]
            }
          }
        }
      ],

      series: [
        {
          type: 'radar',
          data: [
            {
              value: [5200, 4000, 20000, 30000, 20000, 18000],
              name: 'Data A',
              itemStyle: {
                color: utils.getColor('info')
              },
              areaStyle: {
                color: utils.rgbaColor(utils.getColors()['info'], 0.3)
              }
            },
            {
              value: [5000, 12000, 28000, 26000, 32000, 21000],
              name: 'Data B',
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
          radarIndex: 1,
          data: [
            {
              value: [130, 110, 130, 100, 99, 70],
              name: 'Data C',
              symbol: 'rect',
              symbolSize: 12,
              lineStyle: {
                type: 'dashed'
              },
              itemStyle: {
                color: utils.getColor('warning')
              },
              areaStyle: {
                color: utils.rgbaColor(utils.getColors()['warning'], 0.3)
              },
              label: {
                show: true,
                formatter: function (params) {
                  return params.value;
                },
                color: utils.getGrays()['700']
              }
            },
            {
              value: [100, 93, 50, 90, 70, 60],
              name: 'Data D',
              itemStyle: {
                color: utils.getColor('danger')
              },
              areaStyle: {
                color: utils.rgbaColor(utils.getColors()['danger'], 0.3)
              }
            }
          ]
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
    //- set chart position on Window resize
    utils.resize(() => {
      if (window.innerWidth < 992) {
        chart.setOption({
          radar: [
            {
              center: ['50%', '30%']
            },
            {
              center: ['50%', '75%']
            }
          ]
        });
      } else {
        chart.setOption({
          radar: [
            {
              center: ['25%', '50%']
            },
            {
              center: ['75%', '50%']
            }
          ]
        });
      }

      if (window.innerWidth < 576) {
        chart.setOption({
          radar: [
            {
              radius: 90
            },
            {
              radius: 90
            }
          ]
        });
      } else {
        chart.setOption({
          radar: [
            {
              radius: 120
            },
            {
              radius: 120
            }
          ]
        });
      }
    });
  }
};

export default echartsRadarCustomizedChartInit;
