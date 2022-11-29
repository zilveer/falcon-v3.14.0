/*-----------------------------------------------
|   Dashboard Table dropdown
-----------------------------------------------*/
const dropdownMenuInit = () => {
  // Only for ios
  if (window.is.ios()) {
    const Event = {
      SHOWN_BS_DROPDOWN: 'shown.bs.dropdown',
      HIDDEN_BS_DROPDOWN: 'hidden.bs.dropdown',
    };
    const Selector = {
      TABLE_RESPONSIVE: '.table-responsive',
      DROPDOWN_MENU: '.dropdown-menu',
    };
    document.querySelectorAll(Selector.TABLE_RESPONSIVE).forEach((table) => {
      table.addEventListener(Event.SHOWN_BS_DROPDOWN, (e) => {
        const t = e.currentTarget;
        if (t.scrollWidth > t.clientWidth) {
          t.style.paddingBottom =
            e.target.nextElementSibling.clientHeight + 'px';
        }
      });
      table.addEventListener(Event.HIDDEN_BS_DROPDOWN, (e) => {
        e.currentTarget.style.paddingBottom = '';
      });
    });
  }
};

// Reference
// https://github.com/twbs/bootstrap/issues/11037#issuecomment-274870381

export default dropdownMenuInit;
