import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                   choices                                   */
/* -------------------------------------------------------------------------- */
const choicesInit = () => {
  if (window.Choices) {
    const elements = document.querySelectorAll('.js-choice');
    elements.forEach((item) => {
      const userOptions = utils.getData(item, 'options');
      const choices = new window.Choices(item, {
        itemSelectText: '',
        ...userOptions,
      });

      const needsValidation = document.querySelectorAll('.needs-validation');

      needsValidation.forEach((validationItem) => {
        const selectFormValidation = () => {
          validationItem.querySelectorAll('.choices').forEach((choicesItem) => {
            const singleSelect = choicesItem.querySelector(
              '.choices__list--single'
            );
            const multipleSelect = choicesItem.querySelector(
              '.choices__list--multiple'
            );

            if (choicesItem.querySelector('[required]')) {
              if (singleSelect) {
                if (
                  singleSelect
                    .querySelector('.choices__item--selectable')
                    ?.getAttribute('data-value') !== ''
                ) {
                  choicesItem.classList.remove('invalid');
                  choicesItem.classList.add('valid');
                } else {
                  choicesItem.classList.remove('valid');
                  choicesItem.classList.add('invalid');
                }
              }
              //----- for multiple select only ----------
              if (multipleSelect) {
                if (choicesItem.getElementsByTagName('option').length) {
                  choicesItem.classList.remove('invalid');
                  choicesItem.classList.add('valid');
                } else {
                  choicesItem.classList.remove('valid');
                  choicesItem.classList.add('invalid');
                }
              }

              //------ select end ---------------
            }
          });
        };

        validationItem.addEventListener('submit', () => {
          selectFormValidation();
        });

        item.addEventListener('change', () => {
          selectFormValidation();
        });
      });

      return choices;
    });
  }
};

export default choicesInit;
