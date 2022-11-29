import utils from '../../utils';
import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                          Echarts Sales Pos Location                        */
/* -------------------------------------------------------------------------- */

const salesByPosLocationInit = () => {
  const ECHART_RADAR_SALES_BY_POS_LOCATION = '.echart-radar-sales-by-pos-location';

  const $echartsRadarSalesByPosLocation = document.querySelector(
    ECHART_RADAR_SALES_BY_POS_LOCATION
  );
  function getformatter(params) {
    //const indicators = ['Marketing','Sales', 'Dev', 'Support', 'Tech', 'Admin']
    return `<strong > ${params.name} </strong>
    <div class="fs--1 text-600">
      <strong >Marketing</strong>: ${params.value[0]}  <br>
      <strong>Sales</strong>: ${params.value[1]}  <br>
      <strong>Dev</strong>: ${params.value[2]}  <br>
      <strong>Support</strong>: ${params.value[3]}  <br>
      <strong>Tech</strong>: ${params.value[4]}  <br>
      <strong>Admin</strong>: ${params.value[5]}  <br>
    </div>`;
  }

  if ($echartsRadarSalesByPosLocation) {
    // Get options from data attribute
    const userOptions = utils.getData($echartsRadarSalesByPosLocation, 'options');
    const chart = window.echarts.init($echartsRadarSalesByPosLocation);
    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getColor('gray-100'),
        borderColor: utils.getColor('gray-300'),
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter: getformatter
      },
      radar: {
        splitNumber: 7,
        radius: '75%',
        axisLine: {
          show: true,
          symbol: 'circle',
          symbolSize: [13, 13],
          lineStyle: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0.7,
                  color: utils.getColor('gray-100')
                },
                {
                  offset: 1,
                  color: utils.getColor('gray-400')
                }
              ]
            }
          }
        },
        splitArea: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: utils.getColor('gray-300')
          }
        },
        name: {
          textStyle: {
            color: utils.getColor('gray-600'),
            fontWeight: 500
          }
        },
        indicator: [
          { name: 'Marketing', max: 70 },
          { name: 'Admin', max: 70 },
          { name: 'Tech', max: 70 },
          { name: 'Support', max: 70 },
          { name: 'Dev', max: 70 },
          { name: 'Sales', max: 70 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          symbol: 'pin',
          data: [
            {
              value: [20, 50, 60, 50, 60, 60],
              name: 'Budget',
              itemStyle: {
                color: utils.rgbaColor(utils.getColors().warning, 0.5)
              },
              areaStyle: {
                color: utils.rgbaColor(utils.getColors().warning, 0.24)
              },
              symbol: 'circle',
              symbolSize: 8
            },
            {
              value: [40, 60, 30, 15, 60, 35],
              name: 'Spending',
              areaStyle: {
                color: [utils.rgbaColor(utils.getColors().primary, 0.24)]
              },
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                color: utils.rgbaColor(utils.getColors().primary)
              }
            }
          ]
        }
      ],
      grid: {
        top: 0,
        bottom: '100px'
      }
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default salesByPosLocationInit;
