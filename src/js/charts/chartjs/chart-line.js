import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Line                                  */
/* -------------------------------------------------------------------------- */
const chartLine = () => {
  const line = document.getElementById('chartjs-line-chart');

  const getOptions = () => ({
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: utils.getColor('primary'),
          borderWidth: 2,
          fill: false,
          data: [55, 80, 60, 22, 50, 40, 90],
          tension: 0.3
        }
      ]
    },
    options: {
      plugins: {
        tooltip: chartJsDefaultTooltip()
      },
      scales: {
        x: {
          grid: {
            color: utils.rgbaColor(utils.getGrays()['black'], 0.1)
          }
        },
        y: {
          grid: {
            color: utils.rgbaColor(utils.getGrays()['black'], 0.1)
          }
        }
      }
    }
  });

  chartJsInit(line, getOptions);
};

export default chartLine;
