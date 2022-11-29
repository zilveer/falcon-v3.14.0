import utils from '../../../utils';
import { echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Bar Chart                             */
/* -------------------------------------------------------------------------- */

const echartsBarNegativeChartInit = () => {
  const $barNegativeChartEl = document.querySelector('.echart-bar-chart-negative-example');

  if ($barNegativeChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($barNegativeChartEl, 'options');
    const chart = window.echarts.init($barNegativeChartEl);

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: tooltipFormatter
      },
      grid: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5
      },
      xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: utils.getGrays()['200']
          }
        }
      },
      yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        data: ['Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'One']
      },
      series: [
        {
          name: 'Cost',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            formatter: '{b}',
            color: '#fff'
          },
          itemStyle: {
            color: utils.getColor('primary')
          },
          data: [-0.12, -0.19, 0.2, 0.44, -0.23, 0.08, -0.17, 0.47, -0.36, 0.18]
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsBarNegativeChartInit;
