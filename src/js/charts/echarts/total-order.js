import utils from '../../utils';
import { getPosition, echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                                Total Order                                 */
/* -------------------------------------------------------------------------- */

const totalOrderInit = () => {
	const ECHART_LINE_TOTAL_ORDER = '.echart-line-total-order';

	//
	// ─── TOTAL ORDER CHART ──────────────────────────────────────────────────────────
	//
	const $echartLineTotalOrder = document.querySelector(ECHART_LINE_TOTAL_ORDER);
	if ($echartLineTotalOrder) {
		// Get options from data attribute
		const userOptions = utils.getData($echartLineTotalOrder, 'options');
		const chart = window.echarts.init($echartLineTotalOrder);

		// Default options
		const getDefaultOptions = () => ({
			tooltip: {
				triggerOn: 'mousemove',
				trigger: 'axis',
				padding: [7, 10],
				formatter: '{b0}: {c0}',
				backgroundColor: utils.getGrays()['100'],
				borderColor: utils.getGrays()['300'],
				textStyle: { color: utils.getColors().dark },
				borderWidth: 1,
				transitionDuration: 0,
				position(pos, params, dom, rect, size) {
					return getPosition(pos, params, dom, rect, size);
				}
			},
			xAxis: {
				type: 'category',
				data: ['Week 4', 'Week 5', 'Week 6', 'Week 7'],
				boundaryGap: false,
				splitLine: { show: false },
				axisLine: {
					show: false,
					lineStyle: {
						color: utils.getGrays()['300'],
						type: 'dashed'
					}
				},
				axisLabel: { show: false },
				axisTick: { show: false },
				axisPointer: { type: 'none' }
			},
			yAxis: {
				type: 'value',
				splitLine: { show: false },
				axisLine: { show: false },
				axisLabel: { show: false },
				axisTick: { show: false },
				axisPointer: { show: false }
			},
			series: [
				{
					type: 'line',
					lineStyle: {
						color: utils.getColors().primary,
						width: 3
					},
					itemStyle: {
						color: utils.getGrays().white,
						borderColor: utils.getColors().primary,
						borderWidth: 2
					},
					hoverAnimation: true,
					data: [20, 40, 100, 120],
					// connectNulls: true,
					smooth: 0.6,
					smoothMonotone: 'x',
					showSymbol: false,
					symbol: 'circle',
					symbolSize: 8,
					areaStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [
								{
									offset: 0,
									color: utils.rgbaColor(utils.getColors().primary, 0.25)
								},
								{
									offset: 1,
									color: utils.rgbaColor(utils.getColors().primary, 0)
								}
							]
						}
					}
				}
			],
			grid: {
				bottom: '2%',
				top: '0%',
				right: '10px',
				left: '10px'
			}
		});

		echartSetOption(chart, userOptions, getDefaultOptions);
	}
};

export default totalOrderInit;
