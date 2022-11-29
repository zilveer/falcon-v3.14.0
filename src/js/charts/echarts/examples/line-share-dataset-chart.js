import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                    Echarts Line Share Dataset Chart                        */
/* -------------------------------------------------------------------------- */

const echartsLineShareDatasetChartInit = () => {
  const $lineShareChartEl = document.querySelector('.echart-line-share-dataset-chart-example');

  if ($lineShareChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($lineShareChartEl, 'options');
    const chart = window.echarts.init($lineShareChartEl);

    const getDefaultOptions = () => ({
      color: [
        utils.getColor('danger'),
        utils.getColor('warning'),
        utils.getColor('info'),
        utils.getColor('primary')
      ],
      legend: {
        top: 0,
        textStyle: {
          color: utils.getGrays()['700']
        }
      },
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
          ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
        ]
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300']
          }
        },
        axisLabel: {
          color: utils.getGrays()['600']
        },
        axisPointer: {
          lineStyle: {
            color: utils.getGrays()['300']
          }
        }
      },
      yAxis: {
        gridIndex: 0,
        axisLabel: {
          color: utils.getGrays()['600']
        },
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200']
          }
        }
      },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('danger'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('danger')
          },
          symbol: 'circle'
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('info'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('info')
          },
          symbol: 'circle'
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('warning'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('warning')
          },
          symbol: 'circle'
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
          symbolSize: 10,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          symbol: 'circle'
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '28%'],
          emphasis: { focus: 'data' },
          label: {
            formatter: '{b}: {@2012} ({d}%)',
            color: utils.getGrays()['600']
          },
          encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012'
          }
        }
      ],
      grid: {
        right: 10,
        left: 5,
        bottom: 5,
        top: '55%',
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    chart.on('updateAxisPointer', function (event) {
      var xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        chart.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });
  }
};

export default echartsLineShareDatasetChartInit;
