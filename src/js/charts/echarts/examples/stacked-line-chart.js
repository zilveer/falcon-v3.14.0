import utils from '../../../utils';
import { getPosition, echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                     Echarts Stacked Line Chart                             */
/* -------------------------------------------------------------------------- */

const echartsStackedLineChartInit = () => {
  const $stackedLineChartEl = document.querySelector('.echart-stacked-line-chart-example');

  if ($stackedLineChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($stackedLineChartEl, 'options');
    const chart = window.echarts.init($stackedLineChartEl);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const getDefaultOptions = () => ({
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
          color: utils.getGrays()['400'],
          margin: 15,
          formatter: value => value.substring(0, 3)
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200'],
            type: 'dashed'
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
          name: 'Matcha Latte',
          type: 'line',
          symbolSize: 6,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('info'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('info')
          },
          symbol: 'circle',
          stack: 'product',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Milk Tea',
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('success'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('success')
          },
          symbol: 'circle',
          stack: 'product',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Cheese Cocoa',
          type: 'line',
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
          stack: 'product',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Cheese Brownie',
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('warning'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('warning')
          },
          symbol: 'circle',
          stack: 'product',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Matcha Cocoa',
          type: 'line',
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
          stack: 'product',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ],
      grid: { right: 10, left: 5, bottom: 5, top: 8, containLabel: true }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsStackedLineChartInit;
