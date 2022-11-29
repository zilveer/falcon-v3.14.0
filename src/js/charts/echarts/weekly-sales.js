/* eslint-disable */
import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Weekly Sales                                */
/* -------------------------------------------------------------------------- */

const weeklySalesInit = () => {
  const ECHART_BAR_WEEKLY_SALES = '.echart-bar-weekly-sales';
  const $echartBarWeeklySales = document.querySelector(ECHART_BAR_WEEKLY_SALES);

  if ($echartBarWeeklySales) {
    // Get options from data attribute
    const userOptions = utils.getData($echartBarWeeklySales, 'options');

    const data = [120, 200, 150, 80, 70, 110, 120];

    // Max value of data
    const yMax = Math.max(...data);

    // const dataBackground = data.map(() => yMax);
    const chart = window.echarts.init($echartBarWeeklySales);

    // Default options
    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        formatter: '{b0} : {c0}',
        transitionDuration: 0,
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        }
      },
      xAxis: {
        type: 'category',
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        boundaryGap: false,
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisPointer: { type: 'none' }
      },
      yAxis: {
        type: 'value',
        splitLine: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisPointer: { type: 'none' }
      },
      series: [
        {
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          barWidth: '5px',
          itemStyle: {
            barBorderRadius: 10,
            color: utils.getColors().primary
          },
          data,
          z: 10,
          emphasis: { itemStyle: { color: utils.getColors().primary } }
        }
      ],
      grid: { right: 5, left: 10, top: 0, bottom: 0 }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default weeklySalesInit;
