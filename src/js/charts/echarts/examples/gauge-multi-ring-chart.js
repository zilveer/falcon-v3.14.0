import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                          Echarts Gauge Progress Chart                      */
/* -------------------------------------------------------------------------- */

const echartsGaugeMultiRingChartInit = () => {
  const $gaugeMultiRingChartEl = document.querySelector(
    '.echart-gauge-multi-ring-chart-example'
  );

  if ($gaugeMultiRingChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($gaugeMultiRingChartEl, 'options');
    const chart = window.echarts.init($gaugeMultiRingChartEl);

    const getDefaultOptions = () => ({
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          radius: '85%',
          pointer: {
            show: false,
          },
          center: ['50%', '50%'],
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: utils.getColor('info'),
            },
          },
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[1, utils.getColor('gray-200')]],
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          data: [79],
          detail: {
            show: false,
          },
          animationDuration: 2000,
        },
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          radius: '70%',
          pointer: {
            show: false,
          },
          center: ['50%', '50%'],
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: utils.getColor('primary'),
            },
          },
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[1, utils.getColor('gray-200')]],
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          data: [85],
          detail: {
            show: false,
          },
          animationDuration: 2000,
        },
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          radius: '55%',
          pointer: {
            show: false,
          },
          center: ['50%', '50%'],
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: utils.getColor('success'),
            },
          },
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[1, utils.getColor('gray-200')]],
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          data: [70],
          detail: {
            show: false,
          },
          animationDuration: 2000,
        },
      ],
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsGaugeMultiRingChartInit;
