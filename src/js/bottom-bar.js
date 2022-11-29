import utils from './utils';
/*-----------------------------------------------
|   Bottom Bar Control
-----------------------------------------------*/

const bottomBarInit = () => {
  const bottomBars = document.querySelectorAll('[data-bottom-bar]');
  const navbarButtons = [
    document.querySelector('[data-bs-target="#navbarVerticalCollapse"]'),
    document.querySelector('[data-bs-target="#navbarStandard"]'),
  ];

  const isElementInViewport = (el, offsetTop = 0) => {
    const rect = el.getBoundingClientRect();

    return (
      rect.bottom > 0 &&
      rect.top > offsetTop &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  if (bottomBars.length) {
    bottomBars.forEach((bar) => {
      // get options
      const barOptions = utils.getData(bar, 'bottom-bar');
      const defaultOptions = {
        target: '#bottom-bar-target',
        offsetTop: 0,
        breakPoint: 'lg',
      };
      const { target, offsetTop, breakPoint } = window._.merge(
        defaultOptions,
        barOptions
      );

      // select target
      const targetEl = document.getElementById(target);

      // handle Bottombar
      const toggleBottomBar = () => {
        if (
          window.matchMedia(`(max-width: ${utils.breakpoints[breakPoint]}px)`)
            .matches
        ) {
          if (!isElementInViewport(targetEl, offsetTop)) {
            utils.removeClass(bar, 'hide');
          } else {
            utils.addClass(bar, 'hide');
          }
        }
      };

      window.addEventListener('scroll', toggleBottomBar);

      const toggleBottomBarOnNavbarCollapse = (el) => {
        if (!utils.hasClass(el, 'collapsed')) {
          utils.addClass(bar, 'hide');
        } else if (!isElementInViewport(targetEl, offsetTop)) {
          utils.removeClass(bar, 'hide');
        }
      };

      navbarButtons.forEach(
        (btn) =>
          btn &&
          btn.addEventListener('click', () =>
            toggleBottomBarOnNavbarCollapse(btn)
          )
      );
    });
  }
};

export default bottomBarInit;
