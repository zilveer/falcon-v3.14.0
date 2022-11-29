import utils from '../../utils';
import { echartSetOption, getPosition } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Session By Device                           */
/* -------------------------------------------------------------------------- */

const sessionByBrowserChartInit = () => {
  const $sessionByBroswser = document.querySelector(
    '.echart-session-by-browser'
  );

  if ($sessionByBroswser) {
    const userOptions = utils.getData($sessionByBroswser, 'options');
    const chart = window.echarts.init($sessionByBroswser);

    const dataset = {
      week: [
        { value: 50.3, name: 'Chrome' },
        { value: 20.6, name: 'Safari' },
        { value: 30.1, name: 'Mozilla' },
      ],
      month: [
        { value: 35.1, name: 'Chrome' },
        { value: 25.6, name: 'Safari' },
        { value: 40.3, name: 'Mozilla' },
      ],
      year: [
        { value: 26.1, name: 'Chrome' },
        { value: 10.6, name: 'Safari' },
        { value: 64.3, name: 'Mozilla' },
      ],
    };

    const getDefaultOptions = () => ({
      color: [
        utils.getColors().primary,
        utils.getColors().success,
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
        formatter: params =>
          `<strong>${params.data.name}:</strong> ${params.data.value}%`,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
      },

      legend: { show: false },
      series: [
        {
          type: 'pie',
          radius: ['100%', '65%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          itemStyle: {
            borderWidth: 2,
            borderColor: utils.getColor('gray-100'),
          },
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: { normal: { show: false } },
          data: dataset.week,
        },
      ],
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    const selectMenu = document.querySelector(
      "[data-target='.echart-session-by-browser']"
    );

    if (selectMenu) {
      selectMenu.addEventListener('change', e => {
        const { value } = e.currentTarget;
        chart.setOption({
          series: [{ data: dataset[value] }],
        });
      });
    }
  }
};

export default sessionByBrowserChartInit;
