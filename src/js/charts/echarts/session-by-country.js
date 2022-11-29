import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Session By Country                          */
/* -------------------------------------------------------------------------- */

const sessionByCountryChartInit = () => {
  const $sessionByCountry = document.querySelector(
    '.echart-session-by-country'
  );

  const data = [
    ['CHINA', 'INDIA', 'USA', 'IRAN', 'BRAZIL', 'PAKISTAN'],
    [19.53, 17.32, 4.49, 3.46, 2.8, 1.7],
  ];

  if ($sessionByCountry) {
    const userOptions = utils.getData($sessionByCountry, 'options');
    const chart = window.echarts.init($sessionByCountry);

    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        axisPointer: {
          type: 'none',
        },
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        // formatter: tooltipFormatter
      },
      xAxis: {
        type: 'category',
        data: data[0],
        axisLabel: {
          color: utils.getGrays()['600'],
          formatter: value => value.substring(0, 3),
        },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['400'],
          },
        },
        axisTick: {
          show: true,
          // length: 8,
          alignWithLabel: true,
          lineStyle: {
            color: utils.getGrays()['200'],
          },
        },
      },
      yAxis: {
        type: 'value',
        // inverse: true,
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'dashed',
          },
        },
        axisLabel: {
          color: utils.getGrays()['600'],
          formatter: value => `${value}%`,
          fontWeight: 500,
          padding: [3, 0, 0, 0],
          margin: 12,
        },
        axisLine: {
          show: false,
        },
      },
      series: [
        {
          type: 'bar',
          data: data[1],
          itemStyle: {
            barBorderRadius: [3, 3, 0, 0],
            color: utils.getColors().primary,
          },
          barWidth: 15,
        },
      ],
      grid: { right: '12px', left: '40px', bottom: '10%', top: '16px' },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default sessionByCountryChartInit;
