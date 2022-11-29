import basicEchartsInit from "./basic-echarts"

const echartTicketPriority = () => {
  const $paginationBtnNext = document.querySelector('[data-list-pagination-chart="next"]')
  const $paginationBtnPrev = document.querySelector('[data-list-pagination-chart="prev"]')
  const $paginationContainer = document.querySelector('[data-list-pagination-chart]')
  if ($paginationBtnNext) {
    $paginationBtnNext.addEventListener("click", () => {
      basicEchartsInit()
    })
  }
  if ($paginationBtnPrev) {
    $paginationBtnPrev.addEventListener("click", () => {
      basicEchartsInit()
    })
  }
  if ($paginationContainer) {
    $paginationContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        console.log(e.target)
        setTimeout(() => {
          basicEchartsInit()
        })
      }
    })
  }
}

export default echartTicketPriority;