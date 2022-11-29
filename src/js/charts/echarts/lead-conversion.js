import utils from '../../utils';
import { getPosition, echartSetOption, tooltipFormatter } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Traffic Channels                           */
/* -------------------------------------------------------------------------- */

const leadConversionInit = () => {
  const $leadConversion = document.querySelector('.echart-lead-conversion');

  if ($leadConversion) {
    const userOptions = utils.getData($leadConversion, 'options');
    const chart = window.echarts.init($leadConversion);

    const getDefaultOptions = () => ({
      color: [
        utils.rgbaColor(utils.getColors().primary, 0.7),
        utils.rgbaColor(utils.getColors().info, 0.6),
        utils.rgbaColor(utils.getColors().secondary, 0.2),
        utils.rgbaColor(utils.getColors().warning, 0.6)
      ],
      legend: {
        data: ['Campaigns', 'Lead', 'Opportunity', 'Deal'],
        left: '0%',
        icon: 'circle',
        inactiveColor: utils.getGrays()['400'],
        textStyle: { color: utils.getGrays()['700'] },
        itemGap: 10
      },
      yAxis: {
        type: 'category',
        data: [
          'kerry Ingram',
          'Bradie Pitter',
          'Harrington',
          'Ashley Shaw',
          'Jenny Horas',
          'Chris Pratt'
        ],
        axisLine: {
          show: false,
        },
        boundaryGap: false,
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200']
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: utils.getGrays()['600']
        }
      },
      xAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200']
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      tooltip: {
        trigger: 'axis',
        padding: [7,10],
        axisPointer: {
          type: 'none'
        },
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        formatter: tooltipFormatter
      },

      series: [
        {
          name: 'Campaigns',
          type: 'bar',
          stack: 'total',
          data: [1405, 1300, 1620, 1430, 1500, 1520],
          barWidth: '20%'
        },
        {
          name: 'Lead',
          type: 'bar',
          stack: 'total',
          data: [320, 302, 301, 334, 340, 390],
          barWidth: '20%'
        },
        {
          name: 'Opportunity',
          type: 'bar',
          stack: 'total',
          data: [220, 182, 351, 234, 290, 300],
          barWidth: '20%'
        },
        {
          name: 'Deal',
          type: 'bar',
          stack: 'total',
          data: [120, 182, 191, 134, 190, 170],
          barWidth: '20%'
        }
      ],
      grid: {
        right: 5,
        left: 5,
        bottom: 8,
        top: 60,
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default leadConversionInit;
