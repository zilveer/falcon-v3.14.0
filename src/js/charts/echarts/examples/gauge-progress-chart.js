import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                          Echarts Gauge Progress Chart                      */
/* -------------------------------------------------------------------------- */

const echartsGaugeProgressChartInit = () => {
  const $gaugeProgressChartEl = document.querySelector('.echart-gauge-progress-chart-example');

  if ($gaugeProgressChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($gaugeProgressChartEl, 'options');
    const chart = window.echarts.init($gaugeProgressChartEl);

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
      series: [
        {
          type: 'gauge',
          center: ['50%', '60%'],
          radius: '100%',
          startAngle: 180,
          endAngle: 0,
          progress: {
            show: true,
            width: 18,
            itemStyle: {
              color: utils.getColor('info')
            }
          },
          itemStyle: {
            color: utils.getColor('info'),
            shadowColor: utils.rgbaColor(utils.getColor('primary'), 0.5),
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          axisLine: {
            lineStyle: {
              width: 18
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              width: 2,
              color: utils.getGrays()['600']
            }
          },
          axisLabel: {
            distance: 25,
            color: utils.getGrays()['600']
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              color: utils.getColor('info')
            }
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            fontSize: 80,
            offsetCenter: [0, '70%']
          },
          data: [
            {
              value: 70,
              detail: {
                fontSize: 30,
                color: utils.getGrays()['600'],
                offsetCenter: [0, '40%']
              }
            }
          ]
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsGaugeProgressChartInit;
