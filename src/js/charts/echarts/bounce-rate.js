import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Bounce Rate                            */
/* -------------------------------------------------------------------------- */

const bounceRateChartInit = () => {
  const $echartsBounceRateChart = document.querySelector('.echart-bounce-rate');

  const tooltipFormatter = params => {
    return `<div>
          <p class='mb-0 text-600'>${window
            .dayjs(params[0].axisValue)
            .format('DD, MMMM')}</p>
          <div class="d-flex align-items-center">
            <p class="mb-0 text-600">
              Rate : <span class='text-800'>${params[0].value}%</span>
            </p>
          </div>
        </div>`;
  };

  const dataset = {
    week: [41, 45, 37, 44, 35, 39, 43],
    month: [
      40, 37, 42, 44, 36, 39, 37, 43, 38, 35, 43, 39, 42, 36, 37, 36, 42, 44,
      34, 41, 37, 41, 40, 40, 43, 34, 41, 35, 44, 41, 40,
    ],
  };

  if ($echartsBounceRateChart) {
    const userOptions = utils.getData($echartsBounceRateChart, 'options');
    const chart = window.echarts.init($echartsBounceRateChart);

    const getDefaultOptions = () => ({
      color: utils.getGrays().white,
      title: {
        text: 'Bounce Rate',
        padding: [5, 0, 0, 0],
        textStyle: {
          color: utils.getGrays()['900'],
          fontSize: 13,
          fontWeight: 600,
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
        },
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        formatter: tooltipFormatter,
      },
      xAxis: {
        type: 'category',
        data: utils
          .getPastDates(30)
          .map(date => window.dayjs(date).format('DD MMM, YYYY')),
        axisPointer: {
          lineStyle: {
            color: utils.getGrays()['300'],
          },
        },
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['400'],
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: utils.getGrays()['600'],
          formatter: value => window.dayjs(value).format('MMM DD'),
          fontSize: 11,
        },
      },
      yAxis: {
        type: 'value',
        axisPointer: { show: false },
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['200'],
          },
        },
        axisLabel: {
          show: true,
          color: utils.getGrays()['600'],
          formatter: value => `${value}%`,
          margin: 15,
        },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      series: [
        {
          type: 'line',
          data: [
            40, 37, 42, 44, 36, 39, 37, 43, 38, 35, 43, 39, 42, 36, 37, 36, 42,
            44, 34, 41, 37, 41, 40, 40, 43, 34, 41, 35, 44, 41, 40,
          ],
          showSymbol: false,
          symbol: 'circle',
          itemStyle: {
            borderColor: utils.getColors().primary,
            borderWidth: 2,
          },
          lineStyle: {
            color: utils.getColor('primary'),
          },
          symbolSize: 2,
        },
      ],
      grid: { right: '10px', left: '40px', bottom: '10%', top: '13%' },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    const selectMenu = document.querySelector(
      "[data-target='.echart-bounce-rate']"
    );

    if (selectMenu) {
      selectMenu.addEventListener('change', e => {
        const value = e.currentTarget.value;
        chart.setOption({
          xAxis: {
            data: utils
              .getPastDates(value)
              .map(date => window.dayjs(date).format('DD MMM, YYYY')),
          },
          series: [{ data: dataset[value] }],
        });
      });
    }
  }
};

export default bounceRateChartInit;
