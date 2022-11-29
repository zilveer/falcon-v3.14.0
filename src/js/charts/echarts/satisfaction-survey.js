import utils from '../../utils';
import { echartSetOption } from './echarts-utils';


const echartsSatisfactionSurveyInit = () => {
  const $satisfactionSurvey = document.querySelector('.echart-satisfaction-survey');

  if ($satisfactionSurvey) {
    const userOptions = utils.getData($satisfactionSurvey, 'options');
    const chart = window.echarts.init($satisfactionSurvey);

    let xAxisData = ["05 April", "06 April", "07 April", "08 April", "09 April", "10 April", "11 April", "12 April", "13 April", "14 April", "15 April"];
    let data1 = [98, 105, 65, 110, 75, 55, 95, 75, 90, 45, 70];
    let data2 = [80, 60, 78, 58, 65, 65, 75, 110, 40, 60, 60];

    const emphasisStyle1 = {
      itemStyle: {
        shadowColor: utils.rgbaColor(utils.getColor('dark'), 0.3),
        color: utils.rgbaColor(utils.getColor('primary'), 0.8)
      }
    };
    const emphasisStyle2 = {
      itemStyle: {
        shadowColor: utils.rgbaColor(utils.getColor('dark'), 0.3),
        color: utils.getGrays()['300']
      }
    };

    const getDefaultOptions = () => ({
      color: [
        utils.getColor('primary'),
        utils.getGrays()['200']
      ],
      legend: {
        data: ['Satisfied', 'Dissatisfied'],
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
          name: 'Satisfied',
          type: 'bar',
          stack: 'one',
          emphasis: emphasisStyle1,
          data: data1
        },
        {
          name: 'Dissatisfied',
          type: 'bar',
          stack: 'two',
          emphasis: emphasisStyle2,
          data: data2,
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

export default echartsSatisfactionSurveyInit;
