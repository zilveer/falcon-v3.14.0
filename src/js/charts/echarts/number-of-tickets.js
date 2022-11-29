import utils from '../../utils';
import { echartSetOption } from './echarts-utils';


const echartsNumberOfTicketsInit = () => {
  const $numberOfTickets = document.querySelector('.echart-number-of-tickets');

  if ($numberOfTickets) {
    const userOptions = utils.getData($numberOfTickets, 'options');
    const chart = window.echarts.init($numberOfTickets);
    const numberOfTicketsLegend = document.querySelectorAll("[data-number-of-tickets]")

    let xAxisData = ["Mar 01", "Mar 02", "Mar 03", "Mar 04", "Mar 05", "Mar 06"];
    let data1 = [45, 35, 55, 55, 55, 45];
    let data2 = [58, 42, 65, 65, 65, 30];
    let data3 = [38, 25, 42, 42, 42, 45];
    let data4 = [62, 45, 75, 75, 75, 55];

    const emphasisStyle = {
      itemStyle: {
        shadowColor: utils.rgbaColor(utils.getColor('dark'), 0.3),
        borderRadius: [5, 5, 5, 5]
      }
    };

    const getDefaultOptions = () => ({
      color: [
        utils.getColor('primary'),
        localStorage.getItem('theme') === 'dark' ? '#1E4C88' : '#94BCF1',
        localStorage.getItem('theme') === 'dark' ? '#1A3A64' : '#C0D8F7',
        localStorage.getItem('theme') === 'dark' ? '#225FAE' : '#6AA3ED',
      ],
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getGrays()['900']},
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        }
      },
      legend: {
        data: ['On Hold Tickets', 'Open Tickets', 'Due Tickets', 'Unassigned Tickets'],
        show: false
      },
      xAxis: {
        data: xAxisData,
        splitLine: { show: false, },
        splitArea: { show: false, },

        axisLabel: {
          color: utils.getGrays()['600'],
        },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: "dashed"
          }
        },
        axisTick: {
          show: false,
        }
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['300'],
            type: "dashed"
          }
        },
        axisLabel: {
          color: utils.getGrays()['600'],
        },
      },
      series: [
        {
          name: 'On Hold Tickets',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data1,
        },
        {
          name: 'Open Tickets',
          type: 'bar',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data2
        },
        {
          name: 'Due Tickets',
          type: 'bar',
          stack: 'three',
          emphasis: emphasisStyle,
          data: data3
        },
        {
          name: 'Unassigned Tickets',
          type: 'bar',
          stack: 'four',
          emphasis: emphasisStyle,
          data: data4
        },
      ],
      itemStyle: {
        borderRadius: [3, 3, 0, 0]
      },

      barWidth: "12px",
      grid: {
        top: '10%',
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    numberOfTicketsLegend.forEach(el => {
      el.addEventListener('change', () => {
        chart.dispatchAction({
          type: 'legendToggleSelect',
          name: utils.getData(el, 'number-of-tickets')
          })
      })
    })

  }
};

export default echartsNumberOfTicketsInit;
