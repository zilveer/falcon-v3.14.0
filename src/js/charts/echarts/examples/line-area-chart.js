import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Line Chart                             */
/* -------------------------------------------------------------------------- */

const echartsLineAreaChartInit = () => {
  const $lineAreaChartEl = document.querySelector('.echart-line-area-chart-example');

  if ($lineAreaChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($lineAreaChartEl, 'options');
    const chart = window.echarts.init($lineAreaChartEl);

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

    const data = [1142, 1160, 1179, 946, 1420, 1434, 986, 1247, 1051, 1297, 927, 1282];

    const tooltipFormatter = params => {
      return `
      <div>
          <h6 class="fs--1 text-700 mb-0">
            <span class="fas fa-circle me-1" style='color:${params[0].borderColor}'></span>
            ${params[0].name} : ${params[0].value}
          </h6>
      </div>
      `;
    };

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        formatter: tooltipFormatter,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        }
      },
      xAxis: {
        type: 'category',
        data: months,
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'solid'
          }
        },
        axisTick: { show: false },
        axisLabel: {
          color: utils.getGrays()['400'],
          formatter: value => value.substring(0, 3),
          margin: 15
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200']
          }
        },
        boundaryGap: false,
        axisLabel: {
          show: true,
          color: utils.getGrays()['400'],
          margin: 15
        },
        axisTick: { show: false },
        axisLine: { show: false },
        min: 600
      },
      series: [
        {
          type: 'line',
          data,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          showSymbol: false,
          symbolSize: 10,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true,
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
                  color: utils.rgbaColor(utils.getColors().primary, 0.5)
                },
                {
                  offset: 1,
                  color: utils.rgbaColor(utils.getColors().primary, 0)
                }
              ]
            }
          }
        }
      ],
      grid: { right: '3%', left: '10%', bottom: '10%', top: '5%' }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsLineAreaChartInit;
