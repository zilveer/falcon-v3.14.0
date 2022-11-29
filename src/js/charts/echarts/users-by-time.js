import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Users By Time                          */
/* -------------------------------------------------------------------------- */

const usersByTimeChartInit = () => {
  const $echartUsersByTimeChart = document.querySelector(
    '.echart-users-by-time'
  );

  const hours = [
    '12 AM',
    '1 AM',
    '2 AM',
    '3 AM',
    '4 AM',
    '5 AM',
    '6 AM',
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM',
    '8 PM',
    '9 PM',
    '10 PM',
    '11 PM',
  ];

  const data = [];
  for (let i = 0; i < 24; i += 1) {
    for (let j = 0; j < 7; j += 1) {
      data.push([j, i, utils.getRandomNumber(20, 300)]);
    }
  }

  const tooltipFormatter = params => {
    return `<div>
          <p class='mb-0 text-600'>${window
            .dayjs(params.name)
            .format('MMM DD, YYYY')}</p>
          <div class="d-flex align-items-center">
            <p class="mb-0 text-600">
              ${window
                .dayjs()
                .hour(params.data[1])
                .format('hA')} : <span class='text-800 fw-semi-bold'>${
      params.data[2]
    }</span>
            </p>
          </div>
        </div>`;
  };

  if ($echartUsersByTimeChart) {
    const userOptions = utils.getData($echartUsersByTimeChart, 'options');
    const chart = window.echarts.init($echartUsersByTimeChart);

    const getDefaultOptions = () => ({
      gradientColor: [utils.getColor('info'), utils.getColor('primary')],
      tooltip: {
        position: 'top',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        formatter: tooltipFormatter,
      },
      xAxis: {
        type: 'category',
        data: utils.getPastDates(7),
        splitArea: {
          show: true,
        },
        axisTick: { show: false },
        axisLabel: {
          color: utils.getGrays()['600'],
          formatter: value => window.dayjs(value).format('ddd'),
        },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['400'],
          },
        },
      },
      yAxis: {
        position: 'right',
        type: 'category',
        inverse: true,
        data: hours,
        splitArea: {
          show: true,
        },
        axisTick: { show: false },
        axisLabel: {
          color: utils.getGrays()['600'],
          margin: 20,
          padding: [10, 0, 0, 0],
        },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['400'],
          },
        },
      },
      visualMap: {
        type: 'piecewise',
        orient: 'horizontal',
        left: 'left',
        bottom: '3%',
        itemSymbol: 'diamond',
        itemWidth: '10px',
        itemHeight: '10px',
        min: 20,
        max: 300,
        splitNumber: 4,
        textGap: 5,
        textStyle: {
          color: utils.getGrays()['600'],
          fontWeight: 500,
        },
      },
      series: [
        {
          name: 'Users By Time',
          type: 'heatmap',
          data: data,
          label: {
            show: false,
          },
          itemStyle: {
            borderColor: utils.getColor('white'),
            borderWidth: 3,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 3,
              shadowColor: utils.rgbaColor(utils.getGrays()['black'], 0.5),
            },
          },
        },
      ],
      grid: { right: '60px', left: '0px', bottom: '20%', top: '0%' },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default usersByTimeChartInit;
