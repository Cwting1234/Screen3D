<template>
    <div :id="domselet"></div>
  </template>
  <script>
  import * as echarts from "echarts";
  export default {
    name: "lineChart2",
    props: ["options"],
    data() {
      return {
        myChart: null,
        domselet: this.options.domselet,
        viewData: this.options.viewData,
        data: this.options.data,
        smooth: this.options.smooth || false,
        //boundaryGap:this.options.boundaryGap || false,
        //isLegend:this.options.isLegend || false
      };
    },
    methods: {
      initChart() {
        this.myChart = echarts.init(document.getElementById(this.domselet));
        const options = this.translateData();
        // 绘制图表
        this.myChart.setOption(options);
      },
      translateData() {
        //const legend = this.viewData.legend || [];
        //const titleText = this.viewData.title || "";
        const xAxis = this.viewData.xAxis || [];
        const colors = this.viewData.color || [];
        const options = {
          //backgroundColor:'rgba(4,103,247,0.2)',
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                // backgroundColor: '#6a7985'
              },
            },
          },
        };
        const echartsConfig = this.options.config;
        
        if (xAxis) {
          options.xAxis = [
            {
              type: "category",
              //boundaryGap: this.boundaryGap,
              data: xAxis,
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: true,
              },
            },
          ];
        }
        options.yAxis = [
          {
            type: "value",
            splitLine: {
              show: false, //y轴线
            },
          },
        ];
        options.textStyle = {
          color: "white",
        };
        options.grid = {
          top: "20%",
          left: "10%",
          right: "10%",
          bottom: "3%",
          containLabel: true,
        };
  
        let series = [];
        if (this.data) {
          this.data.map((item) => {
            const currentItem = {
              type: item.type,
              //name:legend.length > 0 ? legend.filter(element => element.key === item.key)[0].name : '',
              data: item.data,
            };
            if (currentItem.type === "line") {
              currentItem.smooth = this.smooth;
            }
            series.push(currentItem);
          });
        }
        if (colors.length > 0) {
          options.color = colors;
        }
        options.series = series;
        if (echartsConfig) {
          return echartsConfig(options);
        } else {
          return options;
        }
      },
    },
    mounted() {
      this.initChart();
    },
  };
  </script>
  