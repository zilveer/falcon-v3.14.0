import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Market Share                                */
/* -------------------------------------------------------------------------- */

const echartsHeatMapSingleSeriesChartInit = () => {
  const ECHART_HEATMAP_CHART = '.echart-heatmap-single-series-chart';
  const $echartHeatmapChart = document.querySelector(ECHART_HEATMAP_CHART);
  const hours = ['12a', '2a', '4a', '6a', '8a', '10a', '12p', '2p', '4p', '6p', '8p', '10p'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const data = [];
  for (let i = 0; i < 7; i += 1) {
    for (let j = 0; j < 12; j += 1) {
      data.push([j, i, utils.getRandomNumber(1, 12)]);
    }
  }

  if ($echartHeatmapChart) {
    const userOptions = utils.getData($echartHeatmapChart, 'options');
    const chart = window.echarts.init($echartHeatmapChart);

    const getDefaultOptions = () => ({
      gradientColor: [
        utils.rgbaColor(utils.getColors()['info'], 1),
        utils.rgbaColor(utils.getColors()['primary'], 1)
      ],

      tooltip: {
        position: 'top',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1
      },
      grid: {
        right: 5,
        left: 5,
        top: 5,
        bottom: 5,
        containLabel: true
      },
      xAxis: {
        axisTick: { show: false },
        type: 'category',
        data: hours,
        splitArea: {
          show: true
        },
        axisLabel: {
          color: utils.getGrays()['600']
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['400']
          }
        }
      },
      yAxis: {
        axisTick: { show: false },
        type: 'category',
        data: days,
        axisLabel: {
          formatter: value => value.substring(0, 3),
          color: utils.getGrays()['600']
        },
        splitArea: {
          show: true
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['400']
          }
        }
      },
      visualMap: {
        show: false,
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '0%',
        textStyle: {
          color: utils.getGrays()['600'],
          fontWeight: 500
        }
      },

      series: [
        {
          type: 'heatmap',
          data: data,
          label: {
            show: true
          },
          itemStyle: {
            borderColor: utils.getColor('white'),
            borderWidth: 3
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: utils.rgbaColor(utils.getColors()['black'], 0.5)
            }
          }
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsHeatMapSingleSeriesChartInit;
