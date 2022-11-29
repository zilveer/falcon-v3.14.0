import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Doughnut Chart                         */
/* -------------------------------------------------------------------------- */
const data1 = [
  {
    value: 1048,
    name: 'Starter',
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
  }
];

const data2 = [
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
];
const defaultRadius = { radius: '55%' };
const smallRadius = { radius: '48%' };

const echartsPieMultipleChartInit = () => {
  const $echartPieMultipleChartEl = document.querySelector('.echart-pie-multiple-chart');

  if ($echartPieMultipleChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($echartPieMultipleChartEl, 'options');
    const chart = window.echarts.init($echartPieMultipleChartEl);

    const getDefaultOptions = () => ({
      title: [
        {
          text: 'Pie Multiple Chart',
          left: 'center',
          textStyle: {
            color: utils.getGrays()['600']
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
          radius: window.innerWidth < 450 ? '48%' : '55%',
          center: ['25%', '50%'],
          data: data1,
          label: {
            show: false
          }
        },
        {
          type: 'pie',
          radius: window.innerWidth < 450 ? '48%' : '55%',
          center: ['75%', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: false
          },
          data: data2
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    //- set chart radius on window resize
    utils.resize(() => {
      if (window.innerWidth < 450) {
        chart.setOption({
          series: [smallRadius, smallRadius]
        });
      } else {
        chart.setOption({
          series: [defaultRadius, defaultRadius]
        });
      }
    });
  }
};

export default echartsPieMultipleChartInit;
