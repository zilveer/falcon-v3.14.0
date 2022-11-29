import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Audience Chart                              */
/* -------------------------------------------------------------------------- */

const revenueChartInit = () => {
  const data = {
    dates: utils.getDates(
      new Date('5-6-2019'),
      new Date('5-6-2021'),
      1000 * 60 * 60 * 24 * 30
    ),
    dataset: {
      revenue: [
        [
          645, 500, 550, 550, 473, 405, 286, 601, 743, 450, 604, 815, 855, 722,
          700, 896, 866, 952, 719, 558, 737, 885, 972, 650, 600,
        ],
        [
          440, 250, 270, 400,  175, 180, 200, 400,  600, 380, 340, 550,  650, 450,
          400, 688,  650, 721, 500, 300, 445, 680, 568, 400, 371,
        ],
      ],
      users: [
        [
          545, 500, 650, 727, 773, 705, 686, 501, 643, 580, 604, 615, 755, 722,
          727, 816, 836, 952, 719, 758, 937, 785, 872, 850, 800,
        ],
        [
          340, 360, 230, 250, 410, 430, 450, 200, 220, 540, 500, 250, 355, 320,
          500, 630, 680, 500, 520, 550, 750, 720, 700, 780, 750,
        ],
      ],
      deals: [
        [
          545, 400, 450, 627, 473, 450, 460, 780, 770, 800, 504, 550, 500, 530,
          727, 716, 736, 820, 719, 758, 737, 885, 872, 850, 800,
        ],
        [
          245, 300, 450, 427, 273, 250, 260, 580, 570, 500, 402, 450, 400, 330,
          527, 516, 536, 620, 519, 558, 537, 483, 472, 250, 300,
        ],
      ],
      profit: [
        [
          545, 400, 450, 627, 673, 605, 686, 501, 843, 518, 504, 715, 955, 622,
          627, 716, 736, 952, 619, 558, 937, 785, 872, 550, 400,
        ],
        [
          340, 360, 330, 300, 410, 380, 450, 400, 420, 240, 200, 250, 355, 320,
          500, 630, 680, 400, 420, 450, 650, 620, 700, 450, 340,
        ],
      ],
    },
  };

  const tooltipFormatter = params => {
    return `<div class="card">
                <div class="card-header bg-light py-2">
                  <h6 class="text-600 mb-0">${params[0].axisValue}</h6>
                </div>
              <div class="card-body py-2">
                <h6 class="text-600 fw-normal">
                  <span class="fas fa-circle text-primary me-2"></span>Revenue: 
                  <span class="fw-medium">$${params[0].data}</span></h6>
                <h6 class="text-600 mb-0 fw-normal"> 
                  <span class="fas fa-circle text-warning me-2"></span>Revenue Goal: 
                  <span class="fw-medium">$${params[1].data}</span></h6>
              </div>
            </div>`;
  };

  const getDefaultOptions = (data1, data2) => () => ({
    color: utils.getGrays().white,
    tooltip: {
      trigger: 'axis',
      padding: 0,
      backgroundColor: 'transparent',
      borderWidth: 0,
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
      data: utils.getPastDates(25).map(date => window.dayjs(date).format('DD MMM, YYYY')),
      axisLabel: {
        color: utils.getGrays()['600'],
        formatter: value => window.dayjs(value).format('MMM DD'),
        align: 'left',
        fontSize: 11,
        padding: [0, 0, 0, 5],
        showMaxLabel: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      boundaryGap: true,
    },
    yAxis: {
      position: 'right',
      axisPointer: { type: 'none' },
      axisTick: 'none',
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        type: 'bar',
        name: 'Revenue',
        data: data1,
        lineStyle: {
          color: utils.getColor('primary'),
        },
        itemStyle: {
          barBorderRadius: [4, 4, 0, 0],
          color: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          borderWidth: 1,
        },
        emphasis: {
          itemStyle: {
            color: utils.getColor('primary'),
          },
        },
      },
      {
        type: 'line',
        name: 'Revenue Goal',
        data: data2,
        symbol: 'circle',
        symbolSize: 6,
        animation: false,
        itemStyle: {
          color: utils.getColor('warning'),
        },
        lineStyle: {
          type: 'dashed',
          width: 2,
          color: utils.getColor('warning'),
        },
      },
    ],
    grid: { right: 5, left: 5, bottom: '8%', top: '5%' },
  });
  const initChart = (el, options) => {
    const userOptions = utils.getData(el, 'options');
    const chart = window.echarts.init(el);
    echartSetOption(chart, userOptions, options);
  };
  const chartKeys = ['revenue', 'users', 'deals', 'profit'];
  chartKeys.forEach(key => {
    const el = document.querySelector(`.echart-crm-${key}`);
    el && 
      initChart(
        el, 
        getDefaultOptions(data.dataset[key][0], data.dataset[key][1])
      );
  });
};

export default revenueChartInit;