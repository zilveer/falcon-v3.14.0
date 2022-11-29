import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Bar Chart                             */
/* -------------------------------------------------------------------------- */

const echartsBarStackedChartInit = () => {
  const $barStackedChartEl = document.querySelector('.echart-bar-stacked-chart-example');

  if ($barStackedChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($barStackedChartEl, 'options');
    const chart = window.echarts.init($barStackedChartEl);

    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];

    for (let i = 0; i < 10; i += 1) {
      xAxisData.push('Class' + (i + 1));
      data1.push((Math.random() * 2).toFixed(2));
      data2.push((Math.random() * 5).toFixed(2));
      data3.push((Math.random() + 0.3).toFixed(2));
      data4.push(-Math.random().toFixed(2));
    }

    const emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: utils.rgbaColor(utils.getColor('dark'), 0.3)
      }
    };

    const getDefaultOptions = () => ({
      color: [
        utils.getColor('primary'),
        utils.getColor('info'),
        utils.getColor('warning'),
        utils.getColor('danger')
      ],
      legend: {
        data: ['Bar1', 'Bar2', 'Bar3', 'Bar4'],
        textStyle: {
          color: utils.getGrays()['700']
        },
        left: 0
      },
      toolbox: {
        feature: {
          magicType: {
            type: ['stack', 'tiled']
          }
        },
        iconStyle: {
          borderColor: utils.getGrays()['700'],
          borderWidth: 1
        }
      },
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        }
      },
      xAxis: {
        data: xAxisData,
        splitLine: { show: false },
        splitArea: { show: false },

        axisLabel: {
          color: utils.getGrays()['600']
        },

        axisLine: {
          lineStyle: {
            color: utils.getGrays()['400']
          }
        }
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200']
          }
        },
        axisLabel: {
          color: utils.getGrays()['600']
        }
      },
      series: [
        {
          name: 'Bar1',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data1
        },
        {
          name: 'Bar2',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data2
        },
        {
          name: 'Bar3',
          type: 'bar',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data3
        },
        {
          name: 'Bar4',
          type: 'bar',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data4
        }
      ],
      grid: {
        top: '10%',
        bottom: 10,
        left: 5,
        right: 7,
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsBarStackedChartInit;
