import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Doughnut Chart                         */
/* -------------------------------------------------------------------------- */

const echartsPieEdgeAlignChartInit = () => {
  const $echartPieAEdgeAlignChartEl = document.querySelector('.echart-pie-edge-align-chart');

  const data = [
    {
      value: 800,
      name: 'Starter',
      itemStyle: {
        color: utils.rgbaColor(utils.getColors()['primary'], 0.5)
      }
    },
    {
      value: 1048,
      name: 'Starter Pro',
      itemStyle: {
        color: utils.getColor('danger')
      }
    },
    {
      value: 735,
      name: 'Basic',
      itemStyle: {
        color: utils.getColor('primary')
      }
    },
    {
      value: 580,
      name: 'Optimal',
      itemStyle: {
        color: utils.getColor('secondary')
      }
    },
    {
      value: 484,
      name: 'Business',
      itemStyle: {
        color: utils.getColor('warning')
      }
    },
    {
      value: 600,
      name: 'Classic addition',
      itemStyle: {
        color: utils.rgbaColor(utils.getColors()['warning'], 0.8)
      }
    },
    {
      value: 300,
      name: 'Premium',
      itemStyle: {
        color: utils.getColor('success')
      }
    },
    {
      value: 300,
      name: 'Platinum',
      itemStyle: {
        color: utils.getColor('info')
      }
    },
    {
      value: 400,
      name: 'Platinum Pro',
      itemStyle: {
        color: utils.rgbaColor(utils.getColors()['primary'], 0.5)
      }
    }
  ];

  if ($echartPieAEdgeAlignChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($echartPieAEdgeAlignChartEl, 'options');
    const chart = window.echarts.init($echartPieAEdgeAlignChartEl);

    const getDefaultOptions = () => ({
      title: [
        {
          text: 'Pie Edge Align Chart',
          left: 'center',
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        {
          subtext: 'alignTo: "edge"',
          left: '50%',
          top: '85%',
          textAlign: 'center',
          subtextStyle: {
            color: utils.getGrays()['700']
          }
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
      },

      series: [
        {
          type: 'pie',
          radius: window.innerWidth < 530 ? '45%' : '60%',
          center: ['50%', '50%'],
          data: data,
          label: {
            position: 'outer',
            alignTo: 'edge',
            margin: 20,
            color: utils.getGrays()['700']
          },
          left: '5%',
          right: '5%',
          top: 0,
          bottom: 0
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    //- set chart radius on window resize
    utils.resize(() => {
      if (window.innerWidth < 530) {
        chart.setOption({
          series: [{ radius: '45%' }]
        });
      } else
        chart.setOption({
          series: [{ radius: '60%' }]
        });
    });
  }
};

export default echartsPieEdgeAlignChartInit;
