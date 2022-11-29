import utils from '../../utils';
import { echartSetOption } from './echarts-utils';


const echartsDistributionOfPerformanceInit = () => {
  const $distributionOfPerformance = document.querySelector('.echart-distribution-of-performance');

  if ($distributionOfPerformance) {
    const userOptions = utils.getData($distributionOfPerformance, 'options');
    const chart = window.echarts.init($distributionOfPerformance);

    let xAxisData = ["Mar 01", "Mar 02", "Mar 03", "Mar 04", "Mar 05", "Mar 06", "Mar 07", "Mar 08", "Mar 09", "Mar 10", "Mar 11", "Mar 12"];
    let data1 = [50, 25, 35, 30, 45, 35, 38, 30, 35, 30, 35, 38];
    let data2 = [45, 50, 40, 35, 50, 40, 44, 35, 40, 45, 40, 44];

    const emphasisStyle = {
      itemStyle: {
        shadowColor: utils.rgbaColor(utils.getColor('dark'), 0.3)
      }
    };

    const getDefaultOptions = () => ({
      color: [
        utils.getColor('primary'),
        localStorage.getItem('theme') === 'dark' ? '#236EA1' : '#7DD7FE',
      ],
      legend: {
        data: ['Agent Support', 'Group Support'],
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        padding: [0, 0, 0, 0],
        textStyle: {
          color: utils.getGrays()['700'],
          fontWeight: "500",
          fontSize: "13px"
        },
        left: 0,
        itemGap: 16,
      },
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getGrays()['900']},
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        },
        
      },
      xAxis: {
        data: xAxisData,
        splitLine: { show: false, },
        splitArea: { show: false, },

        axisLabel: {
          color: utils.getGrays()['600'],
        },

        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
          }
        },
        axisTick: {
          show: false,
        }
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: "dashed"
          }
        },
        axisLabel: {
          color: utils.getGrays()['600']
        },
      },
      series: [
        {
          name: 'Agent Support',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data1
        },
        {
          name: 'Group Support',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data2,
          itemStyle: {
            barBorderRadius: [3, 3, 0, 0]
          }
        },
      ],
      barWidth: "15px",
      grid: {
        top: '15%',
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsDistributionOfPerformanceInit;
