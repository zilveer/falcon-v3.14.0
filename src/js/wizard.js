/* -------------------------------------------------------------------------- */
/*                                 step wizard                                */
/* -------------------------------------------------------------------------- */
const wizardInit = () => {
  const wizards = document.querySelectorAll('.theme-wizard');

  const tabPillEl = document.querySelectorAll(
    '#pill-tab2 [data-bs-toggle="pill"]'
  );
  const tabProgressBar = document.querySelector('.theme-wizard .progress');

  wizards.forEach(wizard => {
    let tabToggleButtonEl = wizard.querySelectorAll('[data-wizard-step]');
    let inputEmail = wizard.querySelector('[data-wizard-validate-email]');
    let emailPattern = inputEmail.getAttribute('pattern');
    let inputPassword = wizard.querySelector('[data-wizard-validate-password]');
    let inputConfirmPassword = wizard.querySelector(
      '[data-wizard-validate-confirm-password]'
    );
    let form = wizard.querySelector('[novalidate]');
    let nextButton = wizard.querySelector('.next button');
    let prevButton = wizard.querySelector('.previous button');
    let cardFooter = wizard.querySelector('.theme-wizard .card-footer');
    let count = 0;

    const validatePattern = (pattern, value) => {
      const regexPattern = new RegExp(pattern);
      return regexPattern.test(String(value).toLowerCase());
    };

    prevButton.classList.add('d-none');

    // on button click tab change
    nextButton.addEventListener('click', () => {
      if (
        (!(
          inputEmail.value && validatePattern(emailPattern, inputEmail.value)
        ) ||
          !inputPassword.value ||
          !inputConfirmPassword.value) &&
        form.className.includes('needs-validation')
      ) {
        form.classList.add('was-validated');
      } else {
        count = count + 1;
        const tab = new window.bootstrap.Tab(tabToggleButtonEl[count]);
        tab.show();
      }
    });

    prevButton.addEventListener('click', () => {
      count = count - 1;
      const tab = new window.bootstrap.Tab(tabToggleButtonEl[count]);
      tab.show();
    });
    if (tabToggleButtonEl.length) {
      tabToggleButtonEl.forEach((item, index) => {
        /* eslint-disable */

        item.addEventListener('shown.bs.tab', e => {
          if (
            (!(
              inputEmail.value &&
              validatePattern(emailPattern, inputEmail.value)
            ) ||
              !inputPassword.value ||
              !inputConfirmPassword.value) &&
            form.className.includes('needs-validation')
          ) {
            e.preventDefault();
            form.classList.add('was-validated');
            return null;
            /* eslint-enable */
          }
          count = index;
          // can't go back tab
          if (count === tabToggleButtonEl.length - 1) {
            tabToggleButtonEl.forEach(tab => {
              tab.setAttribute('data-bs-toggle', 'modal');
              tab.setAttribute('data-bs-target', '#error-modal');
            });
          }
          //add done class
          for (let i = 0; i < count; i = i + 1) {
            tabToggleButtonEl[i].classList.add('done');
          }
          //remove done class
          for (let j = count; j < tabToggleButtonEl.length; j = j + 1) {
            tabToggleButtonEl[j].classList.remove('done');
          }
          // card footer remove at last step
          if (count > tabToggleButtonEl.length - 2) {
            item.classList.add('done');
            cardFooter.classList.add('d-none');
          } else {
            cardFooter.classList.remove('d-none');
          }
          // prev-button removing
          if (count > 0) {
            prevButton.classList.remove('d-none');
          } else {
            prevButton.classList.add('d-none');
          }
        });
      });
    }
  });

  // control wizard progressbar
  if (tabPillEl.length) {
    const dividedProgressbar = 100 / tabPillEl.length;
    tabProgressBar.querySelector('.progress-bar').style.width =
      dividedProgressbar + '%';

    tabPillEl.forEach((item, index) => {
      item.addEventListener('shown.bs.tab', () => {
        tabProgressBar.querySelector('.progress-bar').style.width =
          dividedProgressbar * (index + 1) + '%';
      });
    });
  }
};

export default wizardInit;
