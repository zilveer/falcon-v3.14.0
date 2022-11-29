import utils from './utils';

/*-----------------------------------------------
|  Quantity
-----------------------------------------------*/
const quantityInit = () => {
  const Selector = {
    DATA_QUANTITY_BTN: '[data-quantity] [data-type]',
    DATA_QUANTITY: '[data-quantity]',
    DATA_QUANTITY_INPUT: '[data-quantity] input[type="number"]',
  };

  const Events = {
    CLICK: 'click',
  };

  const Attributes = {
    MIN: 'min',
  };

  const DataKey = {
    TYPE: 'type',
  };

  const quantities = document.querySelectorAll(Selector.DATA_QUANTITY_BTN);

  quantities.forEach((quantity) => {
    quantity.addEventListener(Events.CLICK, (e) => {
      const el = e.currentTarget;
      const type = utils.getData(el, DataKey.TYPE);
      const numberInput = el
        .closest(Selector.DATA_QUANTITY)
        .querySelector(Selector.DATA_QUANTITY_INPUT);

      const min = numberInput.getAttribute(Attributes.MIN);
      let value = parseInt(numberInput.value, 10);

      if (type === 'plus') {
        value += 1;
      } else {
        value = value > min ? (value -= 1) : value;
      }
      numberInput.value = value;
    });
  });
};

export default quantityInit;
