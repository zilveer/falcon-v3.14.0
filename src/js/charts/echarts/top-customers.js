import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Audience Chart                              */
/* -------------------------------------------------------------------------- */

const topCustomersChartInit = () => {
  const data = {
    hours: ["1H", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H"],
    dataset: {
      monday: [
        [18, 50, 45, 80, 45, 60, 55, 82, 61, 50],
      ],
      tuesday: [
        [50, 45, 32, 74, 45, 55, 85, 30, 25, 50],
      ],
      wednesday: [
        [88, 70, 75, 54, 45, 44, 25, 65, 11, 20],
      ],
      thursday: [
        [20, 30, 40, 50, 70, 80, 85, 40, 30, 20],
      ],
      friday: [
        [18, 50, 45, 75, 45, 80, 85, 65, 61, 50],
      ],
      saturday: [
        [25, 50, 45, 75, 80, 44, 55, 85, 61, 45],
      ],
      sunday: [
        [11, 50, 45, 78, 45, 54, 80, 90, 50, 65],
      ],
    },
  };

  const getDefaultOptions = (data1) => () => ({
    color: utils.getGrays()['100'],
    tooltip: {
      trigger: 'item',
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
        type: 'none',
      },
    },
    xAxis: {
      type: 'category',
      data: data.hours,
      axisLabel: {
        color: utils.getGrays()['600'],
        margin: 15,
      },
      axisLine: {
        lineStyle: {
          color: utils.getGrays()['300'],
          type: 'dashed',
        },
      },
      axisTick: {
        show: false,
      },
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      axisPointer: { show: false },
      splitLine: {
        lineStyle: {
          color: utils.getGrays()['300'],
          type: 'dashed',
        },
      },
      boundaryGap: false,
      axisLabel: {
        show: true,
        color: utils.getGrays()['600'],
        margin: 25,
      },
      axisTick: { show: false },
      axisLine: { show: false },
    },
    series: [
      {
        type: 'line',
        data: data1,
        symbol: "circle",
        symbolSize: 10,
        itemStyle: {
          borderColor: utils.getColors().primary,
          borderWidth: 2,
        },
        lineStyle: { color: utils.getColors().primary },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: utils.rgbaColor(utils.getColors().primary, 0.1),
              },
              {
                offset: 1,
                color: utils.rgbaColor(utils.getColors().primary, 0),
              },
            ],
          },
        },
      },
    ],
    grid: { right: '12px', left: '46px', bottom: '12%', top: '3%' },
  });

  const initChart = (el, options) => {
    const userOptions = utils.getData(el, 'options');
    const chart = window.echarts.init(el);
    echartSetOption(chart, userOptions, options);
  };

  const tab = document.querySelector('#top-customers-chart-tab');

  if (tab) {
    initChart(
      document.querySelector('.echart-top-customers'),
      getDefaultOptions(data.dataset.monday[0])
    );

    const triggerTabList = Array.from(
      tab.querySelectorAll('[data-bs-toggle="tab"]')
    );
    triggerTabList.forEach(function (triggerEl) {
      triggerEl.addEventListener('shown.bs.tab', function () {
        const key = triggerEl.href.split('#').pop();
        const $echartTopCustomers = document
          .getElementById(key)
          .querySelector('.echart-top-customers');

        initChart(
          $echartTopCustomers,
          getDefaultOptions(data.dataset[key][0])
        );
      });
    });
  }
};

export default topCustomersChartInit;
