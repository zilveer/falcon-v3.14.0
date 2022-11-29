import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                         Echarts Bar Race Chart                             */
/* -------------------------------------------------------------------------- */

const echartsBarRaceChartInit = () => {
  const $barRaceChartEl = document.querySelector('.echart-bar-race-chart-example');

  if ($barRaceChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($barRaceChartEl, 'options');
    const chart = window.echarts.init($barRaceChartEl);

    let data = Array.from(Array(7).keys()).map(() => Math.round(Math.random() * 200));

    const getDefaultOptions = () => ({
      xAxis: {
        max: 'dataMax',
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200']
          }
        },
        axisLabel: {
          color: utils.getGrays()['500']
        }
      },
      yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        inverse: true,
        axisLabel: {
          color: utils.getGrays()['500']
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: utils.getGrays()['300']
          }
        },
        axisTick: {
          show: false
        },
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 4 // only the largest 5 bars will be displayed
      },
      series: [
        {
          realtimeSort: true,
          name: 'X',
          type: 'bar',
          data: data,
          label: {
            show: true,
            position: 'right',
            color: utils.getGrays()['700'],
            fontWeight: 500,
            valueAnimation: true
          },
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [0, 3, 3, 0]
          }
        }
      ],
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
      grid: {
        right: '10%',
        left: 5,
        bottom: 5,
        top: 5,
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    const run = () => {
      data = data.map(item =>
        Math.random() > 0.9
          ? item + Math.round(Math.random() * 2000)
          : item + Math.round(Math.random() * 200)
      );

      chart.setOption({
        series: [
          {
            data
          }
        ]
      });
    };

    setTimeout(function () {
      run();
    }, 0);
    setInterval(function () {
      run();
    }, 3000);
  }
};

export default echartsBarRaceChartInit;
