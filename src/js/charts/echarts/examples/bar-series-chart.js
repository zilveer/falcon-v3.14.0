import utils from '../../../utils';
import { echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Bar Chart                             */
/* -------------------------------------------------------------------------- */

const echartsBarSeriesChartInit = () => {
  const $barSeriesChartEl = document.querySelector('.echart-bar-chart-series-example');

  if ($barSeriesChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($barSeriesChartEl, 'options');
    const chart = window.echarts.init($barSeriesChartEl);

    const getDefaultOptions = () => ({
      color: [utils.getColor('primary'), utils.getColor('info')],
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
      xAxis: {
        type: 'value',
        axisLabel: {
          formatter: value => `${value / 1000}k`,
          color: utils.getGrays()['500']
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'solid'
          }
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: utils.getGrays()['200']
          }
        }
      },
      yAxis: {
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'solid'
          }
        },
        axisLabel: {
          color: utils.getGrays()['500']
        },
        axisTick: { show: false },
        splitLine: { show: false },
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China']
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744],
          itemStyle: {
            barBorderRadius: [0, 3, 3, 0]
          }
        },
        {
          name: '2012',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141],
          itemStyle: {
            barBorderRadius: [0, 3, 3, 0]
          }
        }
      ],
      grid: { right: 15, left: '12%', bottom: '10%', top: 5 }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsBarSeriesChartInit;
