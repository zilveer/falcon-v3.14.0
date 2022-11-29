import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                                  bar-chart                                 */
/* -------------------------------------------------------------------------- */

const barChartInit = () => {
  const barChartElement = document.getElementById('chartjs-bar-chart');

  const getOptions = () => ({
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 6, 3],
          backgroundColor: [
            utils.rgbaColor(utils.getColor('secondary'), 0.2),
            utils.rgbaColor(utils.getColor('warning'), 0.2),
            utils.rgbaColor(utils.getColor('info'), 0.2),
            utils.rgbaColor(utils.getColor('success'), 0.2),
            utils.rgbaColor(utils.getColor('info'), 0.2),
            utils.rgbaColor(utils.getColor('primary'), 0.2)
          ],
          borderColor: [
            utils.getColor('secondary'),
            utils.getColor('warning'),
            utils.getColor('info'),
            utils.getColor('success'),
            utils.getColor('info'),
            utils.getColor('primary')
          ],
          borderWidth: 1
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
            color: utils.rgbaColor(utils.getGrays()['black'], 0.1),
            drawBorder: true
          }
        }
      }
    }
  });

  chartJsInit(barChartElement, getOptions);
};

export default barChartInit;
