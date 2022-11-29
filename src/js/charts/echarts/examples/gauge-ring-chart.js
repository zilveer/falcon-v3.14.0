import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                          Echarts Gauge Progress Chart                      */
/* -------------------------------------------------------------------------- */

const echartsGaugeRingChartInit = () => {
  const $gaugeRingChartEl = document.querySelector('.echart-gauge-ring-chart-example');

  if ($gaugeRingChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($gaugeRingChartEl, 'options');
    const chart = window.echarts.init($gaugeRingChartEl);

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
          radius: '100%',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 1,
              borderColor: utils.getGrays()['500']
            }
          },
          axisLine: {
            lineStyle: {
              width: 18
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: [
            {
              value: 80,
              title: {
                offsetCenter: ['0%', '0%']
              },
              detail: {
                offsetCenter: ['0%', '0%']
              },
              itemStyle: {
                color: utils.getColor('primary')
              }
            }
          ],
          title: {
            fontSize: 14
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 20,
            color: 'auto',
            formatter: '{value}%'
          }
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsGaugeRingChartInit;
