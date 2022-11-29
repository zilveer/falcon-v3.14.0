import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                       Echarts Gradient Bar Chart                           */
/* -------------------------------------------------------------------------- */

const echartsGradientBarChartInit = () => {
  const $gradientBarChartEl = document.querySelector('.echart-gradient-bar-chart-example');

  if ($gradientBarChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($gradientBarChartEl, 'options');
    const chart = window.echarts.init($gradientBarChartEl);

    const tooltipFormatter = params => {
      return `<div> 
          <h6 class="fs--1 text-700 mb-0">
          <span class="dot me-1 fs--2  bg-primary" ></span> ${params[0].name} : ${params[0].value} 
           </h6>
        </div> `;
    };

    var dataAxis = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T'
    ];
    var data = [
      220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125,
      220
    ];

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        },
        formatter: tooltipFormatter
      },
      title: {
        text: 'Gradient and Clickable bar chart',
        textStyle: {
          color: utils.getGrays()['600']
        },
        left: 'center'
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: utils.getColor()['300']
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        {
          type: 'bar',
          name: 'Total',
          showBackground: true,
          itemStyle: {
            color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: utils.getColor('info') },
              { offset: 0.5, color: utils.getColor('primary') },
              { offset: 1, color: utils.getColor('primary') }
            ]),
            barBorderRadius: [3, 3, 0, 0]
          },
          emphasis: {
            itemStyle: {
              color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: utils.getColor('primary') },
                { offset: 0.7, color: utils.getColor('primary') },
                { offset: 1, color: utils.getColor('info') }
              ])
            }
          },
          data: data
        }
      ],
      grid: {
        right: 5,
        left: 5,
        bottom: 5,
        top: '10%',
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    const zoomSize = 6;
    chart.on('click', function (params) {
      chart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
    });
  }
};

export default echartsGradientBarChartInit;
