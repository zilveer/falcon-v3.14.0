import utils from '../../utils';
import { chartJsInit } from './chartjs-utils';

/* -------------------------------------------------------------------------- */
/*                            Chart Half Doughnut                             */
/* -------------------------------------------------------------------------- */
const chartHalfDoughnutInit = () => {
  const $chartHalfDoughnuts = document.querySelectorAll('[data-half-doughnut]');

  $chartHalfDoughnuts.forEach(($chartHalfDoughnut) => {
    if ($chartHalfDoughnut) {
      const getOptions = () => {
        const userOptions = utils.getData($chartHalfDoughnut, 'half-doughnut');
        const defaultOptions = {
          type: 'doughnut',
          data: {
            labels: ['Reached', 'Target'],
            datasets: [
              {
                data: [50, 50],
                backgroundColor: ['primary', 'gray-300'],
                borderWidth: [0, 0, 0, 0],
              },
            ],
          },
          options: {
            rotation: -90,
            circumference: '180',
            cutout: '80%',
            hover: { mode: null },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
          },
        };
        const options = window._.merge(defaultOptions, userOptions);
        const mergedDatasets = options.data.datasets[0];

        mergedDatasets.backgroundColor = [
          utils.getColor(mergedDatasets.backgroundColor[0]),
          utils.getColor(mergedDatasets.backgroundColor[1]),
        ];

        return options;
      };

      chartJsInit($chartHalfDoughnut, getOptions);
    }
  });
};

export default chartHalfDoughnutInit;
