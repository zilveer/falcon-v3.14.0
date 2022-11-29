import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                 Navbar Top                                 */
/* -------------------------------------------------------------------------- */

const navbarTopDropShadow = () => {
  const Selector = {
    NAVBAR: '.navbar:not(.navbar-vertical)',
    NAVBAR_VERTICAL: '.navbar-vertical',
    NAVBAR_VERTICAL_CONTENT: '.navbar-vertical-content',
    NAVBAR_VERTICAL_COLLAPSE: 'navbarVerticalCollapse',
  };

  const ClassNames = {
    NAVBAR_GLASS_SHADOW: 'navbar-glass-shadow',
    SHOW: 'show',
  };

  const Events = {
    SCROLL: 'scroll',
    SHOW_BS_COLLAPSE: 'show.bs.collapse',
    HIDDEN_BS_COLLAPSE: 'hidden.bs.collapse',
  };
  let navDropShadowFlag = true;

  const $navbar = document.querySelector(Selector.NAVBAR);
  const $navbarVertical = document.querySelector(Selector.NAVBAR_VERTICAL);
  const $navbarVerticalContent = document.querySelector(
    Selector.NAVBAR_VERTICAL_CONTENT
  );
  const $navbarVerticalCollapse = document.getElementById(
    Selector.NAVBAR_VERTICAL_COLLAPSE
  );
  const html = document.documentElement;
  const breakPoint = utils.getBreakpoint($navbarVertical);
  const setDropShadow = ($elem) => {
    if ($elem.scrollTop > 0 && navDropShadowFlag) {
      $navbar && $navbar.classList.add(ClassNames.NAVBAR_GLASS_SHADOW);
    } else {
      $navbar && $navbar.classList.remove(ClassNames.NAVBAR_GLASS_SHADOW);
    }
  };

  window.addEventListener(Events.SCROLL, () => {
    setDropShadow(html);
  });

  if ($navbarVerticalContent) {
    $navbarVerticalContent.addEventListener(Events.SCROLL, () => {
      if (window.outerWidth < breakPoint) {
        navDropShadowFlag = true;
        setDropShadow($navbarVerticalContent);
      }
    });
  }
  if ($navbarVerticalCollapse) {
    $navbarVerticalCollapse.addEventListener(Events.SHOW_BS_COLLAPSE, () => {
      if (window.outerWidth < breakPoint) {
        navDropShadowFlag = false;
        setDropShadow(html);
      }
    });
  }
  if ($navbarVerticalCollapse) {
    $navbarVerticalCollapse.addEventListener(Events.HIDDEN_BS_COLLAPSE, () => {
      if (
        utils.hasClass($navbarVerticalCollapse, ClassNames.SHOW) &&
        window.outerWidth < breakPoint
      ) {
        navDropShadowFlag = false;
      } else {
        navDropShadowFlag = true;
      }
      setDropShadow(html);
    });
  }
};

export default navbarTopDropShadow;
