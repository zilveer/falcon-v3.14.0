import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                  Count Up                                  */
/* -------------------------------------------------------------------------- */

const countupInit = () => {
  if (window.countUp) {
    const countups = document.querySelectorAll('[data-countup]');
    countups.forEach((node) => {
      const { endValue, ...options } = utils.getData(node, 'countup');
      const countUp = new window.countUp.CountUp(node, endValue, {
        duration: 5,
        ...options,
      });
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  }
};

export default countupInit;
