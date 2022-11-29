import utils from '../../utils';
import { echartSetOption, getPosition } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Market Share                                */
/* -------------------------------------------------------------------------- */

const assignmentScoresInit = () => {
  const $echartAssignmentScores = document.querySelector(
    '.echart-assignment-scores'
  );

  if ($echartAssignmentScores) {
    const userOptions = utils.getData($echartAssignmentScores, 'options');
    const chart = window.echarts.init($echartAssignmentScores);

    const data = [
      { value: 12, name: '90-100%' },
      { value: 16, name: '70-90%' },
      { value: 12, name: '40-70%' },
      { value: 2, name: '0-40%' },
    ];

    const getDefaultOptions = () => ({
      color: [
        utils.getColors().success,
        utils.getColors().primary,
        utils.getColors().info,
        utils.getColors().warning,
      ],
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()['300'],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        formatter(params) {
          return `<strong>${params.data.name}:</strong> ${params.data.value} courses`;
        },
      },
      position(pos, params, dom, rect, size) {
        return getPosition(pos, params, dom, rect, size);
      },
      legend: { show: false },
      series: [
        {
          type: 'pie',
          radius: ['85%', '60%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          itemStyle: {
            borderWidth: 2,
            borderColor: utils.getColor('gray-100'),
          },
          label: {
            normal: {
              show: false,
              position: 'center',
              textStyle: {
                fontSize: '20',
                fontWeight: '500',
                color: utils.getGrays()['700'],
              },
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: { normal: { show: false } },
          data,
        },
      ],
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default assignmentScoresInit;
