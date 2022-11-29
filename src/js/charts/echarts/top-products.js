import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Top Products                                */
/* -------------------------------------------------------------------------- */

const topProductsInit = () => {
  const ECHART_BAR_TOP_PRODUCTS = '.echart-bar-top-products';
  const $echartBarTopProducts = document.querySelector(ECHART_BAR_TOP_PRODUCTS);

  if ($echartBarTopProducts) {
    const data = [
      ['product', '2019', '2018'],
      ['Boots4', 43, 85],
      ['Reign Pro', 83, 73],
      ['Slick', 86, 62],
      ['Falcon', 72, 53],
      ['Sparrow', 80, 50],
      ['Hideway', 50, 70],
      ['Freya', 80, 90],
    ];
    const userOptions = utils.getData($echartBarTopProducts, 'options');
    const chart = window.echarts.init($echartBarTopProducts);

    const getDefaultOptions = () => ({
      color: [utils.getColors().primary, utils.getGrays()['300']],
      dataset: { source: data },
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        formatter: function (params) {
          return `<div class="font-weight-semi-bold">${
            params.seriesName
          }</div><div class="fs--1 text-600"><strong>${params.name}:</strong> ${
            params.value[params.componentIndex + 1]
          }</div>`;
        },
      },
      legend: {
        data: ['2019', '2018'],
        left: 'left',
        itemWidth: 10,
        itemHeight: 10,
        borderRadius: 0,
        icon: 'circle',
        inactiveColor: utils.getGrays()['400'],
        textStyle: { color: utils.getGrays()['700'] },
      },
      xAxis: {
        type: 'category',
        axisLabel: { color: utils.getGrays()['400'] },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'dashed',
          },
        },
        axisTick: false,
        boundaryGap: true,
      },
      yAxis: {
        axisPointer: { type: 'none' },
        axisTick: 'none',
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: 'dashed',
          },
        },
        axisLine: { show: false },
        axisLabel: { color: utils.getGrays()['400'] },
      },
      series: [
        {
          type: 'bar',
          barWidth: '10px',
          barGap: '30%',
          label: { normal: { show: false } },
          z: 10,
          itemStyle: {
            normal: {
              barBorderRadius: [10, 10, 0, 0],
              color: utils.getColors().primary,
            },
          },
        },
        {
          type: 'bar',
          barWidth: '10px',
          barGap: '30%',
          label: { normal: { show: false } },
          itemStyle: {
            normal: {
              barBorderRadius: [4, 4, 0, 0],
              color: utils.getGrays()[300],
            },
          },
        },
      ],
      grid: { right: '0', left: '30px', bottom: '10%', top: '20%' },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default topProductsInit;
