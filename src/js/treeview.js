/* eslint-disable no-param-reassign */
import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                   Treeview                                   */
/* -------------------------------------------------------------------------- */
const treeviewInit = () => {
  const Events = {
    CHANGE: 'change',
    SHOW_BS_COLLAPSE: 'show.bs.collapse',
    HIDE_BS_COLLAPSE: 'hide.bs.collapse',
  };

  const Selector = {
    TREEVIEW_ROW:
      '.treeview > li > .treeview-row,.treeview-list.collapse-show > li > .treeview-row',
    TREEVIEW: '.treeview',
    TREEVIEW_LIST: '.treeview-list',
    TOGGLE_ELEMENT: "[data-bs-toggle='collapse']",
    INPUT: 'input',
    TREEVIEW_LIST_ITEM: '.treeview-list-item',
    CHILD_SELECTOR: ':scope > li > .collapse.collapse-show',
  };

  const ClassName = {
    TREEVIEW: 'treeview',
    TREEVIEW_LIST: 'treeview-list',
    TREEVIEW_BORDER: 'treeview-border',
    TREEVIEW_BORDER_TRANSPARENT: 'treeview-border-transparent',
    COLLAPSE_SHOW: 'collapse-show',
    COLLAPSE_HIDDEN: 'collapse-hidden',
    TREEVIEW_ROW: 'treeview-row',
    TREEVIEW_ROW_ODD: 'treeview-row-odd',
    TREEVIEW_ROW_EVEN: 'treeview-row-even',
  };

  const treeviews = document.querySelectorAll(Selector.TREEVIEW);

  const makeStriped = (treeview) => {
    const tags = Array.from(treeview.querySelectorAll(Selector.TREEVIEW_ROW));

    const uTags = tags.filter((tag) => {
      let result = true;
      while (tag.parentElement) {
        if (tag.parentElement.classList.contains(ClassName.COLLAPSE_HIDDEN)) {
          result = false;
          break;
        }
        tag = tag.parentElement;
      }
      return result;
    });
    uTags.forEach((tag, index) => {
      if (index % 2 === 0) {
        tag.classList.add(ClassName.TREEVIEW_ROW_EVEN);
        tag.classList.remove(ClassName.TREEVIEW_ROW_ODD);
      } else {
        tag.classList.add(ClassName.TREEVIEW_ROW_ODD);
        tag.classList.remove(ClassName.TREEVIEW_ROW_EVEN);
      }
    });
  };

  if (treeviews.length) {
    treeviews.forEach((treeview) => {
      const options = utils.getData(treeview, 'options');
      const striped = options?.striped;
      const select = options?.select;

      if (striped) {
        makeStriped(treeview);
      }

      const collapseElementList = Array.from(
        treeview.querySelectorAll(Selector.TREEVIEW_LIST)
      );
      const collapseListItem = Array.from(
        treeview.querySelectorAll(Selector.TREEVIEW_LIST_ITEM)
      );

      collapseListItem.forEach((item) => {
        const wholeRow = document.createElement('div');
        wholeRow.setAttribute('class', ClassName.TREEVIEW_ROW);
        item.prepend(wholeRow);
      });
      collapseElementList.forEach((collapse) => {
        const collapseId = collapse.id;
        if (!striped) {
          collapse.classList.add(ClassName.TREEVIEW_BORDER);
        }
        collapse.addEventListener(Events.SHOW_BS_COLLAPSE, (e) => {
          e.target.classList.remove(ClassName.COLLAPSE_HIDDEN);
          e.target.classList.add(ClassName.COLLAPSE_SHOW);
          if (striped) {
            makeStriped(treeview);
          } else {
            e.path[2].classList.add(ClassName.TREEVIEW_BORDER_TRANSPARENT);
          }
        });

        collapse.addEventListener(Events.HIDE_BS_COLLAPSE, (e) => {
          e.target.classList.add(ClassName.COLLAPSE_HIDDEN);
          e.target.classList.remove(ClassName.COLLAPSE_SHOW);

          if (striped) {
            makeStriped(treeview);
          } else {
            const childs = e.path[2].querySelectorAll(Selector.CHILD_SELECTOR);
            if (
              !e.path[2].classList.contains(ClassName.TREEVIEW) &&
              childs.length === 0
            ) {
              e.path[2].classList.remove(ClassName.TREEVIEW_BORDER_TRANSPARENT);
            }
          }
        });

        if (collapse.dataset.show === 'true') {
          const parents = [collapse];
          while (collapse.parentElement) {
            if (
              collapse.parentElement.classList.contains(ClassName.TREEVIEW_LIST)
            ) {
              parents.unshift(collapse.parentElement);
            }
            collapse = collapse.parentElement;
          }
          parents.forEach((collapseEl) => {
            // eslint-disable-next-line no-new
            new window.bootstrap.Collapse(collapseEl, {
              show: true,
            });
          });
        }

        if (select) {
          const inputElement = treeview.querySelector(
            `input[data-target='#${collapseId}']`
          );
          inputElement.addEventListener(Events.CHANGE, (e) => {
            const childInputElements = Array.from(
              treeview
                .querySelector(`#${collapseId}`)
                .querySelectorAll(Selector.INPUT)
            );
            childInputElements.forEach((input) => {
              input.checked = e.target.checked;
            });
          });
        }
      });
    });
  }
};

export default treeviewInit;
