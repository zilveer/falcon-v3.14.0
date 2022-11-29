/* -------------------------------------------------------------------------- */
/*                                 Glightbox                                */
/* -------------------------------------------------------------------------- */

const glightboxInit = () => {
  if (window.GLightbox) {
    window.GLightbox({
      selector: '[data-gallery]',
    });
  }
};
export default glightboxInit;
