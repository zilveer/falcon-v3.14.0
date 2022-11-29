/* eslint-disable */
import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit, getBubbleDataset } from './chartjs-utils';
/* -------------------------------------------------------------------------- */
/*                            Chart Bubble                                    */
/* -------------------------------------------------------------------------- */

const chartBubble = () => {
  const pie = document.getElementById('chartjs-bubble-chart');
  const getOptions = () => ({
    type: 'bubble',
    data: {
      datasets: [
        {
          label: 'Dataset 1',
          data: getBubbleDataset(5, 5, 15, 0, 100),
          backgroundColor: utils.getSoftColors()['primary'],
          hoverBackgroundColor: utils.getColors()['primary']
        },
        {
          label: 'Dataset 2',
          data: getBubbleDataset(5, 5, 15, 0, 100),
          backgroundColor: utils.getSoftColors()['success'],
          hoverBackgroundColor: utils.getColors()['success']
        },
        {
          label: 'Dataset 3',
          data: getBubbleDataset(5, 5, 15, 0, 100),
          backgroundColor: utils.getSoftColors()['danger'],
          hoverBackgroundColor: utils.getColors()['danger']
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          position: 'top'
        },
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

  chartJsInit(pie, getOptions);
};

export default chartBubble;
