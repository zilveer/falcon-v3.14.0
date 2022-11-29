import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Session By Country Map                      */
/* -------------------------------------------------------------------------- */

const echartsUsaMapInit = () => {
  const $usaMapEl = document.querySelector('.echart-map-usa-example');

  const data = [
    { name: 'Alabama', value: 4822023 },
    { name: 'Alaska', value: 731449 },
    { name: 'Arizona', value: 6553255 },
    { name: 'Arkansas', value: 2949131 },
    { name: 'California', value: 38041430 },
    { name: 'Colorado', value: 5187582 },
    { name: 'Connecticut', value: 3590347 },
    { name: 'Delaware', value: 917092 },
    { name: 'District of Columbia', value: 632323 },
    { name: 'Florida', value: 19317568 },
    { name: 'Georgia', value: 9919945 },
    { name: 'Hawaii', value: 1392313 },
    { name: 'Idaho', value: 1595728 },
    { name: 'Illinois', value: 12875255 },
    { name: 'Indiana', value: 6537334 },
    { name: 'Iowa', value: 3074186 },
    { name: 'Kansas', value: 2885905 },
    { name: 'Kentucky', value: 4380415 },
    { name: 'Louisiana', value: 4601893 },
    { name: 'Maine', value: 1329192 },
    { name: 'Maryland', value: 5884563 },
    { name: 'Massachusetts', value: 6646144 },
    { name: 'Michigan', value: 9883360 },
    { name: 'Minnesota', value: 5379139 },
    { name: 'Mississippi', value: 2984926 },
    { name: 'Missouri', value: 6021988 },
    { name: 'Montana', value: 1005141 },
    { name: 'Nebraska', value: 1855525 },
    { name: 'Nevada', value: 2758931 },
    { name: 'New Hampshire', value: 1320718 },
    { name: 'New Jersey', value: 8864590 },
    { name: 'New Mexico', value: 2085538 },
    { name: 'New York', value: 19570261 },
    { name: 'North Carolina', value: 9752073 },
    { name: 'North Dakota', value: 699628 },
    { name: 'Ohio', value: 11544225 },
    { name: 'Oklahoma', value: 3814820 },
    { name: 'Oregon', value: 3899353 },
    { name: 'Pennsylvania', value: 12763536 },
    { name: 'Rhode Island', value: 1050292 },
    { name: 'South Carolina', value: 4723723 },
    { name: 'South Dakota', value: 833354 },
    { name: 'Tennessee', value: 6456243 },
    { name: 'Texas', value: 26059203 },
    { name: 'Utah', value: 2855287 },
    { name: 'Vermont', value: 626011 },
    { name: 'Virginia', value: 8185867 },
    { name: 'Washington', value: 6897012 },
    { name: 'West Virginia', value: 1855413 },
    { name: 'Wisconsin', value: 5726398 },
    { name: 'Wyoming', value: 576412 },
    { name: 'Puerto Rico', value: 3667084 }
  ];

  if ($usaMapEl) {
    const userOptions = utils.getData($usaMapEl, 'options');
    const chart = window.echarts.init($usaMapEl);

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: params => {
          return `<strong>${params.data.name} :</strong> ${params.data.value}`;
        }
      },
      toolbox: {
        show: false,
        feature: {
          restore: {}
        }
      },
      visualMap: {
        left: 'right',
        min: 500000,
        max: 38000000,
        inRange: {
          color: [utils.getColor('primary'), utils.getColor('info')]
        },
        text: ['High', 'Low'],
        calculable: true,
        textStyle: {
          color: utils.getGrays()['600']
        },
        formatter: value => `${value / 1000}k`
      },
      series: [
        {
          left: 10,
          name: 'USA PopEstimates',
          type: 'map',
          zoom: 1.2,
          roam: true,
          scaleLimit: {
            min: 1,
            max: 5
          },
          itemStyle: {
            borderColor: utils.getGrays()['300']
          },
          label: {
            color: '#fff'
          },
          map: 'USA',
          emphasis: {
            label: {
              show: true,
              color: '#fff'
            },

            itemStyle: {
              areaColor: utils.getColor('warning')
            }
          },
          data
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
    document.querySelector('.usa-map-reset').addEventListener('click', () => {
      chart.dispatchAction({
        type: 'restore'
      });
    });
  }
};

export default echartsUsaMapInit;
