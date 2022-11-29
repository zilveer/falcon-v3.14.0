/* -------------------------------------------------------------------------- */
/*                                 Scrollbars                                 */
/* -------------------------------------------------------------------------- */
// import utils from './utils';

const scrollInit = () => {
	const dropdownElements = Array.from(document.querySelectorAll('[data-hide-on-body-scroll]'));

	if (window.innerWidth < 1200) {
		window.addEventListener('scroll', () => {
			dropdownElements.forEach(dropdownElement => {
				const instanceEl = window.bootstrap.Dropdown.getInstance(dropdownElement);
				instanceEl && instanceEl.hide();
			});
		});
	}
};
export default scrollInit;
