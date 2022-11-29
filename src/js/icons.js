/* -------------------------------------------------------------------------- */
/*                           Icon copy to clipboard                           */
/* -------------------------------------------------------------------------- */

const iconCopiedInit = () => {
  const iconList = document.getElementById("icon-list");
  const iconCopiedToast = document.getElementById("icon-copied-toast");
  const iconCopiedToastInstance = new window.bootstrap.Toast(iconCopiedToast);

  if (iconList) {
    iconList.addEventListener("click", (e) => {
      const el = e.target;
      if (el.tagName === "INPUT") {
        el.select();
        el.setSelectionRange(0, 99999);
        document.execCommand("copy");
        iconCopiedToast.querySelector(
          ".toast-body"
        ).innerHTML = `<span class="fw-black">Copied:</span> <code>${el.value}</code>`;
        iconCopiedToastInstance.show();
      }
    });
  }
};

export default iconCopiedInit;
