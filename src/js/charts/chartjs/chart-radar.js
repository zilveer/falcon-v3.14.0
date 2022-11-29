import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Radar                                  */
/* -------------------------------------------------------------------------- */
const chartRadar = () => {
  const radar = document.getElementById('chartjs-radar-chart');

  const getOptions = () => ({
    type: 'radar',
    data: {
      labels: ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'History'],
      datasets: [
        {
          label: 'Student A',
          backgroundColor: utils.rgbaColor(utils.getColor('success'), 0.5),
          data: [65, 75, 70, 80, 60, 80],
          borderWidth: 1
        },
        {
          label: 'Student B',
          backgroundColor: utils.rgbaColor(utils.getColor('primary'), 0.5),
          data: [54, 65, 60, 70, 70, 75],
          borderWidth: 1
        }
      ]
    },
    options: {
      plugins: {
        tooltip: chartJsDefaultTooltip()
      },
      maintainAspectRatio: false,
      scales: {
        r: {
          grid: {
            color: utils.rgbaColor(utils.getGrays()['black'], 0.1)
          }
        }
      }
    }
  });

  chartJsInit(radar, getOptions);
};

export default chartRadar;
