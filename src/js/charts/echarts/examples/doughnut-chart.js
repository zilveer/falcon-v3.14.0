import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Doughnut Chart                         */
/* -------------------------------------------------------------------------- */

const echartsDoughnutChartInit = () => {
  const $doughnutChartEl = document.querySelector('.echart-doughnut-chart-example');

  if ($doughnutChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($doughnutChartEl, 'options');
    const chart = window.echarts.init($doughnutChartEl);

    const getDefaultOptions = () => ({
      legend: {
        left: 'left',
        textStyle: {
          color: utils.getGrays()['600']
        }
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '55%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data: [
            {
              value: 1048,
              name: 'Facebook',
              itemStyle: {
                color: utils.getColor('primary')
              }
            },
            {
              value: 735,
              name: 'Youtube',
              itemStyle: {
                color: utils.getColor('danger')
              }
            },
            {
              value: 580,
              name: 'Twitter',
              itemStyle: {
                color: utils.getColor('info')
              }
            },
            {
              value: 484,
              name: 'Linkedin',
              itemStyle: {
                color: utils.getColor('success')
              }
            },
            {
              value: 300,
              name: 'Github',
              itemStyle: {
                color: utils.getColor('warning')
              }
            }
          ]
        }
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
          type: 'none'
        }
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsDoughnutChartInit;
