import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Audience Chart                              */
/* -------------------------------------------------------------------------- */

const audienceChartInit = () => {
  const data = {
    dates: utils.getPastDates(7),
    dataset: {
      users: [
        [504, 333, 400, 606, 451, 685, 404],
        [237, 229, 707, 575, 420, 536, 258],
      ],
      sessions: [
        [322, 694, 235, 537, 791, 292, 806],
        [584, 661, 214, 286, 526, 707, 627],
      ],
      rate: [
        [789, 749, 412, 697, 633, 254, 472],
        [276, 739, 525, 394, 643, 653, 719],
      ],
      duration: [
        [625, 269, 479, 654, 549, 305, 671],
        [499, 670, 550, 222, 696, 695, 469],
      ],
    },
  };
  const tooltipFormatter = params => {
    const percentage =
      ((params[0].value - params[1].value) / params[1].value) * 100;
    const perTemp = `
      <div class="d-flex align-items-center ms-2">
        <span class="fas fa-caret-${percentage < 0 ? 'down' : 'up'} text-${
      percentage < 0 ? 'danger' : 'success'
    }"></span>
        <h6 class="fs--2 mb-0 ms-1 fw-semi-bold">${Math.abs(percentage).toFixed(
          2
        )} %</h6>
      </div>
    `;
    const currentDate = new Date(params[0].axisValue);
    const prevDate = new Date(new Date().setDate(currentDate.getDate() - 7));
    return `<div>
          <p class='mb-0 fs--2 text-600'>${window
            .dayjs(params[0].axisValue)
            .format('MMM DD')} vs ${window.dayjs(prevDate).format('MMM DD')}</p>
          <div class="d-flex align-items-center">
            <p class='mb-0 text-600 fs--1'>
              Users: <span class='text-800 fw-semi-bold fs--1'>${
                params[0].data
              }</span>
            </p>
            ${perTemp}
          </div>
        </div>`;
  };

  const getDefaultOptions = (data1, data2) => () => ({
    color: utils.getGrays().white,
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
        type: 'none',
      },
      formatter: tooltipFormatter,
    },
    xAxis: {
      type: 'category',
      data: data.dates,
      axisLabel: {
        color: utils.getGrays()['600'],
        formatter: value => window.dayjs(value).format('MMM DD'),
        align: 'left',
        fontSize: 11,
        padding: [0, 0, 0, 5],
        showMaxLabel: false,
      },
      axisLine: {
        lineStyle: {
          color: utils.getGrays()['200'],
        },
      },
      axisTick: {
        show: true,
        length: 20,
        lineStyle: {
          color: utils.getGrays()['200'],
        },
      },
      boundaryGap: false,
    },
    yAxis: {
      position: 'right',
      axisPointer: { type: 'none' },
      axisTick: 'none',
      splitLine: {
        lineStyle: {
          color: utils.getGrays()['200'],
        },
      },
      axisLine: { show: false },
      axisLabel: { color: utils.getGrays()['600'] },
    },
    series: [
      {
        type: 'line',
        data: data1,
        showSymbol: false,
        symbol: 'circle',
        itemStyle: {
          borderColor: utils.getColors().primary,
          borderWidth: 2,
        },
        lineStyle: {
          color: utils.getColor('primary'),
        },
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
                color: utils.rgbaColor(utils.getColors().primary, 0.2),
              },
              {
                offset: 1,
                color: utils.rgbaColor(utils.getColors().primary, 0),
              },
            ],
          },
        },
      },
      {
        type: 'line',
        data: data2,
        symbol: 'none',
        lineStyle: {
          type: 'dashed',
          width: 1,
          color: utils.getColor('info'),
        },
      },
    ],
    grid: { right: '40px', left: '5px', bottom: '10%', top: '3%' },
  });

  const initChart = (el, options) => {
    const userOptions = utils.getData(el, 'options');
    const chart = window.echarts.init(el);
    echartSetOption(chart, userOptions, options);
  };

  const tab = document.querySelector('#audience-chart-tab');

  if (tab) {
    initChart(
      document.querySelector('.echart-audience'),
      getDefaultOptions(data.dataset.users[0], data.dataset.users[1])
    );

    const triggerTabList = Array.from(
      tab.querySelectorAll('[data-bs-toggle="tab"]')
    );
    triggerTabList.forEach(function (triggerEl) {
      triggerEl.addEventListener('shown.bs.tab', function () {
        const key = triggerEl.href.split('#').pop();
        const $echartAudience = document
          .getElementById(key)
          .querySelector('.echart-audience');

        initChart(
          $echartAudience,
          getDefaultOptions(data.dataset[key][0], data.dataset[key][1])
        );
      });
    });
  }
};

export default audienceChartInit;
