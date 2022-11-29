import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Active Users                           */
/* -------------------------------------------------------------------------- */

const activeUsersChartReportInit = () => {
  const $echartsActiveUsersChart = document.querySelector(
    '.echart-active-users-report'
  );

  if ($echartsActiveUsersChart) {
    const userOptions = utils.getData($echartsActiveUsersChart, 'options');
    const chart = window.echarts.init($echartsActiveUsersChart);

    const tooltipFormatter = params => {
      return `
      <div>
        <p class='mb-2 text-600'>${window
          .dayjs(params[0].axisValue)
          .format('MMM DD, YYYY')}</p>
        <div class='ms-1'>
          <h6 class="fs--1 text-700"><span class="fas fa-circle text-primary me-2"></span>${
            params[0].value
          }</h6>
          <h6 class="fs--1 text-700"><span class="fas fa-circle text-success me-2"></span>${
            params[1].value
          }</h6>
          <h6 class="fs--1 text-700"><span class="fas fa-circle text-info me-2"></span>${
            params[2].value
          }</h6>
        </div>
      </div>
      `;
    };
    const getDefaultOptions = () => ({
      color: [
        utils.getColor('primary'),
        utils.getColor('success'),
        utils.getColor('info'),
      ],
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
        formatter: tooltipFormatter,
      },
      xAxis: {
        type: 'category',
        data: utils
          .getPastDates(30)
          .map(date => window.dayjs(date).format('DD MMM, YYYY')),
        boundaryGap: false,
        silent: true,
        axisPointer: {
          lineStyle: {
            color: utils.getGrays()['300'],
          },
        },
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
          },
        },
        axisTick: {
          show: true,
          length: 20,
          lineStyle: {
            color: utils.getGrays()['200'],
          },

          interval: 5,
        },
        axisLabel: {
          color: utils.getGrays()['600'],
          formatter: value => window.dayjs(value).format('MMM DD'),
          align: 'left',
          fontSize: 11,
          padding: [0, 0, 0, 5],
          interval: 5,
        },
      },
      yAxis: {
        type: 'value',
        position: 'right',
        axisPointer: { show: false },
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200'],
          },
        },
        axisLabel: {
          show: true,
          color: utils.getGrays()['600'],
          formatter: value => `${Math.round((value / 1000) * 10) / 10}k`,
        },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      series: [
        {
          type: 'line',
          data: [
            4164, 4652, 4817, 4841, 4920, 5439, 5486, 5498, 5512, 5538, 5841,
            5877, 6086, 6146, 6199, 6431, 6704, 7939, 8127, 8296, 8322, 8389,
            8411, 8502, 8868, 8977, 9273, 9325, 9345, 9430,
          ],
          showSymbol: false,
          symbol: 'circle',
          itemStyle: {
            borderColor: utils.getColors().primary,
            borderWidth: 2,
          },
          lineStyle: {
            color: utils.getColor('primary'),
          },
          symbolSize: 2,
        },
        {
          type: 'line',
          data: [
            2164, 2292, 2386, 2430, 2528, 3045, 3255, 3295, 3481, 3604, 3688,
            3840, 3932, 3949, 4003, 4298, 4424, 4869, 4922, 4973, 5155, 5267,
            5566, 5689, 5692, 5758, 5773, 5799, 5960, 6000,
          ],
          showSymbol: false,
          symbol: 'circle',
          itemStyle: {
            borderColor: utils.getColors().success,
            borderWidth: 2,
          },
          lineStyle: {
            color: utils.getColor('success'),
          },
          symbolSize: 2,
        },
        {
          type: 'line',
          data: [
            1069, 1089, 1125, 1141, 1162, 1179, 1185, 1216, 1274, 1322, 1346,
            1395, 1439, 1564, 1581, 1590, 1656, 1815, 1868, 2010, 2133, 2179,
            2264, 2265, 2278, 2343, 2354, 2456, 2472, 2480,
          ],
          showSymbol: false,
          symbol: 'circle',
          itemStyle: {
            borderColor: utils.getColors().info,
            borderWidth: 2,
          },
          lineStyle: {
            color: utils.getColor('info'),
          },
          symbolSize: 2,
        },
      ],
      grid: { right: '30px', left: '5px', bottom: '20px', top: '20px' },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default activeUsersChartReportInit;
