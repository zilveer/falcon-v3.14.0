import utils from "../../utils";
import { getPosition, echartSetOption } from "./echarts-utils";

/* -------------------------------------------------------------------------- */
/*                             Echarts Total Sales                            */
/* -------------------------------------------------------------------------- */

const totalSalesInit = () => {
  const ECHART_LINE_TOTAL_SALES = ".echart-line-total-sales";
  const SELECT_MONTH = ".select-month";

  const $echartsLineTotalSales = document.querySelector(
    ECHART_LINE_TOTAL_SALES
  );
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function getFormatter(params) {
    const { name, value } = params[0];
    var date = new Date(name);
    return `${months[0]} ${date.getDate()}, ${value}`;
  }
  if ($echartsLineTotalSales) {
    // Get options from data attribute
    const userOptions = utils.getData($echartsLineTotalSales, "options");
    const chart = window.echarts.init($echartsLineTotalSales);
    const monthsnumber = [
      [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70],
      [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50],
      [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60],
      [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80],
      [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50],
      [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70],
      [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50],
      [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110],
      [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70],
      [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110],
      [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70],
      [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70],
    ];
    const getDefaultOptions = () => ({
      color: utils.getGrays()['100'],
      tooltip: {
        trigger: "axis",
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()["300"],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        formatter(params) {
          return getFormatter(params);
        },
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
      },
      xAxis: {
        type: "category",
        data: [
          "2019-01-05",
          "2019-01-06",
          "2019-01-07",
          "2019-01-08",
          "2019-01-09",
          "2019-01-10",
          "2019-01-11",
          "2019-01-12",
          "2019-01-13",
          "2019-01-14",
          "2019-01-15",
          "2019-01-16",
        ],
        boundaryGap: false,
        axisPointer: {
          lineStyle: {
            color: utils.getGrays()["300"],
            type: "dashed",
          },
        },
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            // color: utils.getGrays()['300'],
            color: utils.rgbaColor("#000", 0.01),
            type: "dashed",
          },
        },
        axisTick: { show: false },
        axisLabel: {
          color: utils.getGrays()["400"],
          formatter: function (value) {
            var date = new Date(value);
            return `${months[date.getMonth()]} ${date.getDate()}`;
          },
          margin: 15,
        },
      },
      yAxis: {
        type: "value",
        axisPointer: { show: false },
        splitLine: {
          lineStyle: {
            color: utils.getGrays()["300"],
            type: "dashed",
          },
        },
        boundaryGap: false,
        axisLabel: {
          show: true,
          color: utils.getGrays()["400"],
          margin: 15,
        },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      series: [
        {
          type: "line",
          data: monthsnumber[0],
          lineStyle: { color: utils.getColors().primary },
          itemStyle: {
            borderColor: utils.getColors().primary,
            borderWidth: 2,
          },
          symbol: "circle",
          symbolSize: 10,
          smooth: false,
          hoverAnimation: true,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: utils.rgbaColor(utils.getColors().primary, 0.2),
                },
                {
                  offset: 1,
                  color: utils.rgbaColor(utils.getColors().primary, 0),
                },
              ],
            },
          },
        },
      ],
      grid: { right: "28px", left: "40px", bottom: "15%", top: "5%" },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);

    // Change chart options accordiong to the selected month
    const monthSelect = document.querySelector(SELECT_MONTH);

    if (monthSelect) {

      monthSelect.addEventListener("change", (e) => {
        const month = e.currentTarget.value;
        const data = monthsnumber[month];

        chart.setOption({
          tooltip: {
            formatter: function (params) {
              const { name, value } = params[0];
              var date = new Date(name);
              return `${months[month]} ${date.getDate()}, ${value}`;
            },
          },
          xAxis: {
            axisLabel: {
              formatter: function (value) {
                var date = new Date(value);
                return `${months[month]} ${date.getDate()}`;
              },
              margin: 15,
            },
          },
          series: [{ data }],
        });
      });
    }
  }
};

export default totalSalesInit;
