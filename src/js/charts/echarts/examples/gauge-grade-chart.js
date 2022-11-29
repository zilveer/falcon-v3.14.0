import utils from '../../../utils';
import { echartSetOption } from '../echarts-utils';

/* -------------------------------------------------------------------------- */
/*                          Echarts Gauge Progress Chart                      */
/* -------------------------------------------------------------------------- */

const echartsGaugeGradeChartInit = () => {
  const $gaugeGradeChartEl = document.querySelector('.echart-gauge-grade-chart-example');

  if ($gaugeGradeChartEl) {
    // Get options from data attribute
    const userOptions = utils.getData($gaugeGradeChartEl, 'options');
    const chart = window.echarts.init($gaugeGradeChartEl);

    const getDefaultOptions = () => ({
      series: [
        {
          radius: '100%',
          type: 'gauge',
          center: ['50%', '70%'],
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 1,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, utils.getColor('danger')],
                [0.5, utils.getColor('warning')],
                [0.75, utils.getColor('info')],
                [1, utils.getColor('success')]
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-60%'],
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 2
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: 'auto',
              width: 5
            }
          },
          axisLabel: {
            color: utils.getGrays()['600'],
            distance: -60,
            formatter: function (value) {
              if (value === 0.875) {
                return 'Excellent';
              } else if (value === 0.625) {
                return 'Good';
              } else if (value === 0.375) {
                return 'Well';
              } else if (value === 0.125) {
                return 'Bad';
              }
              return '';
            }
          },
          title: {
            offsetCenter: [0, '-20%'],
            color: utils.getGrays()['600']
          },
          detail: {
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value * 100);
            },
            color: 'auto'
          },
          data: [
            {
              value: 0.7,
              name: 'Grade'
            }
          ]
        }
      ]
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsGaugeGradeChartInit;
