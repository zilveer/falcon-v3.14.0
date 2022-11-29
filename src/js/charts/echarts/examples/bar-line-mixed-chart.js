import utils from '../../../utils';
import { echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Bar Chart                             */
/* -------------------------------------------------------------------------- */

const echartsBarLineChartInit = () => {
  const $barLineChartEl = document.querySelector('.echart-bar-line-chart-example');

  if ($barLineChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($barLineChartEl, 'options');
    const chart = window.echarts.init($barLineChartEl);

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: utils.getGrays()['500']
          },
          label: {
            show: true,
            backgroundColor: utils.getGrays()['600'],
            color: utils.getGrays()['100']
          }
        },
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: tooltipFormatter
      },
      toolbox: {
        top: 0,
        feature: {
          dataView: { show: false },
          magicType: {
            show: true,
            type: ['line', 'bar']
          },
          restore: { show: true },
          saveAsImage: { show: true }
        },
        iconStyle: {
          borderColor: utils.getGrays()['700'],
          borderWidth: 1
        },

        emphasis: {
          iconStyle: {
            textFill: utils.getGrays()['600']
          }
        }
      },
      legend: {
        top: 40,
        data: ['Evaporation', 'Precipitation', 'Average temperature'],
        textStyle: {
          color: utils.getGrays()['600']
        }
      },
      xAxis: [
        {
          type: 'category',
          data: months,
          axisLabel: {
            color: utils.getGrays()['600'],
            formatter: value => value.slice(0, 3)
          },
          axisPointer: {
            type: 'shadow'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300']
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            color: utils.getGrays()['600'],
            formatter: '{value} ml'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          }
        },
        {
          type: 'value',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            color: utils.getGrays()['600'],
            formatter: '{value} °C'
          },

          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          }
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [3, 3, 0, 0]
          }
        },
        {
          name: 'Precipitation',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          itemStyle: {
            color: utils.getColor('info'),
            barBorderRadius: [3, 3, 0, 0]
          }
        },
        {
          name: 'Average temperature',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          lineStyle: {
            color: utils.getColor('warning')
          },
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('warning'),
            borderWidth: 2
          },
          symbol: 'circle',
          symbolSize: 10
        }
      ],
      grid: {
        right: 5,
        left: 5,
        bottom: 5,
        top: '23%',
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsBarLineChartInit;
