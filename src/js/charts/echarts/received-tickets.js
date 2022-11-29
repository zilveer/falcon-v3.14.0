import utils from '../../utils';
import { echartSetOption } from './echarts-utils';


const echartsReceivedTicketsInit = () => {
  const $receivedTickets = document.querySelector('.echart-received-tickets');

  if ($receivedTickets) {
    const userOptions = utils.getData($receivedTickets, 'options');
    const chart = window.echarts.init($receivedTickets);

    let xAxisData = ["Apr 01", "Apr 02", "Apr 03", "Apr 04", "Apr 05", "Apr 06", "Apr 07", "Apr 08", "Apr 09", "Apr 10"];
    let data1 = [28, 35, 28, 25, 21, 32, 25, 30, 23, 37];
    let data2 = [20, 27, 21, 15, 17, 22, 18, 20, 15, 27];
    let data3 = [15, 21, 23, 21, 12, 14, 13, 15, 10, 19];

    const emphasisStyle = {
      itemStyle: {
        shadowColor: utils.rgbaColor(utils.getColor('dark'), 0.3)
      }
    };

    const getDefaultOptions = () => ({
      color: [
        utils.getColor('primary'),
        utils.getColor('info'),
        utils.getGrays()['300']
      ],
      legend: {
        data: ['All Received Tickets', 'New Received Tickets', 'Total Received Load Tickets'],
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        padding: [0, 0, 0, 0],
        textStyle: {
          color: utils.getGrays()['700'],
          fontWeight: "500",
          fontSize: "13px"
        },
        left: 0,
        itemGap: 16,
      },
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
          name: 'All Received Tickets',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle,
          data: data1
        },
        {
          name: 'New Received Tickets',
          type: 'bar',
          stack: 'two',
          emphasis: emphasisStyle,
          data: data2,
        },
        {
          name: 'Total Received Load Tickets',
          type: 'bar',
          stack: 'three',
          emphasis: emphasisStyle,
          data: data3,
        },
      ],
      itemStyle: {
        borderRadius: [3, 3, 0, 0]
      },

      barWidth: "13.03px",
      grid: {
        top: '13%',
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default echartsReceivedTicketsInit;
