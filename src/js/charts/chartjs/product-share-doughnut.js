/* eslint-disable */
import utils from '../../utils';
import { chartJsDefaultTooltip, chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Scatter                                   */
/* -------------------------------------------------------------------------- */
const productShareDoughnutInit = () => {
  const marketShareDoughnutElement = document.getElementById(
    'marketShareDoughnut'
  );

  const getOptions = () => ({
    type: 'doughnut',
    data: {
      labels: ['Flacon', 'Sparrow'],
      datasets: [
        {
          data: [50, 88],
          backgroundColor: [utils.getColor('primary'), utils.getColor('gray-300')],
          borderColor: [utils.getColor('primary'), utils.getColor('gray-300')],
        },
      ],
    },
    options: {
      tooltips: chartJsDefaultTooltip(),
      rotation: -90,
      circumference: '180',
      cutout: '80%',
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  chartJsInit(marketShareDoughnutElement, getOptions);
};

export default productShareDoughnutInit;
