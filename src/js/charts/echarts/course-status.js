import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Pie Chart                              */
/* -------------------------------------------------------------------------- */

const courseStatusInit = () => {
  const $echartsCourseStatus = document.querySelector('.echart-course-status');

  const data = [
    {
      value: 13,
      name: 'Completed',
      itemStyle: {
        color: utils.getColor('primary'),
      },
    },
    {
      value: 20,
      name: 'On going',
      itemStyle: {
        color: utils.getColor('info'),
      },
    },
    {
      value: 10,
      name: 'Droped',
      itemStyle: {
        color: utils.getColor('warning'),
      },
    },
    {
      value: 7,
      name: 'Refunded',
      itemStyle: {
        color: utils.getColor('success'),
      },
    },
  ];

  if ($echartsCourseStatus) {
    const userOptions = utils.getData($echartsCourseStatus, 'options');
    const chart = window.echarts.init($echartsCourseStatus);

    const getDefaultOptions = () => ({
      legend: {
        show: false,
      },
      series: [
        {
          type: 'pie',
          radius: '70%',
          itemStyle: {
            borderWidth: 2,
            borderColor: utils.getColor('gray-100'),
          },
          label: {
            show: false,
          },
          center: ['50%', '50%'],
          data,
        },
      ],
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none',
        },
      },
    });

    const initChart = () => {
      if (utils.isScrolledIntoView($echartsCourseStatus)) {
        echartSetOption(chart, userOptions, getDefaultOptions);
        window.removeEventListener('scroll', initChart);
      }
    };

    window.addEventListener('scroll', initChart);
  }
};

export default courseStatusInit;
