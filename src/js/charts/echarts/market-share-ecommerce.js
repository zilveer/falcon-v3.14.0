import utils from '../../utils';
import { echartSetOption, getPosition } from './echarts-utils';
/* -------------------------------------------------------------------------- */
/*                                Product Share                               */
/* -------------------------------------------------------------------------- */

const marketShareEcommerceInit = () => {
  const ECHART_PRODUCT_SHARE = '.echart-product-share';
  const $echartProductShare = document.querySelector(ECHART_PRODUCT_SHARE);

  if ($echartProductShare) {
    const userOptions = utils.getData($echartProductShare, 'options');
    const chart = window.echarts.init($echartProductShare);

    const getDefaultOptions = () => ({
      color: [
        utils.getColors().primary,
        utils.getColors().info,
        utils.getColors().warning,
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
          radius: ['100%', '80%'],
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
                color: utils.getGrays()['700'],
              },
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: { normal: { show: false } },
          data: [
            { value: 5300000, name: 'Falcon' },
            { value: 1900000, name: 'Sparrow' },
            { value: 2000000, name: 'Phoenix' },
          ],
        },
      ],
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default marketShareEcommerceInit;
