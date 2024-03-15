<template>
  <div :id="chartId" style="width: 100%; height: 100%"></div>
</template>
  
  <script>
import * as echarts from "echarts";

export default {
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartId: "echarts-chart",
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const chart = echarts.init(document.getElementById(this.chartId));
      const option = this.translateData();
      chart.setOption(option);
    },
    translateData() {
      return {
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          data: this.chartData.dateList,
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false, //y轴线
          },
        },
        grid:{
          top: "20%",
          left: "10%",
          right: "10%",
          bottom: "3%",
          containLabel: true,
        },
        series: [
          {
            name: "Evaporation",
            type: "line",
            data: this.chartData.barData,
          },
          {
            type: "line",
            data: this.chartData.planData,
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss">
</style>
  