import utils from '../../utils';
import { getPosition, echartSetOption, tooltipFormatter } from './echarts-utils';
/* -------------------------------------------------------------------------- */
/*                     Echarts Line Returing Customer Rate                    */
/* -------------------------------------------------------------------------- */
const returningCustomerRateInit = () => {
  const ECHART_LINE_RETURNING_CUSTOMER_RATE = '.echart-line-returning-customer-rate';
  const $echartsLineReturningCustomerRate = document.querySelector(
    ECHART_LINE_RETURNING_CUSTOMER_RATE
  );
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
    'Dec'
  ];

  if ($echartsLineReturningCustomerRate) {
    // Get options from data attribute
    const userOptions = utils.getData($echartsLineReturningCustomerRate, 'options');
    const LEGEND_MONTH_TARGET = userOptions.target;
    const SELECT_MONTH = `#${userOptions.monthSelect}`;
    const LEGEND_NEW_MONTH = `#${userOptions.optionOne}`;
    const LEGEND_RETURNING_MONTH = `#${userOptions.optionTwo}`;
    const $legendNewMonth = document
      .getElementById(LEGEND_MONTH_TARGET)
      .querySelector(LEGEND_NEW_MONTH);
    const $legendReturningMonth = document
      .getElementById(LEGEND_MONTH_TARGET)
      .querySelector(LEGEND_RETURNING_MONTH);
    const chart = window.echarts.init($echartsLineReturningCustomerRate);

    const monthNumbers = [
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
      [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70]
    ];
    const dates = month => {
      return utils.getDates(
        window.dayjs().month(month).date(1),
        window
          .dayjs()
          .month(Number(month) + 1)
          .date(0),
        1000 * 60 * 60 * 24 * 3
      );
    };
    const getDefaultOptions = () => ({
      title: {
        text: 'Customers',
        textStyle: {
          fontWeight: 500,
          fontSize: 13,
          fontFamily: 'poppins',
          color: utils.getColor('gray-900')
        }
      },
      legend: {
        show: false,
        data: ['New', 'Returning']
      },
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
        formatter: tooltipFormatter
      },
      xAxis: {
        type: 'category',
        data: dates(0),
        boundaryGap: false,
        axisPointer: {
          lineStyle: {
            color: utils.getColor('gray-300'),
            type: 'dashed'
          }
        },
        axisLine: {
          lineStyle: {
            color: utils.getColor('gray-300'),
            type: 'solid'
          }
        },
        axisTick: { show: false },
        axisLabel: {
          color: utils.getColor('gray-400'),
          formatter(value) {
            const date = new Date(value);
            if (date.getDate() === 1) {
              return `${months[date.getMonth()].substring(0, 3)} ${date.getDate()}`;
            }
            return `${date.getDate()}`;
          },
          margin: 15
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'dashed'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisPointer: { show: false },
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['300']
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
          name: 'New',
          type: 'line',
          data: monthNumbers[1],
          lineStyle: { color: utils.getColors().primary },
          itemStyle: {
            borderColor: utils.getColors().primary,
            borderWidth: 2
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
                  color: utils.rgbaColor(utils.getColor('primary'), 0.2)
                },
                {
                  offset: 1,
                  color: utils.rgbaColor(utils.getColor('primary'), 0.01)
                }
              ]
            }
          },
          symbol: 'none',
          smooth: false,
          hoverAnimation: true
        },
        {
          name: 'Returning',
          type: 'line',
          data: monthNumbers[0],
          lineStyle: { color: utils.getColor('warning') },
          itemStyle: {
            borderColor: utils.getColor('warning'),
            borderWidth: 2
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
                  color: utils.rgbaColor(utils.getColor('warning'), 0.2)
                },
                {
                  offset: 1,
                  color: utils.rgbaColor(utils.getColor('warning'), 0.01)
                }
              ]
            }
          },
          symbol: 'none',
          smooth: false,
          hoverAnimation: true
        }
      ],
      grid: { right: '7px', left: '35px', bottom: '8%', top: '15%' }
    });
    echartSetOption(chart, userOptions, getDefaultOptions);

    // Change chart options accordiong to the selected month
    const monthSelect = document.querySelector(SELECT_MONTH);

    monthSelect.addEventListener('change', e => {
      const month = e.currentTarget.value;
      const dataNewMonth = monthNumbers[Number(month) + 1];
      const dataReturningMonth = monthNumbers[month];
      chart.setOption({
        xAxis: {
          data: dates(month)
        },
        series: [
          {
            data: dataNewMonth
          },
          {
            data: dataReturningMonth
          }
        ]
      });
    });
    $legendNewMonth.addEventListener('click', () => {
      $legendNewMonth.classList.toggle('opacity-50');
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'New'
      });
    });
    $legendReturningMonth.addEventListener('click', () => {
      $legendReturningMonth.classList.toggle('opacity-50');
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'Returning'
      });
    });
  }
};
export default returningCustomerRateInit;
