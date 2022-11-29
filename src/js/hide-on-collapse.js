const hideOnCollapseInit = () => {

  const previewMailForm = document.querySelector('#previewMailForm')
  const previewFooter = document.querySelector('#preview-footer')
  if (previewMailForm) {
    previewMailForm.addEventListener("show.bs.collapse", () => {
      previewFooter.classList.add("d-none");
    })
  }

}

export default hideOnCollapseInit;