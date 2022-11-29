// export default themeControl;
import { setItemToStore, getData, getItemFromStore } from './utils';
import DomNode from './node';

/* -------------------------------------------------------------------------- */
/*                                Theme Control                               */
/* -------------------------------------------------------------------------- */
/* eslint-disable no-param-reassign */
/* eslint-disable */
import CONFIG from './config';
const initialDomSetup = (element) => {
  if (!element) return;
  const dataUrlDom = element.querySelector(
    '[data-theme-control = "navbarPosition"]'
  );
  const hasDataUrl = dataUrlDom ? getData(dataUrlDom, 'page-url') : null;

  element.querySelectorAll('[data-theme-control]').forEach((el) => {
    const inputDataAttributeValue = getData(el, 'theme-control');
    const localStorageValue = getItemFromStore(inputDataAttributeValue);
    if (
      inputDataAttributeValue === 'navbarStyle' &&
      !hasDataUrl &&
      (getItemFromStore('navbarPosition') === 'top' ||
        getItemFromStore('navbarPosition') === 'double-top')
    ) {
      el.setAttribute('disabled', true);
    }
    if (
      el.type === 'select-one' &&
      inputDataAttributeValue === 'navbarPosition'
    ) {
      el.value = localStorageValue;
    }
    if (el.type === 'checkbox') {
      if (inputDataAttributeValue === 'theme') {
        localStorageValue === 'dark' && el.setAttribute('checked', true);
      } else {
        localStorageValue && el.setAttribute('checked', true);
      }
    } else {
      const isChecked = localStorageValue === el.value;
      isChecked && el.setAttribute('checked', true);
    }
  });
};

const changeTheme = (element) => {
  element.querySelectorAll('[data-theme-control = "theme"]').forEach((el) => {
    const inputDataAttributeValue = getData(el, 'theme-control');
    const localStorageValue = getItemFromStore(inputDataAttributeValue);

    if (el.type === 'checkbox') {
      localStorageValue === 'dark' ? (el.checked = true) : (el.checked = false);
    } else {
      localStorageValue === el.value
        ? (el.checked = true)
        : (el.checked = false);
    }
  });
};

const themeControl = () => {
  const themeController = new DomNode(document.body);

  const navbarVertical = document.querySelector('.navbar-vertical');
  initialDomSetup(themeController.node);

  themeController.on('click', (e) => {
    const target = new DomNode(e.target);

    if (target.data('theme-control')) {
      const control = target.data('theme-control');
      let value = e.target[e.target.type === 'radio' ? 'value' : 'checked'];
      if (control === 'theme') {
        typeof value === 'boolean' && (value = value ? 'dark' : 'light');
      }
      if (control !== 'navbarPosition') {
        CONFIG.hasOwnProperty(control) && setItemToStore(control, value);
        switch (control) {
          case 'theme': {
            document.documentElement.classList[
              value === 'dark' ? 'add' : 'remove'
            ]('dark');
            const clickControl = new CustomEvent('clickControl', {
              detail: { control, value },
            });
            e.currentTarget.dispatchEvent(clickControl);
            changeTheme(themeController.node);
            break;
          }
          case 'navbarStyle': {
            navbarVertical.classList.remove('navbar-card');
            navbarVertical.classList.remove('navbar-inverted');
            navbarVertical.classList.remove('navbar-vibrant');
            if (value !== 'transparent') {
              navbarVertical.classList.add(`navbar-${value}`);
            }
            break;
          }
          case 'reset': {
            Object.keys(CONFIG).forEach((key) => {
              localStorage.setItem(key, CONFIG[key]);
            });
            window.location.reload();
            break;
          }
          default:
            window.location.reload();
        }
      }
    }
  });

  // control navbar position
  themeController.on('change', (e) => {
    const target = new DomNode(e.target);

    if (target.data('theme-control') === 'navbarPosition') {
      CONFIG.hasOwnProperty('navbarPosition') &&
        setItemToStore('navbarPosition', e.target.value);

      const pageUrl = getData(target.node.selectedOptions[0], 'page-url');
      !!pageUrl
        ? window.location.replace(pageUrl)
        : window.location.replace(window.location.href.split('#')[0]);
    }
  });
};

export default themeControl;
