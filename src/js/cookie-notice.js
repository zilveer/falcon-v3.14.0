import utils from './utils';

/*-----------------------------------------------
|   Cookie notice
-----------------------------------------------*/
const cookieNoticeInit = () => {
  const Selector = {
    NOTICE: '.notice',
    DATA_TOGGLE_Notice: '[data-bs-toggle="notice"]',
  };

  const Events = {
    CLICK: 'click',
    HIDDEN_BS_TOAST: 'hidden.bs.toast',
  };

  const DataKeys = {
    OPTIONS: 'options',
  };

  const ClassNames = {
    HIDE: 'hide',
  };

  const notices = document.querySelectorAll(Selector.NOTICE);
  let showNotice = true;
  notices.forEach((item) => {
    const notice = new window.bootstrap.Toast(item);
    const options = {
      autoShow: false,
      autoShowDelay: 0,
      showOnce: false,
      cookieExpireTime: 3600000,
      ...utils.getData(item, DataKeys.OPTIONS),
    };
    const { showOnce, autoShow, autoShowDelay } = options;

    if (showOnce) {
      const hasNotice = utils.getCookie('notice');
      showNotice = hasNotice === null;
    }

    if (autoShow && showNotice) {
      setTimeout(() => {
        notice.show();
      }, autoShowDelay);
    }

    item.addEventListener(Events.HIDDEN_BS_TOAST, function (e) {
      const el = e.currentTarget;
      const toastOptions = {
        cookieExpireTime: 3600000,
        showOnce: false,
        ...utils.getData(el, DataKeys.OPTIONS),
      };
      toastOptions.showOnce &&
        utils.setCookie('notice', false, toastOptions.cookieExpireTime);
    });
  });

  const btnNoticeToggle = document.querySelector(Selector.DATA_TOGGLE_Notice);
  btnNoticeToggle &&
    btnNoticeToggle.addEventListener(Events.CLICK, ({ currentTarget }) => {
      const id = currentTarget.getAttribute('href');
      const notice = new window.bootstrap.Toast(document.querySelector(id));

      /*eslint-disable-next-line*/
      const el = notice._element;
      utils.hasClass(el, ClassNames.HIDE) ? notice.show() : notice.hide();
    });
};

export default cookieNoticeInit;
