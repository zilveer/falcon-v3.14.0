const unresolvedTicketsTabInit = () => {
  const dropdownToggle = document.querySelectorAll('.dropdown-toggle-item a')
  const layout = document.querySelector('.table-layout')
  dropdownToggle.forEach(item => {
    item.addEventListener('shown.bs.tab', (e) => {
      layout.innerText = e.target.innerText
    })
  })
}

export default unresolvedTicketsTabInit;