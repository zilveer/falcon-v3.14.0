import utils from '../../../utils';
import { getPosition, echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Step Line Chart                        */
/* -------------------------------------------------------------------------- */

const echartsStepLineChartInit = () => {
  const $stepLineChartEl = document.querySelector('.echart-step-line-chart-example');

  if ($stepLineChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($stepLineChartEl, 'options');
    const chart = window.echarts.init($stepLineChartEl);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const getDefaultOptions = () => ({
      color: [utils.getColor('danger'), utils.getColor('warning'), utils.getColor('primary')],

      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: tooltipFormatter,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
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
        },
        axisPointer: {
          lineStyle: {
            color: utils.getGrays()['300']
          }
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
          name: 'Step Start',
          type: 'line',
          step: 'start',
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
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Step Middle',
          type: 'line',
          step: 'middle',
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
          data: [220, 282, 201, 234, 290, 430, 410]
        },
        {
          name: 'Step End',
          type: 'line',
          step: 'end',
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
          data: [450, 432, 401, 454, 590, 530, 510]
        }
      ],
      grid: { right: '3%', left: '8%', bottom: '10%', top: '5%' }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsStepLineChartInit;
