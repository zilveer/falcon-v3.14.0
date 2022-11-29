import utils from '../../utils';

const resizeEcharts = () => {
  const $echarts = document.querySelectorAll('[data-echart-responsive]');
  if (!!$echarts.length) {
    $echarts.forEach(item => {
      if (!!utils.getData(item, 'echart-responsive')) {
        if (
          !(
            item.closest('.tab-pane') &&
            window.getComputedStyle(item.closest('.tab-pane')).display === 'none'
          )
        ) {
          window.echarts.init(item).resize();
        }
      }
    });
  }
};

utils.resize(() => resizeEcharts());

const navbarVerticalToggle = document.querySelector('.navbar-vertical-toggle');
navbarVerticalToggle &&
  navbarVerticalToggle.addEventListener('navbar.vertical.toggle', () => resizeEcharts());

const echartTabs = document.querySelectorAll('[data-tab-has-echarts]');
echartTabs &&
  echartTabs.forEach(tab => {
    tab.addEventListener('shown.bs.tab', e => {
      const el = e.target;
      const { hash } = el;
      const id = hash ? hash : el.dataset.bsTarget;
      const content = document.getElementById(id.substring(1));
      const chart = content?.querySelector('[data-echart-tab]');
      chart && window.echarts.init(chart).resize();
    });
  });
