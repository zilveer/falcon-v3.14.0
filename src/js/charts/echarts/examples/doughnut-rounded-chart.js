import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Doughnut Chart                         */
/* -------------------------------------------------------------------------- */

const echartsDoughnutRoundedChartInit = () => {
  const $doughnutRoundedChartEl = document.querySelector('.echart-doughnut-rounded-chart');

  if ($doughnutRoundedChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($doughnutRoundedChartEl, 'options');
    const chart = window.echarts.init($doughnutRoundedChartEl);

    const getDefaultOptions = () => ({
      legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
          color: utils.getGrays()['600']
        }
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          center: window.innerWidth < 530 ? ['65%', '55%'] : ['50%', '55%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: utils.getGrays()['100'],
            borderWidth: 2
          },
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
              name: 'Starter',
              itemStyle: {
                color: utils.getColor('primary')
              }
            },
            {
              value: 735,
              name: 'Basic',
              itemStyle: {
                color: utils.getColor('danger')
              }
            },
            {
              value: 580,
              name: 'Optimal',
              itemStyle: {
                color: utils.getColor('info')
              }
            },
            {
              value: 484,
              name: 'Business',
              itemStyle: {
                color: utils.getColor('success')
              }
            },
            {
              value: 300,
              name: 'Premium',
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

    utils.resize(() => {
      if (window.innerWidth < 530) {
        chart.setOption({
          series: [
            {
              center: ['65%', '55%']
            }
          ]
        });
      } else
        chart.setOption({
          series: [
            {
              center: ['50%', '55%']
            }
          ]
        });
    });
  }
};

export default echartsDoughnutRoundedChartInit;
