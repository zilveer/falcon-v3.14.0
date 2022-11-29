import utils from '../../utils';
import { echartSetOption, getPosition } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Market Share                                */
/* -------------------------------------------------------------------------- */

const marketShareInit = () => {
  const ECHART_MARKET_SHARE = '.echart-market-share';
  const $echartMarketShare = document.querySelector(ECHART_MARKET_SHARE);

  if ($echartMarketShare) {
    const userOptions = utils.getData($echartMarketShare, 'options');
    const chart = window.echarts.init($echartMarketShare);

    const getDefaultOptions = () => ({
      color: [
        utils.getColors().primary,
        utils.getColors().info,
        utils.getGrays()[300],
      ],
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter(params) {
          return `<strong>${params.data.name}:</strong> ${params.percent}%`;
        },
      },
      position(pos, params, dom, rect, size) {
        return getPosition(pos, params, dom, rect, size);
      },
      legend: { show: false },
      series: [
        {
          type: 'pie',
          radius: ['100%', '87%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          itemStyle: {
            borderWidth: 2,
            borderColor: utils.getColor('gray-100'),
          },
          label: {
            normal: {
              show: false,
              position: 'center',
              textStyle: {
                fontSize: '20',
                fontWeight: '500',
                color: utils.getGrays()['100'],
              },
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: { normal: { show: false } },
          data: [
            { value: 5300000, name: 'Samsung' },
            { value: 1900000, name: 'Huawei' },
            { value: 2000000, name: 'Apple' },
          ],
        },
      ],
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default marketShareInit;
