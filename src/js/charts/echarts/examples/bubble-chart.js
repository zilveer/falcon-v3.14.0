import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                           Echarts Bubble Chart                             */
/* -------------------------------------------------------------------------- */

const echartsBubbleChartInit = () => {
  const $bubbleChartEl = document.querySelector('.echart-bubble-chart-example');

  if ($bubbleChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($bubbleChartEl, 'options');
    const chart = window.echarts.init($bubbleChartEl);

    let data = [
      [
        [28604, 77, 17096869, 'Australia', 1990],
        [31163, 77.4, 27662440, 'Canada', 1990],
        [1516, 68, 1154605773, 'China', 1990],
        [28599, 75, 4986705, 'Finland', 1990],
        [29476, 77.1, 56943299, 'France', 1990],
        [31476, 75.4, 78958237, 'Germany', 1990],
        [1777, 57.7, 870601776, 'India', 1990],
        [29550, 79.1, 122249285, 'Japan', 1990],
        [12087, 72, 42972254, 'South Korea', 1990],
        [24021, 75.4, 3397534, 'New Zealand', 1990],
        [43296, 76.8, 4240375, 'Norway', 1990],
        [10088, 70.8, 38195258, 'Poland', 1990],
        [19349, 69.6, 147568552, 'Russia', 1990],
        [26424, 75.7, 57110117, 'United Kingdom', 1990],
        [37062, 75.4, 252847810, 'United States', 1990]
      ],
      [
        [44056, 81.8, 23968973, 'Australia', 2015],
        [43294, 81.7, 35939927, 'Canada', 2015],
        [13334, 76.9, 1376048943, 'China', 2015],
        [38923, 80.8, 5503457, 'Finland', 2015],
        [37599, 81.9, 64395345, 'France', 2015],
        [44053, 81.1, 80688545, 'Germany', 2015],
        [5903, 66.8, 1311050527, 'India', 2015],
        [36162, 83.5, 126573481, 'Japan', 2015],
        [34644, 80.7, 50293439, 'South Korea', 2015],
        [34186, 80.6, 4528526, 'New Zealand', 2015],
        [64304, 81.6, 5210967, 'Norway', 2015],
        [24787, 77.3, 38611794, 'Poland', 2015],
        [23038, 73.13, 143456918, 'Russia', 2015],
        [38225, 81.4, 64715810, 'United Kingdom', 2015],
        [53354, 79.1, 321773631, 'United States', 2015]
      ]
    ];

    const getDefaultOptions = () => ({
      title: {
        text: '1990 and 2015 have per capita and GDP',
        left: 0,
        top: 0,
        textStyle: {
          color: utils.getGrays()['600'],
          fontWeight: 600
        }
      },
      legend: {
        right: 0,
        top: '10%',
        data: ['1990', '2015'],
        textStyle: {
          color: utils.getGrays()['600']
        }
      },
      xAxis: {
        axisLabel: {
          color: utils.getGrays()['600'],
          formatter: value => `${value / 1000}k`
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300']
          }
        },

        splitLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['200']
          }
        }
      },
      yAxis: {
        scale: true,
        axisLabel: {
          color: utils.getGrays()['600']
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['200']
          }
        },

        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300']
          }
        }
      },
      series: [
        {
          name: '1990',
          data: data[0],
          type: 'scatter',
          symbolSize: function (value) {
            return Math.sqrt(value[2]) / 5e2;
          },
          emphasis: {
            focus: 'series',
            label: {
              color: utils.getGrays()['600'],
              show: true,
              formatter: function (param) {
                return param.data[3];
              },
              position: 'top'
            }
          },
          itemStyle: {
            color: utils.rgbaColor(utils.getColor('primary'), 0.7)
          }
        },
        {
          name: '2015',
          data: data[1],
          type: 'scatter',
          symbolSize: function (value) {
            return Math.sqrt(value[2]) / 7e2;
          },
          emphasis: {
            focus: 'series',
            label: {
              color: utils.getGrays()['600'],
              show: true,
              formatter: function (param) {
                return param.data[3];
              },
              position: 'top'
            }
          },
          itemStyle: {
            color: utils.rgbaColor(utils.getColor('warning'), 0.7)
          }
        }
      ],
      grid: {
        left: 5,
        right: 10,
        bottom: 5,
        top: '20%',
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsBubbleChartInit;
