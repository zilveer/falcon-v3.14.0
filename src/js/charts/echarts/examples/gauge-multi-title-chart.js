import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                          Echarts Gauge Progress Chart                      */
/* -------------------------------------------------------------------------- */

const echartsGaugeMultiTitleChartInit = () => {
  const $gaugeMultiTitleChartEl = document.querySelector('.echart-gauge-multi-title-chart-example');

  if ($gaugeMultiTitleChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($gaugeMultiTitleChartEl, 'options');
    const chart = window.echarts.init($gaugeMultiTitleChartEl);

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
          anchor: {
            show: true,
            showAbove: true,
            size: 18,
            itemStyle: {
              color: utils.getColor('warning')
            }
          },

          progress: {
            show: true,
            overlap: true,
            roundCap: true
          },
          axisLine: {
            roundCap: true
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
          data: [
            {
              value: 20,
              name: 'Perfect',
              title: {
                offsetCenter: ['-40%', '80%']
              },
              detail: {
                offsetCenter: ['-40%', '95%']
              },
              itemStyle: {
                color: utils.getColor('primary')
              }
            },
            {
              value: 40,
              name: 'Good',
              title: {
                offsetCenter: ['0%', '80%']
              },
              detail: {
                offsetCenter: ['0%', '95%']
              },

              itemStyle: {
                color: utils.getColor('success')
              }
            },
            {
              value: 60,
              name: 'Commonly',
              title: {
                offsetCenter: ['40%', '80%']
              },
              detail: {
                offsetCenter: ['40%', '95%']
              },

              itemStyle: {
                color: utils.getColor('warning')
              }
            }
          ],
          title: {
            fontSize: 14,
            color: utils.getGrays()['600']
          },
          detail: {
            width: 40,
            height: 14,
            fontSize: 14,
            color: '#fff',
            backgroundColor: 'auto',
            borderRadius: 3,
            formatter: '{value}%'
          }
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsGaugeMultiTitleChartInit;
