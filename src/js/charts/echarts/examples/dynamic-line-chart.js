/* eslint-disable */
import utils from '../../../utils';
import { echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                           Echarts Dynamic Line Chart                       */
/* -------------------------------------------------------------------------- */

const echartsDynamicLineChartInit = () => {
  const $dynamicLineChartEl = document.querySelector('.echart-dynamic-line-chart-example');

  if ($dynamicLineChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($dynamicLineChartEl, 'options');
    const chart = window.echarts.init($dynamicLineChartEl);

    const randomData = () => {
      now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), Math.round(value)]
      };
    };

    var data = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
      data.push(randomData());
    }

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        },
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: tooltipFormatter
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        },
        axisLabel: {
          color: utils.getGrays()['500']
        },

        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300']
          }
        },
        axisPointer: {
          lineStyle: {
            color: utils.getGrays()['300']
          }
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        },
        axisLabel: {
          color: utils.getGrays()['500']
        }
      },
      series: [
        {
          name: 'Total',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data,
          lineStyle: {
            color: utils.getColor('primary')
          },
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          symbol: 'circle',
          symbolSize: 10
        }
      ],
      grid: { right: 5, left: '7%', bottom: '10%', top: '5%' }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    setInterval(function () {
      for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }

      chart.setOption({
        series: [
          {
            data: data
          }
        ]
      });
    }, 1000);
  }
};

export default echartsDynamicLineChartInit;
