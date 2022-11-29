/* eslint-disable */
const getPosition = (pos, params, dom, rect, size) => ({
  top: pos[1] - size.contentSize[1] - 10,
  left: pos[0] - size.contentSize[0] / 2
});

const echartSetOption = (chart, userOptions, getDefaultOptions) => {
  const themeController = document.body;
  // Merge user options with lodash
  chart.setOption(window._.merge(getDefaultOptions(), userOptions));

  themeController.addEventListener('clickControl', ({ detail: { control } }) => {
    if (control === 'theme') {
      chart.setOption(window._.merge(getDefaultOptions(), userOptions));
    }
  });
};

const tooltipFormatter = params => {
  let tooltipItem = ``;
  params.forEach(el => {
    tooltipItem =
      tooltipItem +
      `<div class='ms-1'>
        <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:${el.borderColor ? el.borderColor : el.color
      }"></span>
          ${el.seriesName} : ${typeof el.value === 'object' ? el.value[1] : el.value}
        </h6>
      </div>`;
  });
  return `<div>
            <p class='mb-2 text-600'>
              ${window.dayjs(params[0].axisValue).isValid()
      ? window.dayjs(params[0].axisValue).format('MMMM DD')
      : params[0].axisValue
    }
            </p>
            ${tooltipItem}
          </div>`;
};

export default { getPosition, echartSetOption, tooltipFormatter };
