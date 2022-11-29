/* -------------------------------------------------------------------------- */
/*                                    Toast                                   */
/* -------------------------------------------------------------------------- */

const toastInit = () => {
  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  toastElList.map((toastEl) => new window.bootstrap.Toast(toastEl));


  const liveToastBtn = document.getElementById('liveToastBtn');

  if (liveToastBtn) {
    const liveToast = new window.bootstrap.Toast(document.getElementById('liveToast'));

    liveToastBtn.addEventListener('click', () => {
      liveToast && liveToast.show();
    })
  }
};


export default toastInit;
