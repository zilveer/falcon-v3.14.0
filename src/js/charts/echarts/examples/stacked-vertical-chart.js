import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';


const echartsStackedVerticalChartInit = () => {
  const $stackedVerticalChart = document.querySelector('.echart-stacked-vertival-chart-example');

  if ($stackedVerticalChart) {
    const userOptions = utils.getData($stackedVerticalChart, 'options');
    const chart = window.echarts.init($stackedVerticalChart);
    let xAxisData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let data1 = [20, 18, 15, 20, 12, 15, 10];
    let data2 = [30, 20, 20, 25, 20, 15, 10];
    let data3 = [35, 32, 40, 50, 30, 25, 15];
    let data4 = [15, 25, 20, 18, 10, 15, 25];

    const emphasisStyle = {
      itemStyle: {
        shadowColor: utils.rgbaColor(utils.getColor('dark'), 0.3)
      }
    };

    const getDefaultOptions = () => ({
      color: [
        utils.getColor('primary'),
        utils.getColor('info'),
        localStorage.getItem('theme') === 'dark' ? '#229BD2' : '#73D3FE',
        localStorage.getItem('theme') === 'dark' ? '#195979' : '#A9E4FF',
      ],
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
        }
      },
      legend: {
        data: ['Urgent', 'High', 'Medium', 'Low'],
        textStyle: {
          color: utils.getGrays()['700']
        }
      },
      xAxis: {
        data: xAxisData,
        splitLine: { show: false, },
        splitArea: { show: false, },

        axisLabel: {
          color: utils.getGrays()['600'],
          margin:8,
        },

        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: "dashed"
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
          color: utils.getGrays()['600'],
        },
        position: "right"
      },
      series: [
        {
          name: 'Urgent',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data1
        },
        {
          name: 'High',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data2
        },
        {
          name: 'Medium',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data3
        },
        {
          name: 'Low',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data4,
          itemStyle: {
            borderRadius: [2, 2, 0, 0]
          },
        }
      ],

      barWidth: "15px",
      grid: {
        top: '8%',
        bottom: 10,
        left: 0,
        right: 2,
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsStackedVerticalChartInit;
