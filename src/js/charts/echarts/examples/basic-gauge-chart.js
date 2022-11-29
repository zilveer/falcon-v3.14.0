import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Basic Gauge Chart                      */
/* -------------------------------------------------------------------------- */

const echartsBasicGaugeChartInit = () => {
  const $basicGaugeChartEl = document.querySelector('.echart-basic-gauge-chart-example');

  if ($basicGaugeChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($basicGaugeChartEl, 'options');
    const chart = window.echarts.init($basicGaugeChartEl);

    const tooltipFormatter = params => {
      return `
      <div>
          <h6 class="fs--1 text-700 mb-0">
            <span class="fas fa-circle me-1" style='color:${params[0].color}'></span>
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
      radius: '100%',
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          splitLine: {
            lineStyle: {
              color: utils.getGrays()['600']
            }
          },
          axisLabel: {
            color: utils.getGrays()['600']
          },
          detail: {
            formatter: '{value}'
          },
          title: {
            color: utils.getGrays()['600']
          },
          data: [
            {
              value: 50,
              name: 'SCORE',
              detail: {
                color: utils.getGrays()['600']
              }
            }
          ]
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsBasicGaugeChartInit;
