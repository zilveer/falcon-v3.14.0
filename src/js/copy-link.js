import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                  Copy LinK                                 */
/* -------------------------------------------------------------------------- */

const copyLink = () => {
  const copyLinkModal = document.getElementById('copyLinkModal');
  copyLinkModal &&
    copyLinkModal.addEventListener('shown.bs.modal', () => {
      const invitationLink = document.querySelector('.invitation-link');
      invitationLink.select();
    });

  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons &&
    copyButtons.forEach((button) => {
      const tooltip = new window.bootstrap.Tooltip(button);

      button.addEventListener('mouseover', () => tooltip.show());
      button.addEventListener('mouseleave', () => tooltip.hide());

      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const el = e.target;
        el.setAttribute('data-original-title', 'Copied');
        tooltip.show();
        el.setAttribute('data-original-title', 'Copy to clipboard');
        tooltip.update();
        const inputID = utils.getData(el, 'copy');
        const input = document.querySelector(inputID);
        input.select();
        document.execCommand('copy');
      });
    });
};

export default copyLink;
