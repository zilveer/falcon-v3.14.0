import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Scatter                                   */
/* -------------------------------------------------------------------------- */
const chartScatter = () => {
  const scatter = document.getElementById('chartjs-scatter-chart');

  const getOptions = () => ({
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Dataset one',
          data: [
            {
              x: -98,
              y: 42
            },
            {
              x: -85,
              y: -29
            },
            {
              x: -87,
              y: -70
            },
            {
              x: -53,
              y: 28
            },
            {
              x: -29,
              y: 4
            },
            {
              x: -2,
              y: -42
            },
            {
              x: 5,
              y: 3
            },
            {
              x: 39,
              y: 19
            },
            {
              x: 49,
              y: 79
            },
            {
              x: 83,
              y: -9
            },
            {
              x: 93,
              y: 12
            }
          ],
          pointBackgroundColor: utils.getColor('primary'),
          borderColor: utils.getColor('primary'),
          borderWidth: 1
        },
        {
          label: 'Dataset Two',
          data: [
            {
              x: 53,
              y: 12
            },
            {
              x: -78,
              y: 42
            },
            {
              x: -65,
              y: -39
            },
            {
              x: -57,
              y: -20
            },
            {
              x: 57,
              y: 28
            },
            {
              x: -35,
              y: 75
            },
            {
              x: -29,
              y: -43
            },
            {
              x: 15,
              y: 31
            },
            {
              x: 97,
              y: 19
            },
            {
              x: 49,
              y: 69
            },
            {
              x: 33,
              y: -57
            }
          ],
          pointBackgroundColor: utils.getColor('warning'),
          borderColor: utils.getColor('warning'),
          borderWidth: 1,
          borderRadius: '50%'
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
      },
      animation: {
        duration: 2000
      }
    }
  });

  chartJsInit(scatter, getOptions);
};

export default chartScatter;
