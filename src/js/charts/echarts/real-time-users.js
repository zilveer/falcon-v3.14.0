import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Real Time Users                        */
/* -------------------------------------------------------------------------- */

const realTimeUsersChartInit = () => {
  const $echartsRealTimeUsers = document.querySelector(
    '.echart-real-time-users'
  );

  if ($echartsRealTimeUsers) {
    const userOptions = utils.getData($echartsRealTimeUsers, 'options');
    const chart = window.echarts.init($echartsRealTimeUsers);

    const data = [
      921, 950, 916, 913, 909, 962, 926, 936, 977, 976, 999, 981, 998, 1000,
      900, 906, 973, 911, 994, 982, 917, 972, 952, 963, 991,
    ];
    const axisData = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ];

    const tooltipFormatter = params => {
      return `
      <div>
          <h6 class="fs--1 text-700 mb-0"><span class="fas fa-circle me-1 text-info"></span>
            Users : ${params[0].value}
          </h6>
      </div>
      `;
    };

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        axisPointer: {
          type: 'none',
        },
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

        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        boundaryGap: [0.2, 0.2],
        data: axisData,
      },
      yAxis: {
        type: 'value',
        scale: true,
        boundaryGap: false,
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        min: 500,
        max: 1100,
      },
      series: [
        {
          type: 'bar',
          barCategoryGap: '12%',
          data,
          itemStyle: {
            color: utils.rgbaColor('#fff', 0.3),
          },
        },
      ],
      grid: { right: '0px', left: '0px', bottom: 0, top: 0 },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    const userCounterDom = document.querySelector('.real-time-user');

    setInterval(() => {
      const rndData = utils.getRandomNumber(900, 1000);
      data.shift();
      data.push(rndData);
      axisData.shift();
      axisData.push(utils.getRandomNumber(100, 500));
      userCounterDom.innerHTML = rndData;

      chart.setOption({
        xAxis: {
          data: axisData,
        },
        series: [
          {
            data,
          },
        ],
      });
    }, 2000);
  }
};

export default realTimeUsersChartInit;
