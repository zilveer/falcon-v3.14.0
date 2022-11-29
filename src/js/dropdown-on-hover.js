/* -------------------------------------------------------------------------- */
/*                           Open dropdown on hover                           */
/* -------------------------------------------------------------------------- */

const dropdownOnHover = () => {
  const navbarArea = document.querySelector("[data-top-nav-dropdowns]");

  if (navbarArea) {
    navbarArea.addEventListener("mouseover", (e) => {
      if (
        e.target.className.includes("dropdown-toggle") &&
        window.innerWidth > 992
      ) {
        const dropdownInstance = new window.bootstrap.Dropdown(e.target);
        
        /* eslint-disable no-underscore-dangle */
        dropdownInstance._element.classList.add('show')
        dropdownInstance._menu.classList.add('show')
        dropdownInstance._menu.setAttribute('data-bs-popper', 'none')
        
        e.target.parentNode.addEventListener("mouseleave", () => {
          dropdownInstance.hide();
        });
      }
    });
  }
};

export default dropdownOnHover;
