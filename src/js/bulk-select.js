import DomNode from './node';

/*-----------------------------------------------
|   Bulk Select
-----------------------------------------------*/
class BulkSelect {
  constructor(element, option) {
    this.element = new DomNode(element);
    this.option = {
      displayNoneClassName: 'd-none',
      ...option,
    };
  }

  init() {
    this.attachNodes();
    this.clickBulkCheckbox();
    this.clickRowCheckbox();
  }

  attachNodes() {
    const { body, actions, replacedElement } = this.element.data('bulk-select');
    this.actions = new DomNode(document.getElementById(actions));
    this.replacedElement = new DomNode(document.getElementById(replacedElement));
    this.bulkSelectRows = document
      .getElementById(body)
      .querySelectorAll('[data-bulk-select-row]');
  }

  clickBulkCheckbox() {
    // Handle click event in bulk checkbox
    this.element.on('click', () => {
      if (this.element.attr('indeterminate') === 'indeterminate') {
        this.actions.addClass(this.option.displayNoneClassName);
        this.replacedElement.removeClass(this.option.displayNoneClassName);

        this.removeBulkCheck();

        this.bulkSelectRows.forEach((el) => {
          const rowCheck = new DomNode(el);
          rowCheck.setProp('checked', false);
          rowCheck.setAttribute('checked', false);
        });
        return;
      }

      this.toggleDisplay();
      this.bulkSelectRows.forEach((el) => {
        const rowCheck = new DomNode(el);
        rowCheck.setProp('checked', this.element.attr('checked'));
        rowCheck.setAttribute('checked', this.element.attr('checked'));
      });
    });
  }

  clickRowCheckbox() {
    // Handle click event in checkbox of each row
    this.bulkSelectRows.forEach((el) => {
      const rowCheck = new DomNode(el);
      rowCheck.on('click', () => {
        if (this.element.attr('indeterminate') !== 'indeterminate') {
          this.element.setProp('indeterminate', true);
          this.element.setAttribute('indeterminate', 'indeterminate');
          this.element.setProp('checked', true);
          this.element.setAttribute('checked', true);

          this.actions.removeClass(this.option.displayNoneClassName);
          this.replacedElement.addClass(this.option.displayNoneClassName);
        }

        if ([...this.bulkSelectRows].every((element) => element.checked)) {
          this.element.setProp('indeterminate', false);
          this.element.setAttribute('indeterminate', false);
        }

        if ([...this.bulkSelectRows].every((element) => !element.checked)) {
          this.removeBulkCheck();
          this.toggleDisplay();
        }
      });
    });
  }

  removeBulkCheck() {
    this.element.setProp('indeterminate', false);
    this.element.removeAttribute('indeterminate');
    this.element.setProp('checked', false);
    this.element.setAttribute('checked', false);
  }

  toggleDisplay() {
    this.actions.toggleClass(this.option.displayNoneClassName);
    this.replacedElement.toggleClass(this.option.displayNoneClassName);
  }
}

function bulkSelectInit() {
  const bulkSelects = document.querySelectorAll('[data-bulk-select');

  if (bulkSelects.length) {
    bulkSelects.forEach((el) => {
      const bulkSelect = new BulkSelect(el);
      bulkSelect.init();
    });
  }
}

export default bulkSelectInit;
