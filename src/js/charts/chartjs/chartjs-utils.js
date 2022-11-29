import utils from '../../utils';

/* -------------------------------------------------------------------------- */
/*                            ChartJs Initialization                          */
/* -------------------------------------------------------------------------- */

const chartJsInit = (chartEl, config) => {
  if (!chartEl) return;

  const ctx = chartEl.getContext('2d');
  let chart = new window.Chart(ctx, config());

  const themeController = document.body;
  themeController.addEventListener(
    'clickControl',
    ({ detail: { control } }) => {
      if (control === 'theme') {
        chart.destroy();
        chart = new window.Chart(ctx, config());
      }
      return null;
    }
  );
};

const chartJsDefaultTooltip = () => ({
  backgroundColor: utils.getGrays()['100'],
  borderColor: utils.getGrays()['300'],
  borderWidth: 1,
  titleColor: utils.getGrays()['black'],
  callbacks: {
    labelTextColor() {
      return utils.getGrays()['black'];
    },
  },
});

const getBubbleDataset = (count, rmin, rmax, min, max) => {
  const arr = Array.from(Array(count).keys());
  return arr.map(() => ({
    x: utils.getRandomNumber(min, max),
    y: utils.getRandomNumber(min, max),
    r: utils.getRandomNumber(rmin, rmax),
  }));
};

export default { chartJsDefaultTooltip, chartJsInit, getBubbleDataset };
