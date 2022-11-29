import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                            Bandwidth Saved                                 */
/* -------------------------------------------------------------------------- */

const bandwidthSavedInit = () => {
  const $echartsBandwidthSaved = document.querySelector(
    '.echart-bandwidth-saved'
  );

  if ($echartsBandwidthSaved) {
    const userOptions = utils.getData($echartsBandwidthSaved, 'options');
    const chart = window.echarts.init($echartsBandwidthSaved);

    const getDefaultOptions = () => ({
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          radius: '90%',
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#1970e2',
                  },
                  {
                    offset: 1,
                    color: '#4695ff',
                  },
                ],
              },
            },
          },
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[1, utils.getColor('gray-200')]],
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          data: [
            {
              value: 93,
              detail: {
                offsetCenter: ['7%', '4%'],
              },
            },
          ],
          detail: {
            width: 50,
            height: 14,
            fontSize: 28,
            fontWeight: 500,
            fontFamily: 'poppins',
            color: utils.getColor('gray-500'),
            formatter: '{value}%',
            valueAnimation: true,
          },
          animationDuration: 3000,
        },
      ],
    });

    const initChart = () => {
      if (utils.isScrolledIntoView($echartsBandwidthSaved)) {
        echartSetOption(chart, userOptions, getDefaultOptions);
        window.removeEventListener('scroll', initChart);
      }
    };

    window.addEventListener('scroll', initChart);
  }
};

export default bandwidthSavedInit;
