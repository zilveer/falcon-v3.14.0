import utils from '../../utils';
import { echartSetOption } from './echarts-utils';


const echartsCustomerSatisfactionInit = () => {
  const $echartCustomerSatisfaction = document.querySelector('.echart-customer-setisfaction');

  if ($echartCustomerSatisfaction) {
    // Get options from data attribute
    const userOptions = utils.getData($echartCustomerSatisfaction, 'options');
    const chart = window.echarts.init($echartCustomerSatisfaction);

    const getDefaultOptions = () => ({
      legend: {
        left: 'center',
        bottom: 22,
        itemWidth: 12,
        itemHeight: 12,
        borderRadius: 0,
        icon: 'circle',
        inactiveColor: utils.getGrays()['400'],
        inactiveBorderColor: "transparent",
        textStyle: {
          color: utils.getGrays()['600'],
          fontSize: 12,
          fontFamily: "Poppins",
          fontWeight: "500"
        },
        itemGap: 16,
      },
      series: [
        {
          type: 'pie',
          radius: '70%',
          label: {
            show: false
          },
          center: ['50%', '45%'],
          itemStyle: {
            borderWidth: 2,
            borderColor: localStorage.getItem('theme') === 'dark' ? '#121E2D' : utils.getGrays()['100'],
          },
          data: [
            {
              value: 1100,
              name: 'Positive',
              itemStyle: {
                color: utils.getColor('primary')
              }
            },
            {
              value: 550,
              name: 'Nagative',
              itemStyle: {
                color: utils.rgbaColor(utils.getColor('primary'), 0.50),
              }
            }
          ],
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
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
    
  }
};

export default echartsCustomerSatisfactionInit;
