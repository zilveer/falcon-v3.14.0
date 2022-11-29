import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Line Payment                           */
/* -------------------------------------------------------------------------- */

const linePaymentChartInit = () => {
  const $echartsLinePaymentChart = document.querySelector(
    '.echart-line-payment'
  );

  const dataset = {
    all: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10],
    successful: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
    failed: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2],
  };
  const labels = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
  ];

  if ($echartsLinePaymentChart) {
    const userOptions = utils.getData($echartsLinePaymentChart, 'options');
    const chart = window.echarts.init($echartsLinePaymentChart);

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
        },
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        borderWidth: 1,
        transitionDuration: 0,
        formatter: params => `${params[0].axisValue} - ${params[0].value} USD`,
        textStyle: {
          fontWeight: 500,
          fontSize: 12,
          color: utils.getColors().dark,
        },
      },
      xAxis: {
        type: 'category',
        data: labels,
        splitLine: {
          show: true,
          lineStyle: {
            color: utils.rgbaColor('#fff', 0.1),
          },
          interval: 0,
        },
        axisLine: {
          lineStyle: {
            color: utils.rgbaColor('#fff', 0.1),
          },
        },
        axisTick: {
          show: true,
          length: 10,
          lineStyle: {
            color: utils.rgbaColor('#fff', 0.1),
          },
        },
        axisLabel: {
          color: utils.getGrays()['400'],
          fontWeight: 600,
          formatter: value => value.substring(0, value.length - 3),
          fontSize: 12,
          interval: window.innerWidth < 768 ? 'auto' : 0,
          margin: 15,
        },
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        axisPointer: { show: false },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      series: [
        {
          type: 'line',
          smooth: true,
          data: dataset.successful.map(d => (d * 3.14).toFixed(2)),
          symbol: 'emptyCircle',
          itemStyle: {
            color:
              localStorage.getItem('theme') === 'light'
                ? utils.getGrays()['white']
                : utils.getColors().primary,
          },
          lineStyle: {
            color:
              localStorage.getItem('theme') === 'light'
                ? utils.rgbaColor(utils.getGrays()['white'], 0.8)
                : utils.getColors().primary,
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color:
                    localStorage.getItem('theme') === 'light'
                      ? 'rgba(255, 255, 255, 0.5)'
                      : utils.rgbaColor(utils.getColors().primary, 0.5),
                },
                {
                  offset: 1,
                  color:
                    localStorage.getItem('theme') === 'light'
                      ? 'rgba(255, 255, 255, 0)'
                      : utils.rgbaColor(utils.getColors().primary, 0),
                },
              ],
            },
          },
          emphasis: {
            lineStyle: {
              width: 2,
            },
          },
        },
      ],
      grid: { right: 15, left: 15, bottom: '15%', top: 0 },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    utils.resize(() => {
      if (window.innerWidth < 768) {
        chart.setOption({
          xAxis: {
            axisLabel: {
              interval: 'auto',
            },
          },
        });
      }
    });

    const selectMenu = document.querySelector('#dashboard-chart-select');

    if (selectMenu) {
      selectMenu.addEventListener('change', e => {
        const value = e.currentTarget.value;
        chart.setOption({
          series: [{ data: dataset[value].map(d => (d * 3.14).toFixed(2)) }],
        });
      });
    }
  }
};

export default linePaymentChartInit;
