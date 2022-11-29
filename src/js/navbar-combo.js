import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                             Navbar Combo Layout                            */
/* -------------------------------------------------------------------------- */

const navbarComboInit = () => {
  const Selector = {
    NAVBAR_VERTICAL: '.navbar-vertical',
    NAVBAR_TOP_COMBO: '[data-navbar-top="combo"]',
    COLLAPSE: '.collapse',
    DATA_MOVE_CONTAINER: '[data-move-container]',
    NAVBAR_NAV: '.navbar-nav',
    NAVBAR_VERTICAL_DIVIDER: '.navbar-vertical-divider',
  };

  const ClassName = {
    FLEX_COLUMN: 'flex-column',
  };

  const navbarVertical = document.querySelector(Selector.NAVBAR_VERTICAL);
  const navbarTopCombo = document.querySelector(Selector.NAVBAR_TOP_COMBO);

  const moveNavContent = (windowWidth) => {
    const navbarVerticalBreakpoint = utils.getBreakpoint(navbarVertical);
    const navbarTopBreakpoint = utils.getBreakpoint(navbarTopCombo);

    if (windowWidth < navbarTopBreakpoint) {
      const navbarCollapse = navbarTopCombo.querySelector(Selector.COLLAPSE);
      const navbarTopContent = navbarCollapse.innerHTML;

      if (navbarTopContent) {
        const targetID = utils.getData(navbarTopCombo, 'move-target');
        const targetElement = document.querySelector(targetID);

        navbarCollapse.innerHTML = '';
        targetElement.insertAdjacentHTML(
          'afterend',
          `
            <div data-move-container>
              <div class='navbar-vertical-divider'>
                <hr class='navbar-vertical-hr' />
              </div>
              ${navbarTopContent}
            </div>
          `
        );

        if (navbarVerticalBreakpoint < navbarTopBreakpoint) {
          const navbarNav = document
            .querySelector(Selector.DATA_MOVE_CONTAINER)
            .querySelector(Selector.NAVBAR_NAV);
          utils.addClass(navbarNav, ClassName.FLEX_COLUMN);
        }
      }
    } else {
      const moveableContainer = document.querySelector(
        Selector.DATA_MOVE_CONTAINER
      );
      if (moveableContainer) {
        const navbarNav = moveableContainer.querySelector(Selector.NAVBAR_NAV);
        utils.hasClass(navbarNav, ClassName.FLEX_COLUMN) &&
          navbarNav.classList.remove(ClassName.FLEX_COLUMN);
        moveableContainer
          .querySelector(Selector.NAVBAR_VERTICAL_DIVIDER)
          .remove();
        navbarTopCombo.querySelector(Selector.COLLAPSE).innerHTML =
          moveableContainer.innerHTML;
        moveableContainer.remove();
      }
    }
  };

  moveNavContent(window.innerWidth);

  utils.resize(() => moveNavContent(window.innerWidth));
};

export default navbarComboInit;
