import utils from '../../../utils';
import { getPosition, echartSetOption, tooltipFormatter } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                      Echarts Area Pieces Chart                             */
/* -------------------------------------------------------------------------- */

const echartsAreaPiecesChartInit = () => {
  const $areaPiecesChartEl = document.querySelector('.echart-area-pieces-chart-example');

  if ($areaPiecesChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($areaPiecesChartEl, 'options');
    const chart = window.echarts.init($areaPiecesChartEl);

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        axisPointer: {
          type: 'none'
        },
        formatter: tooltipFormatter
      },
      xAxis: {
        type: 'category',
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
          margin: 15,
          formatter: value => window.dayjs(value).format('MMM DD')
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
        axisLine: { show: false }
      },
      visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [
          {
            gt: 1,
            lt: 3,
            color: utils.rgbaColor(utils.getColor('primary'), 0.4)
          },
          {
            gt: 5,
            lt: 7,
            color: utils.rgbaColor(utils.getColor('primary'), 0.4)
          }
        ]
      },
      series: [
        {
          type: 'line',
          name: 'Total',
          smooth: 0.6,
          symbol: 'none',
          lineStyle: {
            color: utils.getColor('primary'),
            width: 5
          },
          markLine: {
            symbol: ['none', 'none'],
            label: { show: false },
            data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
          },
          areaStyle: {},
          data: [
            ['2019-10-10', 200],
            ['2019-10-11', 560],
            ['2019-10-12', 750],
            ['2019-10-13', 580],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 100]
          ]
        }
      ],
      grid: { right: 20, left: 5, bottom: 5, top: 8, containLabel: true }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsAreaPiecesChartInit;
