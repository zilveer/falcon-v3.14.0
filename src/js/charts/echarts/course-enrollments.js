import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Course Enrollment                              */
/* -------------------------------------------------------------------------- */

const courseEnrollmentsInit = () => {
  const $echartBarCourseEnrollments = document.querySelector(
    '.echart-bar-course-enrollments'
  );

  const data = [
    ['course', 'Free Course', 'Paid Course', 'On sale Course'],
    ['Sun', 4300, 8500, 5000],
    ['Mon', 8300, 7300, 4500],
    ['Tue', 8600, 6200, 3600],
    ['Wed', 7200, 5300, 4500],
    ['Thu', 8000, 5000, 2600],
    ['Fri', 5000, 7000, 8800],
    ['Sat', 8000, 9000, 6000],
  ];

  if ($echartBarCourseEnrollments) {
    const userOptions = utils.getData($echartBarCourseEnrollments, 'options');
    const chart = window.echarts.init($echartBarCourseEnrollments);

    const getDefaultOptions = () => ({
      color: [
        utils.rgbaColor(utils.getColors().info, 0.6),
        utils.getColors().primary,
        utils.rgbaColor(utils.getColors().warning, 0.4),
      ],
      dataset: { source: data },
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays().primary,
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: (params) =>
          `<div class="font-weight-semi-bold">${
            params.seriesName
          }</div><div class="fs--1 text-600"><strong>${params.name}:</strong> ${
            params.value[params.componentIndex + 1]
          }</div>`,
      },
      legend: {
        data: ['Free Course', 'Paid Course', 'On sale Course'],
        left: 'left',
        itemWidth: 10,
        itemHeight: 10,
        borderRadius: 0,
        icon: 'circle',
        inactiveColor: utils.getGrays()['400'],
        textStyle: { color: utils.getGrays()['700'] },
      },
      xAxis: {
        type: 'category',
        axisLabel: { color: utils.getGrays()['400'] },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'line',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['200'],
            type: 'line',
            width: 0.5,
          },
        },
        axisTick: { show: false },
        boundaryGap: true,
      },
      yAxis: {
        axisPointer: { type: 'none' },
        axisTick: 'none',
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200'],
            type: 'dashed',
          },
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: utils.getGrays()['400'],
          formatter: (value) => `${Math.round((value / 1000) * 10) / 10}k`,
        },
      },
      series: [
        {
          type: 'bar',
          barWidth: '15%',
          barGap: '30%',
          label: { normal: { show: false } },
          z: 10,
          emphasis: {
            focus: 'series',
          },
          itemStyle: {
            normal: {
              barBorderRadius: [2, 2, 0, 0],
            },
          },
        },
        {
          type: 'bar',
          barWidth: '15%',
          barGap: '30%',
          label: { normal: { show: false } },
          z: 10,
          emphasis: {
            focus: 'series',
          },
          itemStyle: {
            normal: {
              barBorderRadius: [2, 2, 0, 0],
            },
          },
        },
        {
          type: 'bar',
          barWidth: '15%',
          barGap: '30%',
          label: { normal: { show: false } },
          z: 10,
          emphasis: {
            focus: 'series',
          },
          itemStyle: {
            normal: {
              barBorderRadius: [2, 2, 0, 0],
            },
          },
        },
      ],
      grid: {
        right: '1px',
        left: '30px',
        bottom: '10%',
        top: '20%',
      },
    });

    const initChart = () => {
      if (utils.isScrolledIntoView($echartBarCourseEnrollments)) {
        echartSetOption(chart, userOptions, getDefaultOptions);
        window.removeEventListener('scroll', initChart);
      }
    };

    window.addEventListener('scroll', initChart);
  }
};

export default courseEnrollmentsInit;
