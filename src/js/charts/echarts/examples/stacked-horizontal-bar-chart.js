import utils from '../../../utils';
import { echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Bar Chart                             */
/* -------------------------------------------------------------------------- */

const echartsHorizontalStackedChartInit = () => {
  const $horizontalStackChartEl = document.querySelector(
    '.echart-horizontal-stacked-chart-example'
  );

  if ($horizontalStackChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($horizontalStackChartEl, 'options');
    const chart = window.echarts.init($horizontalStackChartEl);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const getDefaultOptions = () => ({
      color: [
        utils.getColor('info'),
        utils.getColor('danger'),
        utils.getColor('warning'),
        utils.getColor('success'),
        utils.getColor('primary')
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
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
        feature: {
          magicType: {
            type: ['stack', 'tiled']
          }
        },
        right: 0
      },
      legend: {
        data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine'],
        textStyle: {
          color: utils.getGrays()['600']
        },
        left: 0
      },
      xAxis: {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300']
          }
        },
        axisTick: { show: false },
        axisLabel: {
          color: utils.getGrays()['500']
        },
        splitLine: {
          lineStyle: {
            show: true,
            color: utils.getGrays()['200']
          }
        }
      },
      yAxis: {
        type: 'category',
        data: days,
        axisLine: {
          lineStyle: {
            show: true,
            color: utils.getGrays()['300']
          }
        },
        axisTick: { show: false },
        axisLabel: {
          color: utils.getGrays()['500'],
          formatter: value => value.substring(0, 3)
        }
      },
      series: [
        {
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: 'Mail Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 188, 301, 250, 190, 230, 210]
        },
        {
          name: 'Affiliate Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: 'Search Engine',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ],
      grid: {
        right: 15,
        left: 5,
        bottom: 5,
        top: '15%',
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsHorizontalStackedChartInit;
