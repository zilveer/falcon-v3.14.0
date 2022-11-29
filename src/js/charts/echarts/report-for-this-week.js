import utils from "../../utils";
import { getPosition, echartSetOption } from "./echarts-utils";

/* -------------------------------------------------------------------------- */
/*                     Echart Bar Report For This Week                        */
/* -------------------------------------------------------------------------- */

const reportForThisWeekInit = () => {
  const ECHART_BAR_REPORT_FOR_THIS_WEEK = ".echart-bar-report-for-this-week";
  const $echartBarReportForThisWeek = document.querySelector(
    ECHART_BAR_REPORT_FOR_THIS_WEEK
  );

  if ($echartBarReportForThisWeek) {
    const selectChart = utils.getData($echartBarReportForThisWeek, "chart");
    const legendLastWeek = document.getElementById(selectChart?.option1);
    const legendThisWeek = document.getElementById(selectChart?.option2);
  
    const data = [
      ["product", "This Week", "Last Week"],
      ["Sun", 43, 85],
      ["Mon", 83, 73],
      ["Tue", 86, 62],
      ["Wed", 72, 53],
      ["Thu", 80, 50],
      ["Fri", 50, 70],
      ["Sat", 80, 90],
    ];
    const userOptions = utils.getData($echartBarReportForThisWeek, "options");
    const chart = window.echarts.init($echartBarReportForThisWeek);

    const getDefaultOptions = () => ({
      color: [utils.getColors().primary, utils.getGrays()["300"]],
      dataset: { source: data },
      tooltip: {
        trigger: "item",
        padding: [7, 10],
        backgroundColor: utils.getGrays()["100"],
        borderColor: utils.getGrays()["300"],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        formatter: function (params) {
          return `<div class="font-weight-semi-bold">${
            params.seriesName
          }</div><div class="fs--1 text-600"><strong>${params.name}:</strong> ${
            params.value[params.componentIndex + 1]
          }</div>`;
        },
      },
      legend: {
        show: false,
      },
      xAxis: {
        type: "category",
        axisLabel: { color: utils.getGrays()["400"] },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()["300"],
            type: "dashed",
          },
        },
        axisTick: false,
        boundaryGap: true,
      },
      yAxis: {
        axisPointer: { type: "none" },
        axisTick: "none",
        splitLine: {
          lineStyle: {
            color: utils.getGrays()["300"],
            type: "dashed",
          },
        },
        axisLine: { show: false },

        axisLabel: {
          color: utils.getGrays()["400"],
          formatter: (value) => `${value} hr`,
        },
      },
      series: [
        {
          type: "bar",
          name: "",
          barWidth: "12%",
          barGap: "30%",
          label: { normal: { show: false } },
          z: 10,
          itemStyle: {
            normal: {
              barBorderRadius: [10, 10, 0, 0],
              color: utils.getColors().primary,
            },
          },
        },
        {
          type: "bar",
          barWidth: "12%",
          barGap: "30%",
          label: { normal: { show: false } },
          itemStyle: {
            normal: {
              barBorderRadius: [4, 4, 0, 0],
              color: utils.getGrays()[300],
            },
          },
        },
      ],
      grid: { right: "0", left: "40px", bottom: "10%", top: "15%" },
    });

    legendLastWeek && legendLastWeek.addEventListener("click", () => {
      legendLastWeek.classList.toggle("opacity-50");
      chart.dispatchAction({
        type: "legendToggleSelect",
        name: "Last Week",
      });
    });

    legendThisWeek && legendThisWeek.addEventListener("click", () => {
      legendThisWeek.classList.toggle("opacity-50");
      chart.dispatchAction({
        type: "legendToggleSelect",
        name: "This Week",
      });
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default reportForThisWeekInit;
