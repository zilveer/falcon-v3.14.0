import utils from '../../../utils';
import { getPosition, echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                        Echarts Line Marker Chart                           */
/* -------------------------------------------------------------------------- */

const echartsLineMarkerChartInit = () => {
  const $lineMarkerChartEl = document.querySelector('.echart-line-marker-chart-example');

  if ($lineMarkerChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($lineMarkerChartEl, 'options');
    const chart = window.echarts.init($lineMarkerChartEl);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const getDefaultOptions = () => ({
      color: [
        utils.getColor('primary'),
        utils.getColor('warning')
        // utils.getColor('danger')
      ],
      legend: {
        data: [
          {
            name: 'Max',
            textStyle: {
              color: utils.getGrays()['600']
            }
          },
          {
            name: 'Min',
            textStyle: {
              color: utils.getGrays()['600']
            }
          }
        ]
      },
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        axisPointer: {
          type: 'none'
        },
        formatter: tooltipFormatter
      },
      xAxis: {
        type: 'category',
        data: days,
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'solid'
          }
        },
        axisTick: { show: false },
        axisLabel: {
          formatter: value => value.substring(0, 3),
          color: utils.getGrays()['400'],
          margin: 15
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200']
          }
        },
        boundaryGap: false,
        axisLabel: {
          show: true,
          color: utils.getGrays()['400'],
          margin: 15
        },
        axisTick: { show: false },
        axisLine: { show: false }
      },
      series: [
        {
          name: 'Max',
          type: 'line',
          data: [10, 11, 13, 11, 12, 9, 12],
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          symbol: 'circle',
          markPoint: {
            itemStyle: {
              color: utils.getColor('primary')
            },
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            lineStyle: {
              color: utils.getColor('primary')
            },
            label: {
              color: utils.getGrays()['600']
            },
            data: [{ type: 'average', name: 'average' }]
          }
        },
        {
          name: 'Min',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('danger'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('danger')
          },
          symbol: 'circle',
          markPoint: {
            itemStyle: {
              color: utils.getColor('danger')
            },
            label: {
              color: '#fff'
            },
            data: [{ name: 'Weekly lowest', value: -2, xAxis: 1, yAxis: -1.5 }]
          },
          markLine: {
            lineStyle: {
              color: utils.getColor('danger')
            },
            label: {
              color: utils.getGrays()['600']
            },
            data: [
              { type: 'average', name: 'average' },
              [
                {
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max'
                },
                {
                  symbol: 'circle',
                  label: {
                    position: 'start',
                    formatter: 'Max'
                  },
                  type: 'max',
                  name: 'Highest point'
                }
              ]
            ]
          }
        }
      ],
      grid: { right: '8%', left: '5%', bottom: '10%', top: '15%' }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsLineMarkerChartInit;
