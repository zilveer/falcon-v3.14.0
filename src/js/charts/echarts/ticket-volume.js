import utils from '../../utils';
import { getPosition, echartSetOption, tooltipFormatter } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Traffic Channels                           */
/* -------------------------------------------------------------------------- */

const ticketVolumeChartInit = () => {
  const $ticketVolume = document.querySelector('.echart-ticket-volume');

  if ($ticketVolume) {
    const userOptions = utils.getData($ticketVolume, 'options');
    const chart = window.echarts.init($ticketVolume);
    const ticketVolumeLegend = document.querySelectorAll("[data-ticket-volume]")

    const getDefaultOptions = () => ({
      color: [
        utils.getColors().primary,
        localStorage.getItem('theme') === 'dark' ? '#235FAD' : '#6AA2EC',
        localStorage.getItem('theme') === 'dark' ? '#1C4477' : '#AACAF4',
        localStorage.getItem('theme') === 'dark' ? '#152C48' : '#DFEBFB',
      ],
      legend: {
        data: ['On Hold Tickets', 'Open Tickets', 'Due Tickets', 'Unassigned Tickets'],
        show: false
      },
      xAxis: {
        type: 'category',
        data: utils.getPastDates(10),
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['300']
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: utils.getGrays()['600'],
          formatter: value => window.dayjs(value).format('MMM DD'),
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: utils.getGrays()['300']
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          color: utils.getGrays()['600'],
        }
      },
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        axisPointer: {
          type: 'none'
        },
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        formatter: tooltipFormatter
      },

      series: [
        {
          name: 'On Hold Tickets',
          type: 'bar',
          stack: 'total',
          data: [8, 6, 5, 12, 9, 6, 9, 6, 4, 7],
          emphasis:{ 
            itemStyle: {
              color: utils.getColor('primary'),
            }
          },
        },
        {
          name: 'Open Tickets',
          type: 'bar',
          stack: 'total',
          data: [15, 10, 7, 7, 5, 6, 15, 10, 7, 12],
          emphasis:{ 
            itemStyle: {
              color: localStorage.getItem('theme') === 'dark' ? '#2567BD' : '#5595E9',
            }
          },
        },
        {
          name: 'Due Tickets',
          type: 'bar',
          stack: 'total',
          data: [5, 4, 4, 6, 6, 8, 7, 4, 3, 5],
          emphasis:{ 
            itemStyle: {
              color: localStorage.getItem('theme') === 'dark' ? '#205396' : '#7FB0EF',
            }
          },
        },
        {
          name: 'Unassigned Tickets',
          type: 'bar',
          stack: 'total',
          data: [6, 3, 6, 4, 12, 7, 5, 3, 2, 4],
          itemStyle: {
            barBorderRadius: [2, 2, 0, 0]
          },
          emphasis:{ 
            itemStyle: {
              color: localStorage.getItem('theme') === 'dark' ? '#1A3F6F' : '#AACAF4',
            }
          },
        },
      ],

      grid: {
        right: '0px',
        left: '23px',
        bottom: '6%',
        top: '10%'
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    ticketVolumeLegend.forEach(el => {
      el.addEventListener('change', () => {
        chart.dispatchAction({
          type: 'legendToggleSelect',
          name: utils.getData(el, 'ticket-volume')
          })
      })
    })

  }
};

export default ticketVolumeChartInit;
