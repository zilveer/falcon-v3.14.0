import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                        Echarts Scatter Basic Chart                         */
/* -------------------------------------------------------------------------- */

const echartsScatterBasicChartInit = () => {
  const $basicScatterChartEl = document.querySelector('.echart-basic-scatter-chart-example');

  if ($basicScatterChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($basicScatterChartEl, 'options');
    const chart = window.echarts.init($basicScatterChartEl);

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'none'
        },
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0
      },
      xAxis: {
        axisLabel: {
          color: utils.getGrays()['600']
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['200']
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
            color: utils.getGrays()['200']
          }
        }
      },
      series: [
        {
          // symbolSize: val => val[2] * 2,
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68]
          ],
          type: 'scatter',
          itemStyle: {
            color: utils.getColor('danger')
          }
        }
      ],
      grid: {
        right: 8,
        left: 5,
        bottom: 5,
        top: 8,
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsScatterBasicChartInit;
