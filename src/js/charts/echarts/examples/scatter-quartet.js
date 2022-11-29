import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                      Echarts Scatter Quartet Chart                         */
/* -------------------------------------------------------------------------- */

const echartsScatterQuartetChartInit = () => {
  const $scatterQuartetChartEl = document.querySelector('.echart-scatter-quartet-chart-example');

  if ($scatterQuartetChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($scatterQuartetChartEl, 'options');
    const chart = window.echarts.init($scatterQuartetChartEl);

    const dataAll = [
      [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
      ],
      [
        [10.0, 9.14],
        [8.0, 8.14],
        [13.0, 8.74],
        [9.0, 8.77],
        [11.0, 9.26],
        [14.0, 8.1],
        [6.0, 6.13],
        [4.0, 3.1],
        [12.0, 9.13],
        [7.0, 7.26],
        [5.0, 4.74]
      ],
      [
        [10.0, 7.46],
        [8.0, 6.77],
        [13.0, 12.74],
        [9.0, 7.11],
        [11.0, 7.81],
        [14.0, 8.84],
        [6.0, 6.08],
        [4.0, 5.39],
        [12.0, 8.15],
        [7.0, 6.42],
        [5.0, 5.73]
      ],
      [
        [8.0, 6.58],
        [8.0, 5.76],
        [8.0, 7.71],
        [8.0, 8.84],
        [8.0, 8.47],
        [8.0, 7.04],
        [8.0, 5.25],
        [19.0, 12.5],
        [8.0, 5.56],
        [8.0, 7.91],
        [8.0, 6.89]
      ]
    ];

    const xAxis = () => ({
      axisLabel: {
        color: utils.getGrays()['600']
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: utils.getGrays()['300']
        }
      },

      splitLine: {
        show: true,
        lineStyle: {
          color: utils.getGrays()['200']
        }
      }
    });

    const yAxis = () => ({
      axisLabel: {
        color: utils.getGrays()['600']
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: utils.getGrays()['200']
        }
      },

      axisLine: {
        show: true,
        lineStyle: {
          color: utils.getGrays()['300']
        }
      }
    });

    const markLineOpt = {
      animation: false,
      label: {
        formatter: 'y = 0.5 * x + 3',
        align: 'right',
        color: utils.getGrays()['600'],
        fontWeight: 600
      },
      lineStyle: {
        type: 'solid'
      },
      tooltip: {
        formatter: 'y = 0.5 * x + 3'
      },
      data: [
        [
          {
            coord: [0, 3],
            symbol: 'none'
          },
          {
            coord: [20, 13],
            symbol: 'none'
          }
        ]
      ]
    };
    const gridMdUp = [
      { left: '7%', top: '10%', width: '38%', height: '38%' },
      { right: '7%', top: '10%', width: '38%', height: '38%' },
      { left: '7%', bottom: '7%', width: '38%', height: '38%' },
      { right: '7%', bottom: '7%', width: '38%', height: '38%' }
    ];

    const gridMdDown = [
      { left: 6, right: 7, top: '4%', height: '20%' },
      { left: 6, right: 7, top: '29%', height: '20%' },
      { left: 6, right: 7, bottom: '26%', height: '20%' },
      { left: 6, right: 7, bottom: 25, height: '20%' }
    ];

    const getDefaultOptions = () => ({
      color: [
        utils.getColor('primary'),
        utils.getColor('success'),
        utils.getColor('warning'),
        utils.getColor('danger')
      ],
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'none'
        },
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: 'Group {a}: ({c})'
      },
      title: {
        text: "Anscombe's quartet",
        left: 'center',
        top: 0,
        textStyle: {
          color: utils.getGrays()['600']
        }
      },
      grid: window.innerWidth < 768 ? gridMdDown : gridMdUp,
      xAxis: [
        { gridIndex: 0, min: 0, max: 20, ...xAxis() },
        { gridIndex: 1, min: 0, max: 20, ...xAxis() },
        { gridIndex: 2, min: 0, max: 20, ...xAxis() },
        { gridIndex: 3, min: 0, max: 20, ...xAxis() }
      ],
      yAxis: [
        { gridIndex: 0, min: 0, max: 15, ...yAxis() },
        { gridIndex: 1, min: 0, max: 15, ...yAxis() },
        { gridIndex: 2, min: 0, max: 15, ...yAxis() },
        { gridIndex: 3, min: 0, max: 15, ...yAxis() }
      ],
      series: [
        {
          name: 'I',
          type: 'scatter',
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: dataAll[0],
          markLine: markLineOpt
        },
        {
          name: 'II',
          type: 'scatter',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: dataAll[1],
          markLine: markLineOpt
        },
        {
          name: 'III',
          type: 'scatter',
          xAxisIndex: 2,
          yAxisIndex: 2,
          data: dataAll[2],
          markLine: markLineOpt
        },
        {
          name: 'IV',
          type: 'scatter',
          xAxisIndex: 3,
          yAxisIndex: 3,
          data: dataAll[3],
          markLine: markLineOpt
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    utils.resize(() => {
      if (window.innerWidth < 768) {
        chart.setOption({
          grid: gridMdDown
        });
      } else {
        chart.setOption({
          grid: gridMdUp
        });
      }
    });
  }
};

export default echartsScatterQuartetChartInit;
