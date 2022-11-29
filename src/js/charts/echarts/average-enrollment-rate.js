import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                      Echarts Total Sales E-commerce                        */
/* -------------------------------------------------------------------------- */

const avgEnrollmentRateInit = () => {
  const $echartsLineAvgEnrollmentLms = document.querySelector(
    '.echart-avg-enrollment-rate'
  );

  function getFormatter(params) {
    return params
      .map(
        ({ seriesName, value, borderColor }) =>
          `<span class= "fas fa-circle fs--2" style="color: ${borderColor}"></span>
            <span class='text-600'>
              ${seriesName} : <strong>${value}</strong>
            </span>`
      )
      .join('<br/>');
  }
  if ($echartsLineAvgEnrollmentLms) {
    const userOptions = utils.getData($echartsLineAvgEnrollmentLms, 'options');
    const onSaleCourseRate = document.querySelector(
      `#${userOptions.optionOne}`
    );
    const regularPaidCourseRate = document.querySelector(
      `#${userOptions.optionTwo}`
    );

    const chart = window.echarts.init($echartsLineAvgEnrollmentLms);
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
      },
      legend: {
        show: false,
      },
      xAxis: [
        {
          type: 'category',
          position: 'bottom',
          data: [
            'launch',
            'week 1',
            'week 2',
            'week 3',
            'week 4',
            'week 5',
            'week 6',
            'week 7',
            'week 8',
            'week 9',
            'week 10',
            'week 11',
            'week 12',
          ],
          boundaryGap: false,
          axisPointer: {
            lineStyle: {
              color: utils.getGrays()['200'],
              type: 'line',
            },
          },
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['200'],
              type: 'line',
            },
          },

          axisTick: { show: false },
          axisLabel: {
            color: utils.getColor('gray-500'),
            formatter(value) {
              return value;
            },
            interval: 3,
            margin: 15,
            showMinLabel: true,
            showMaxLabel: false,
            align: 'center',
          },
        },
        {
          type: 'category',
          position: 'bottom',
          data: [
            'launch',
            'week 1',
            'week 2',
            'week 3',
            'week 4',
            'week 5',
            'week 6',
            'week 7',
            'week 8',
            'week 9',
            'week 10',
            'week 11',
            'week 12',
          ],
          boundaryGap: false,
          axisPointer: {
            lineStyle: {
              color: utils.getGrays()['200'],
              type: 'line',
            },
          },
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['200'],
              type: 'line',
            },
          },

          axisTick: { show: false },
          axisLabel: {
            color: utils.getColor('gray-500'),
            formatter(value) {
              return value;
            },
            interval: 200,
            margin: 15,
            showMaxLabel: true,
            showMinLabel: false,
            align: 'right',
          },
        },
      ],
      yAxis: {
        type: 'value',
        splitNumber: 3,
        axisPointer: { show: false },
        splitLine: {
          lineStyle: {
            color: utils.getColor('gray-200'),
            type: 'line',
          },
        },
        boundaryGap: false,
        axisLabel: {
          showMinLabel: false,
          show: true,
          color: utils.getColor('gray-400'),
          formatter: (value) => `${Math.round((value / 1000) * 10) / 10}k`,
        },
        axisTick: { show: false },
        axisLine: { show: false },
      },

      series: [
        {
          name: 'On Sale Course',
          type: 'line',
          data: [
            2000, 2800, 2200, 3001, 600, 600, 2000, 2000, 700, 1000, 200, 900,
            1200,
          ],
          lineStyle: { color: utils.getColor('primary') },
          itemStyle: {
            borderColor: utils.getColor('primary'),
            borderWidth: 2,
          },
          symbol: 'circle',
          symbolSize: 10,
          hoverAnimation: true,
        },

        {
          name: 'Regular Paid Course',
          type: 'line',
          data: [
            1700, 1200, 500, 700, 1500, 1100, 700, 1100, 2600, 2050, 1050, 600,
            700,
          ],
          lineStyle: { color: utils.getColor('warning'), type: 'dashed' },
          itemStyle: {
            borderColor: utils.getColor('warning'),
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
                  color: utils.rgbaColor(utils.getColor('warning'), 0.4),
                },
                {
                  offset: 1,
                  color: utils.rgbaColor(utils.getColor('warning'), 0),
                },
              ],
            },
          },
        },
      ],
      grid: {
        right: '10px',
        left: '30px',
        bottom: '15%',
        top: '5%',
      },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    onSaleCourseRate.addEventListener('click', () => {
      onSaleCourseRate.classList.toggle('opacity-50');
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'On Sale Course',
      });
    });

    regularPaidCourseRate.addEventListener('click', () => {
      regularPaidCourseRate.classList.toggle('opacity-50');
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'Regular Paid Course',
      });
    });
  }
};

export default avgEnrollmentRateInit;
