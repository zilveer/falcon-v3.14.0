import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                         Bootstrap Animated Progress                        */
/* -------------------------------------------------------------------------- */

const progressAnimationToggle = () => {
  const animatedProgress = document.querySelectorAll(
    '[data-progress-animation]'
  );

  animatedProgress.forEach((progress) => {
    progress.addEventListener('click', (e) => {
      const progressID = utils.getData(e.currentTarget, 'progressAnimation');
      const $progress = document.getElementById(progressID);
      $progress.classList.toggle('progress-bar-animated');
    });
  });
};

export default progressAnimationToggle;
