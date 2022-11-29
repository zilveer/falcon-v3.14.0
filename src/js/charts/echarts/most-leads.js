import utils from '../../utils';
import { echartSetOption, getPosition } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Market Share                                */
/* -------------------------------------------------------------------------- */

const mostLeadsInit = () => {
  const ECHART_MOST_LEADS = '.echart-most-leads';
  const $echartMostLeads = document.querySelector(ECHART_MOST_LEADS);

  if ($echartMostLeads) {
    const userOptions = utils.getData($echartMostLeads, 'options');
    const chart = window.echarts.init($echartMostLeads);

    const getDefaultOptions = () => ({
      color: [
        utils.getColors().primary,
        utils.rgbaColor(utils.getColors().primary, 0.5),
        utils.getColors().warning,
        utils.getColors().info,
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
          radius: ['100%', '67%'],
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
            { value: 60, name: 'Social' },
            { value: 30, name: 'Other' },
            { value: 10, name: 'Call' },
            { value: 120, name: 'Email' },
          ],
        },
      ],
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default mostLeadsInit;
