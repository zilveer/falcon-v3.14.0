import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Gross Revenue                          */
/* -------------------------------------------------------------------------- */

const grossRevenueChartInit = () => {
  const ECHART_GROSS_REVENUE = '.echart-gross-revenue-chart';

  const $echartsGrossRevenue = document.querySelector(ECHART_GROSS_REVENUE);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  if ($echartsGrossRevenue) {
    // Get options from data attribute
    const userOptions = utils.getData($echartsGrossRevenue, 'options');
    const chart = window.echarts.init($echartsGrossRevenue);


    const SELECT_MONTH = `#${userOptions.monthSelect}`;
    const LEGEND_MONTH_TARGET = userOptions.target;
    const LEGEND_CURRENT_MONTH = `#${userOptions.optionOne}`;
    const LEGEND_PREV_MONTH = `#${userOptions.optionTwo}`;

    const $legendCurrentMonth = document
      .getElementById(LEGEND_MONTH_TARGET)
      .querySelector(LEGEND_CURRENT_MONTH);
    const $legendPrevMonth = document
      .getElementById(LEGEND_MONTH_TARGET)
      .querySelector(LEGEND_PREV_MONTH);

    const dates = month => {
      return utils.getDates(
        window.dayjs().month(month).date(1), 
        window.dayjs().month(Number(month) + 1).date(0),
        1000 * 60 * 60 * 24 * 3
      );
    }

    const monthsnumber = [
      [20, 40, 20, 80, 50, 80, 120, 80, 50, 120, 110, 110],
      [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70],
      [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50],
      [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60],
      [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80],
      [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50],
      [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70],
      [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50],
      [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110],
      [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70],
      [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110],
      [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70],
      [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70],
    ];

    const tooltipFormatter = params => {
      const currentDate = window.dayjs(params[0].axisValue);
      let tooltipItem = ``
      params.forEach(el => {
        tooltipItem = tooltipItem +`<h6 class="fs--1 text-700"><span class="fas fa-circle me-2" style="color:${el.borderColor}"></span>
        ${currentDate.format('MMM DD')} : ${el.value}
      </h6>`
      });
      return `<div class='ms-1'>
                ${tooltipItem}
              </div>`;
    };
    const getDefaultOptions = () => ({
      title: {
        text: 'Sales over time',
        textStyle: {
          fontWeight: 500,
          fontSize: 13,
          fontFamily: 'poppins',
        },
      },
      legend: {
        show: false,
        data: ['currentMonth', 'prevMonth'],
      },
      color: utils.getGrays().white,
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        formatter: tooltipFormatter,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
      },
      xAxis: {
        type: 'category',
        data: dates(0),
        boundaryGap: false,
        axisPointer: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'dashed',
          },
        },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'solid',
          },
        },
        axisTick: { show: false },
        axisLabel: {
          color: utils.getGrays()['400'],
          formatter: function (value) {
            var date = new Date(value);
            return `${months[date.getMonth()].substring(
              0,
              3
            )} ${date.getDate()}`;
          },
          margin: 15,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'dashed',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisPointer: { show: false },
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
          },
        },
        boundaryGap: false,
        axisLabel: {
          show: true,
          color: utils.getGrays()['400'],
          margin: 15,
        },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      series: [
        {
          name: 'prevMonth',
          type: 'line',
          data: monthsnumber[0],
          lineStyle: { color: utils.getGrays()['300'] },
          itemStyle: {
            borderColor: utils.getGrays()['300'],
            borderWidth: 2,
          },
          symbol: 'none',
          smooth: false,
          hoverAnimation: true,
        },
        {
          name: 'currentMonth',
          type: 'line',
          data: monthsnumber[1],
          lineStyle: { color: utils.getColors().primary },
          itemStyle: {
            borderColor: utils.getColors().primary,
            borderWidth: 2,
          },
          symbol: 'none',
          smooth: false,
          hoverAnimation: true,
        },
      ],
      grid: { right: '8px', left: '40px', bottom: '15%', top: '20%' },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    // Change chart options accordiong to the selected month
    const monthSelect = document.querySelector(SELECT_MONTH);

    let month = 0;
    let currentMonthData = monthsnumber[Number(month) + 1];
    let prevMonthData = monthsnumber[monthSelect.selectedIndex];

    monthSelect.addEventListener('change', (e) => {
      month = e.currentTarget.value;
      currentMonthData = monthsnumber[Number(month) + 1];
      prevMonthData = monthsnumber[month];

      $legendCurrentMonth.querySelector('.text').innerText = months[month];
      $legendPrevMonth.querySelector('.text').innerText = months[month - 1]
        ? months[month - 1]
        : 'Dec';

      chart.setOption({
        xAxis: {
          data: dates(month)
        },
        series: [
          {
            data: currentMonthData,
          },
          {
            data: prevMonthData,
          },
        ],
      });
    });

    $legendCurrentMonth.addEventListener('click', () => {
      $legendCurrentMonth.classList.toggle('opacity-50');

      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'currentMonth',
      });
    });

    $legendPrevMonth.addEventListener('click', () => {
      $legendPrevMonth.classList.toggle('opacity-50');

      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'prevMonth',
      });
    });
  }
};

export default grossRevenueChartInit;
