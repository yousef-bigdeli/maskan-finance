import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import styles from "./IndexChart.module.scss";
import { useEffect } from "react";

const IndexChart = ({ data }) => {
  // Highchart options for zooming
  useEffect(() => {
    Highcharts.setOptions({
      chart: {
        zoomType: "x",
      },
      xAxis: {
        type: "datetime",
      },
      rangeSelector: {
        enabled: true,
        buttons: [
          {
            type: "millisecond",
            count: 1,
            text: "1ms",
          },
          {
            type: "millisecond",
            count: 10,
            text: "10ms",
          },
          {
            type: "millisecond",
            count: 100,
            text: "100ms",
          },
          {
            type: "second",
            count: 1,
            text: "1s",
            selected: true, // Set the 1-second button as selected by default
          },
          {
            type: "second",
            count: 10,
            text: "10s",
          },
          {
            type: "all",
            text: "All",
          },
        ],
      },
    });
  }, []);

  // Highchart chart options
  const options = {
    chart: {
      style: {
        fontSize: "18px",
        fontFamily: "vazir",
      },
    },

    rangeSelector: {
      selected: 1,
    },

    title: {
      text: data.title,
    },

    boost: {
      useGPUTranslations: true,
      usePreAllocated: true,
    },
    tooltip: {
      pointFormatter: function () {
        // Custom tooltip content for each data point
        const { high, low, close } = this;
        return `بیشترین: ${high}<br/>کمترین: ${low}<br/>پایانی: ${close}`;
      },
    },
    series: [
      {
        type: "hlc",
        name: data.title,
        data: data.history,
        accessibility: {
          point: {
            valueDescriptionFormat:
              "{xDescription}. بیشترین: {point.high}, کمترین: {point.low}, پایانی: {point.close}.",
          },
        },
        dataGrouping: {
          units: [
            [
              "millisecond", // unit name
              [1], // allowed multiples
            ],
            ["month", [1, 5, 10, 50, 100, 500]],
          ],
        },
      },
    ],
  };

  return (
    <div className={styles["indexChart-wrapper"]}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
        containerProps={{ className: styles.chartContainer }}
      />
    </div>
  );
};

export default IndexChart;
