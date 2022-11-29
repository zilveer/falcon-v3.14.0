import utils from '../../../utils';
import { echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                           Echarts Line Log Chart                           */
/* -------------------------------------------------------------------------- */

const echartsLineLogChartInit = () => {
  const $lineLogChartEl = document.querySelector('.echart-line-log-chart-example');

  if ($lineLogChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($lineLogChartEl, 'options');
    const chart = window.echarts.init($lineLogChartEl);

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        },
        formatter: tooltipFormatter
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300']
          }
        },
        axisLabel: {
          color: utils.getGrays()['600']
        },
        splitLine: { show: false },
        data: Array.from(Array(10).keys()).map(item => item + 1)
      },
      yAxis: {
        type: 'log',
        axisLabel: {
          color: utils.getGrays()['600']
        },
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200']
          }
        }
      },
      series: [
        {
          name: 'Index Of 3',
          type: 'line',
          data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
          symbolSize: 7,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('danger'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('danger')
          },
          symbol: 'circle'
        },
        {
          name: 'Index of 2',
          type: 'line',
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
          symbolSize: 7,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('success'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('success')
          },
          symbol: 'circle'
        },
        {
          name: 'Index of 1/2',
          type: 'line',
          data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
          symbolSize: 7,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('info'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('info')
          },
          symbol: 'circle'
        }
      ],
      grid: {
        right: 10,
        left: 5,
        bottom: 5,
        top: 10,
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsLineLogChartInit;
