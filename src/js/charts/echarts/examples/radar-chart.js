import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Pie Chart                              */
/* -------------------------------------------------------------------------- */

const echartsRadarChartInit = () => {
  const $radarChartEl = document.querySelector('.echart-radar-chart-example');

  if ($radarChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($radarChartEl, 'options');
    const chart = window.echarts.init($radarChartEl);

    const getDefaultOptions = () => ({
      legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
          color: utils.getGrays()['600']
        }
      },
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
      },

      radar: {
        indicator: [
          { name: 'Marketing', max: 6500 },
          { name: 'Admin', max: 16000 },
          { name: 'Tech', max: 30000 },
          { name: 'Support', max: 38000 },
          { name: 'Dev ', max: 52000 },
          { name: 'Sales ', max: 25000 }
        ],
        radius: 120,
        splitLine: {
          lineStyle: {
            color: utils.rgbaColor(utils.getGrays()['700'])
          }
        }
      },

      series: [
        {
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Data A',
              itemStyle: {
                color: utils.getColor('primary')
              }
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Data B',
              itemStyle: {
                color: utils.getColor('warning')
              }
            }
          ]
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsRadarChartInit;
