/* -------------------------------------------------------------------------- */
/*                                 Scrollbars                                 */
/* -------------------------------------------------------------------------- */

const scrollbarInit = () => {
  Array.prototype.forEach.call(
    document.querySelectorAll('.scrollbar-overlay'),
    (el) => new window.SimpleBar(el, { autoHide: true })
  );
};

export default scrollbarInit;
