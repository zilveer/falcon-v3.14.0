/* -------------------------------------------------------------------------- */
/*                                   Tooltip                                  */
/* -------------------------------------------------------------------------- */
const tooltipInit = () => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

  tooltipTriggerList.map(
    (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl,{
      trigger:'hover'
    })
  );
};

export default tooltipInit;
