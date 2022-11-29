import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Browsed Courses                           */
/* -------------------------------------------------------------------------- */

const browsedCoursesInit = () => {
  const $echartsBrowsedCourses = document.querySelector(
    '.echart-browsed-courses'
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

  const tooltipFormatter = (params) => `
    <div>
      <p class='mb-2 text-600'>
      ${
        window.dayjs(params[0].axisValue).isValid()
          ? window.dayjs(params[0].axisValue).format('MMMM YYYY')
          : params[0].axisValue
      }
      </p>
      ${params
        .map(
          ({ seriesName, value, borderColor }) =>
            `<span class= "fas fa-circle fs--2" style="color: ${borderColor}"></span>
            <span class='text-600'>
              ${seriesName} : <strong>${value}</strong>
            </span>`
        )
        .join('<br />')}
    </div>`;

  if ($echartsBrowsedCourses) {
    const userOptions = utils.getData($echartsBrowsedCourses, 'options');
    const newCourseBrowsedEl = document.querySelector(
      `#${userOptions.optionOne}`
    );
    const paidCourseBrowsedEl = document.querySelector(
      `#${userOptions.optionTwo}`
    );
    const chart = window.echarts.init($echartsBrowsedCourses);

    const getDefaultOptions = () => ({
      color: utils.getGrays()['100'],
      legend: {
        data: ['newCourseBrowsed', 'paidCourseBrowsed'],
        show: false,
      },
      xAxis: {
        type: 'category',
        data: [
          '2020-01-01',
          '2020-02-01',
          '2020-03-01',
          '2020-04-01',
          '2020-05-01',
          '2020-06-01',
          '2020-07-01',
          '2020-08-01',
          '2020-09-01',
          '2020-10-01',
          '2020-11-01',
          '2020-12-01',
          '2021-01-01',
          '2021-02-01',
          '2021-03-01',
          '2021-04-01',
          '2021-05-01',
          '2021-06-01',
          '2021-07-01',
          '2021-08-01',
          '2021-09-01',
          '2021-10-01',
          '2021-11-01',
          '2021-12-01',
        ],
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: utils.getGrays()['600'],
          formatter: (value) => {
            const date = new Date(value);
            return `${months[date.getMonth()]}`;
          },
          interval: 2,
        },
      },
      yAxis: {
        type: 'value',
        show: false,
      },
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
        formatter(params) {
          return tooltipFormatter(params);
        },
      },

      series: [
        {
          name: 'Total',
          type: 'bar',
          barWidth: '50%',
          z: -1,
          data: [
            600, 832, 901, 934, 1290, 1330, 1320, 1250, 1190, 1345, 1009, 1320,
            600, 832, 901, 934, 1290, 1330, 1320, 1250, 1190, 1345, 1009, 1320,
          ],
          itemStyle: {
            emphasis: {
              color: utils.getSoftColors().info,
              barBorderRadius: [5, 5, 0, 0],
              borderWidth: 1,
              borderColor: utils.getGrays()[300],
            },
            normal: {
              color: utils.getSoftColors().primary,
              barBorderRadius: [5, 5, 0, 0],
              borderWidth: 1,
              borderColor: utils.getGrays()[300],
            },
          },
        },
        {
          name: 'Paid',
          type: 'bar',
          barWidth: '50%',
          barGap: '-100%',
          data: [
            320, 420, 800, 100, 1000, 930, 720, 1020, 800, 320, 450, 150, 320,
            420, 800, 100, 1000, 930, 720, 1020, 800, 320, 450, 150,
          ],
          itemStyle: {
            normal: {
              barBorderRadius: [5, 5, 0, 0],
              color: utils.getColors().primary,
              borderWidth: 1,
              borderColor: utils.getColors().primary,
            },
          },
        },
      ],

      grid: {
        right: '0px',
        left: '0px',
        bottom: '10%',
        top: '15%',
      },
    });

    const initChart = () => {
      if (utils.isScrolledIntoView($echartsBrowsedCourses)) {
        echartSetOption(chart, userOptions, getDefaultOptions);
        window.removeEventListener('scroll', initChart);
      }
    };

    window.addEventListener('scroll', initChart);

    newCourseBrowsedEl.addEventListener('click', () => {
      newCourseBrowsedEl.classList.toggle('opacity-50');
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'Total',
      });
    });

    paidCourseBrowsedEl.addEventListener('click', () => {
      paidCourseBrowsedEl.classList.toggle('opacity-50');
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'Paid',
      });
    });
  }
};

export default browsedCoursesInit;
