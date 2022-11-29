import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Pie                                  */
/* -------------------------------------------------------------------------- */
const chartPie = () => {
  const pie = document.getElementById('chartjs-pie-chart');
  const getOptions = () => ({
    type: 'pie',
    data: {
      datasets: [
        {
          data: [5, 3, 2, 1, 1],
          backgroundColor: [
            utils.rgbaColor(utils.getColor('facebook'), 0.75),
            utils.rgbaColor(utils.getColor('youtube'), 0.75),
            utils.rgbaColor(utils.getColor('twitter'), 0.75),
            utils.rgbaColor(utils.getColor('linkedin'), 0.75),
            utils.rgbaColor(utils.getColor('github'), 0.75)
          ],
          borderWidth: 1,
          borderColor: utils.getGrays()['100']
        }
      ],

      labels: ['Facebook', 'Youtube', 'Twitter', 'Linkedin', 'GitHub']
    },
    options: {
      plugins: {
        tooltip: chartJsDefaultTooltip()
      },
      maintainAspectRatio: false
    }
  });

  chartJsInit(pie, getOptions);
};

export default chartPie;
