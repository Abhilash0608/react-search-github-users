import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ExampleChart = ({ data }) => {
  const chartConfigs = {
    type: "column2d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Number of People using languages",
        subCaption: "Usage of Language ",
        xAxisName: "Language",
        yAxisName: "Usage",
        numberSuffix: "K",
        theme: "fusion",
      },
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ExampleChart;
