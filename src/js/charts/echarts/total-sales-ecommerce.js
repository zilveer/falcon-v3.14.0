import utils from '../../utils';
import { echartSetOption, getPosition } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                      Echarts Total Sales E-commerce                        */
/* -------------------------------------------------------------------------- */

const totalSalesEcommerce = () => {
  const ECHART_LINE_TOTAL_SALES_ECOMM = '.echart-line-total-sales-ecommerce';
  const $echartsLineTotalSalesEcomm = document.querySelector(
    ECHART_LINE_TOTAL_SALES_ECOMM
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
    'Dec',
  ];

  function getFormatter(params) {
    return params
      .map(
        (
          { value, borderColor },
          index
        ) => `<span class= "fas fa-circle" style="color: ${borderColor}"></span>
    <span class='text-600'>${
      index === 0 ? 'Last Month' : 'Previous Year'
    }: ${value}</span>`
      )
      .join('<br/>');
  }
  if ($echartsLineTotalSalesEcomm) {
    // Get options from data attribute
    const userOptions = utils.getData($echartsLineTotalSalesEcomm, 'options');
    const TOTAL_SALES_LAST_MONTH = `#${userOptions.optionOne}`;
    const TOTAL_SALES_PREVIOUS_YEAR = `#${userOptions.optionTwo}`;
    const totalSalesLastMonth = document.querySelector(TOTAL_SALES_LAST_MONTH);
    const totalSalesPreviousYear = document.querySelector(
      TOTAL_SALES_PREVIOUS_YEAR
    );

    const chart = window.echarts.init($echartsLineTotalSalesEcomm);
    const getDefaultOptions = () => ({
      color: utils.getGrays()['100'],
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        formatter(params) {
          return getFormatter(params);
        },
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
      },
      legend: {
        data: ['lastMonth', 'previousYear'],
        show: false,
      },
      xAxis: {
        type: 'category',
        data: [
          '2019-01-05',
          '2019-01-06',
          '2019-01-07',
          '2019-01-08',
          '2019-01-09',
          '2019-01-10',
          '2019-01-11',
          '2019-01-12',
          '2019-01-13',
          '2019-01-14',
          '2019-01-15',
          '2019-01-16',
        ],
        boundaryGap: false,
        axisPointer: {
          lineStyle: {
            color: utils.getColor('gray-300'),
            type: 'dashed',
          },
        },
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            // color: utils.getGrays()['300'],
            color: utils.rgbaColor('#000', 0.01),
            type: 'dashed',
          },
        },

        axisTick: { show: false },
        axisLabel: {
          color: utils.getColor('gray-400'),
          formatter(value) {
            const date = new Date(value);
            return `${months[date.getMonth()]} ${date.getDate()}`;
          },
          margin: 15,
          // showMaxLabel: false
        },
      },
      yAxis: {
        type: 'value',
        axisPointer: { show: false },
        splitLine: {
          lineStyle: {
            color: utils.getColor('gray-300'),
            type: 'dashed',
          },
        },
        boundaryGap: false,
        axisLabel: {
          show: true,
          color: utils.getColor('gray-400'),
          margin: 15,
        },
        axisTick: { show: false },
        axisLine: { show: false },
      },

      series: [
        {
          name: 'lastMonth',
          type: 'line',
          data: [50, 80, 60, 80, 65, 90, 130, 90, 30, 40, 30, 70],
          lineStyle: { color: utils.getColor('primary') },
          itemStyle: {
            borderColor: utils.getColor('primary'),
            borderWidth: 2,
          },
          symbol: 'circle',
          symbolSize: 10,
          hoverAnimation: true,
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
                  color: utils.rgbaColor(utils.getColor('primary'), 0.2),
                },
                {
                  offset: 1,
                  color: utils.rgbaColor(utils.getColor('primary'), 0),
                },
              ],
            },
          },
        },

        {
          name: 'previousYear',
          type: 'line',
          data: [110, 30, 40, 50, 80, 70, 50, 40, 110, 90, 60, 60],
          lineStyle: { color: utils.rgbaColor(utils.getColor('warning'), 0.3) },
          itemStyle: {
            borderColor: utils.rgbaColor(utils.getColor('warning'), 0.6),
            borderWidth: 2,
          },
          symbol: 'circle',
          symbolSize: 10,
          hoverAnimation: true,
        },
      ],
      grid: {
        right: '18px',
        left: '40px',
        bottom: '15%',
        top: '5%',
      },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    totalSalesLastMonth.addEventListener('click', () => {
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'lastMonth',
      });
    });

    totalSalesPreviousYear.addEventListener('click', () => {
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'previousYear',
      });
    });
  }
};

export default totalSalesEcommerce;
