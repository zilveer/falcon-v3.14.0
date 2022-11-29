import utils from '../../../utils';
import { getPosition, echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Line Race Chart                        */
/* -------------------------------------------------------------------------- */

const echartsLineRaceChartInit = () => {
  const $lineRaceChartEl = document.querySelector('.echart-line-race-chart-example');

  if ($lineRaceChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($lineRaceChartEl, 'options');
    const chart = window.echarts.init($lineRaceChartEl);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const getDefaultOptions = () => ({
      color: [utils.getColor('primary'), utils.getColor('warning')],
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
        // formatter: tooltipFormatter,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        axisPointer: {
          type: 'none'
        }
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
            color: utils.getGrays()['300']
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
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
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
          markPoint: {
            label: {
              color: '#fff'
            },
            data: [{ name: 'Weekly lowest', value: -2, xAxis: 1, yAxis: -1.5 }]
          },
          markLine: {
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

export default echartsLineRaceChartInit;
