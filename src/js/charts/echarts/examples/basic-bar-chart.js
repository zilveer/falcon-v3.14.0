import utils from '../../../utils';
import { echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Bar Chart                             */
/* -------------------------------------------------------------------------- */

const echartsBasicBarChartInit = () => {
  const $barChartEl = document.querySelector('.echart-basic-bar-chart-example');

  if ($barChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($barChartEl, 'options');
    const chart = window.echarts.init($barChartEl);

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

    const data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        formatter: tooltipFormatter,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        }
      },
      xAxis: {
        type: 'category',
        data: months,
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'solid'
          }
        },
        axisTick: { show: false },
        axisLabel: {
          color: utils.getGrays()['400'],
          formatter: value => value.substring(0, 3),
          margin: 15
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: true,
        axisLabel: {
          show: true,
          color: utils.getGrays()['400'],
          margin: 15
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['200']
          }
        },
        axisTick: { show: false },
        axisLine: { show: false },
        min: 600
      },
      series: [
        {
          type: 'bar',
          name: 'Total',
          data,
          lineStyle: { color: utils.getColor('primary') },
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [3, 3, 0, 0]
          },
          showSymbol: false,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true
        }
      ],
      grid: { right: '3%', left: '10%', bottom: '10%', top: '5%' }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsBasicBarChartInit;
