import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Bounce Rate                            */
/* -------------------------------------------------------------------------- */

const dealStorageFunnelInit = () => {
  const $echartDealStorageFunnel = document.querySelector('.echart-deal-storage-funnel');
 
  if ($echartDealStorageFunnel) {
    const userOptions = utils.getData($echartDealStorageFunnel, 'options');
    const { data, dataAxis1, dataAxis2 } = userOptions; 
    const chart = window.echarts.init($echartDealStorageFunnel);

    const getDefaultOptions = () => ({
      yAxis: [
        {
          data: dataAxis1,
          axisLabel: {
            inside: true,
            textStyle: {
              color: utils.getGrays()['700'],
              fontWeight: 500,
              fontSize: 11,
              fontFamily: 'poppins',
            },  
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        {
          data: dataAxis2,
          axisLabel: {
            inside: false,
            textStyle: {
              color: utils.getColors().primary,
              fontWeight: 500,
              fontSize: 11,
              fontFamily: 'poppins',
              
            },
            borderRadius: 5,
            backgroundColor:  utils.getSoftColors().primary,
            padding: [6,16,6,16],
            width: 115
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            z: 10
        },
      ],
    xAxis: {
      type: 'value',
      min: 0,
      max: 35,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      inverse: true,
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
      }
    },

    series: [
      {
        type: 'bar',
        showBackground: true,
        barWidth: 25,
        label: {
          show: true,
          formatter: '{c} ',
          position: 'insideLeft',
        },
        backgroundStyle: {
          color: utils.getGrays()['200'],
          borderRadius: 5
        },
        itemStyle: {
          color: utils.getColors().primary,
          borderRadius: 5 
        },
        data: data
      }
    ],
      grid: { right: '65px', left: '0', bottom: '0', top: '0' },
    });
    echartSetOption(chart, userOptions, getDefaultOptions);

  }
};

export default dealStorageFunnelInit;
