/* -------------------------------------------------------------------------- */
/*                                   Kanbah                                   */
/* -------------------------------------------------------------------------- */

import utils from './utils';

const kanbanInit = () => {
  const Selectors = {
    KANBAN_COLUMN: '.kanban-column',
    KANBAN_ITEMS_CONTAINER: '.kanban-items-container',
    BTN_ADD_CARD: '.btn-add-card',
    COLLAPSE: '.collapse',
    ADD_LIST_FORM: '#addListForm',
    BTN_COLLAPSE_DISMISS: '[data-dismiss="collapse"]',
    BTN_FORM_HIDE: '[data-btn-form="hide"]',
    INPUT_ADD_CARD: '[data-input="add-card"]',
    INPUT_ADD_LIST: '[data-input="add-list"]',
  };

  const ClassNames = {
    FORM_ADDED: 'form-added',
    D_NONE: 'd-none',
  };

  const Events = {
    CLICK: 'click',
    SHOW_BS_COLLAPSE: 'show.bs.collapse',
    SHOWN_BS_COLLAPSE: 'shown.bs.collapse',
  };

  const addCardButtons = document.querySelectorAll(Selectors.BTN_ADD_CARD);
  const formHideButtons = document.querySelectorAll(Selectors.BTN_FORM_HIDE);
  const addListForm = document.querySelector(Selectors.ADD_LIST_FORM);
  const collapseDismissButtons = document.querySelectorAll(
    Selectors.BTN_COLLAPSE_DISMISS
  );

  // Show add card form and place scrollbar bottom of the list
  addCardButtons &&
    addCardButtons.forEach((button) => {
      button.addEventListener(Events.CLICK, ({ currentTarget: el }) => {
        const column = el.closest(Selectors.KANBAN_COLUMN);
        const container = column.querySelector(
          Selectors.KANBAN_ITEMS_CONTAINER
        );
        const scrollHeight = container.scrollHeight;

        column.classList.add(ClassNames.FORM_ADDED);
        container.querySelector(Selectors.INPUT_ADD_CARD).focus();
        container.scrollTo({ top: scrollHeight });
      });
    });

  // Remove add card form
  formHideButtons.forEach((button) => {
    button.addEventListener(Events.CLICK, ({ currentTarget: el }) => {
      el.closest(Selectors.KANBAN_COLUMN).classList.remove(
        ClassNames.FORM_ADDED
      );
    });
  });

  if (addListForm) {
    // Hide add list button when the form is going to show
    addListForm.addEventListener(
      Events.SHOW_BS_COLLAPSE,
      ({ currentTarget: el }) => {
        const nextElement = el.nextElementSibling;
        nextElement && nextElement.classList.add(ClassNames.D_NONE);
      }
    );

    // Focus input field when the form is shown
    addListForm.addEventListener(
      Events.SHOWN_BS_COLLAPSE,
      ({ currentTarget: el }) => {
        el.querySelector(Selectors.INPUT_ADD_LIST).focus();
      }
    );
  }

  // Hide add list form when the dismiss button is clicked
  collapseDismissButtons.forEach((button) => {
    button.addEventListener(Events.CLICK, ({ currentTarget: el }) => {
      const collapseElement = el.closest(Selectors.COLLAPSE);
      const collapse = window.bootstrap.Collapse.getInstance(collapseElement);

      utils.hasClass(collapseElement.nextElementSibling, ClassNames.D_NONE) &&
        collapseElement.nextElementSibling.classList.remove(ClassNames.D_NONE);
      collapse.hide();
    });
  });
};

export default kanbanInit;
