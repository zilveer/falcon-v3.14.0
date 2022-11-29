import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Pie Chart                              */
/* -------------------------------------------------------------------------- */

const echartsPieChartInit = () => {
  const $pieChartEl = document.querySelector('.echart-pie-chart-example');

  if ($pieChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($pieChartEl, 'options');
    const chart = window.echarts.init($pieChartEl);

    const getDefaultOptions = () => ({
      legend: {
        left: 'left',
        textStyle: {
          color: utils.getGrays()['600']
        }
      },
      series: [
        {
          type: 'pie',
          radius: window.innerWidth < 530 ? '45%' : '60%',
          label: {
            color: utils.getGrays()['700']
          },
          center: ['50%', '55%'],
          data: [
            {
              value: 1048,
              name: 'Facebook',
              itemStyle: {
                color: utils.getColor('primary')
              }
            },
            {
              value: 735,
              name: 'Youtube',
              itemStyle: {
                color: utils.getColor('danger')
              }
            },
            {
              value: 580,
              name: 'Twitter',
              itemStyle: {
                color: utils.getColor('info')
              }
            },
            {
              value: 484,
              name: 'Linkedin',
              itemStyle: {
                color: utils.getColor('success')
              }
            },
            {
              value: 300,
              name: 'Github',
              itemStyle: {
                color: utils.getColor('warning')
              }
            }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: utils.rgbaColor(utils.getGrays()['600'], 0.5)
            }
          }
        }
      ],
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
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    //- set chart radius on window resize
    utils.resize(() => {
      if (window.innerWidth < 530) {
        chart.setOption({
          series: [
            {
              radius: '45%'
            }
          ]
        });
      } else
        chart.setOption({
          series: [
            {
              radius: '60%'
            }
          ]
        });
    });
  }
};

export default echartsPieChartInit;
