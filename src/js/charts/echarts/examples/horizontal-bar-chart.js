import utils from '../../../utils';
import { echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                       Echarts Horizontal Bar Chart                         */
/* -------------------------------------------------------------------------- */

const echartsHorizontalBarChartInit = () => {
  const $horizontalBarChartEl = document.querySelector('.echart-horizontal-bar-chart-example');

  if ($horizontalBarChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($horizontalBarChartEl, 'options');
    const chart = window.echarts.init($horizontalBarChartEl);

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
        type: 'value',
        boundaryGap: false,
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300']
          }
        },
        axisTick: { show: true },
        axisLabel: {
          color: utils.getGrays()['500']
        },
        splitLine: {
          show: false
        },
        min: 600
      },
      yAxis: {
        type: 'category',
        data: months,
        boundaryGap: true,
        axisLabel: {
          formatter: value => value.substring(0, 3),
          show: true,
          color: utils.getGrays()['500'],
          margin: 15
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['200']
          }
        },
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300']
          }
        }
      },
      series: [
        {
          type: 'bar',
          name: 'Total',
          data,
          lineStyle: { color: utils.getColor('primary') },
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [0, 3, 3, 0]
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

export default echartsHorizontalBarChartInit;
