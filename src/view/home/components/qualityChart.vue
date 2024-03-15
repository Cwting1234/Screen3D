<template>
    <div style="margin-top:2px">
      <lineChart2
        ref="vehicle1"
        :options="{
          domselet: 'vehicle1',
          viewData: this.vehicle1,
          smooth: true,
          data: this.vehicleData,         
        }"
      />
    </div>
  </template>
  
  <script>
  import lineChart2 from "./lineChart2.vue";
  export default {
    name: "qualityChart",
    components: {
      "lineChart2": lineChart2,
    },
    data() {
      return {
        vehicle1: {
          title: "出入库统计",
          xAxis: Array(7)
            .fill(1)
            .map(function (item, index) {
              return index++;
            }),
          legend: [
            {
              name: "出库",
              key: "tempe",
            },
            {
              name: "入库",
              key: "dity",
            },
          ],
        },
        vehicleData: [
          {
            key: "tempe",
            type: "line",
            data: Array(7)
              .fill(1)
              .map(function () {
                return parseInt(Math.random() * 20 + 20);
              }),
          },
          {
            key: "dity",
            type: "line",
            data: Array(7)
              .fill(1)
              .map(function () {
                return parseInt(Math.random() * 30 + 30);
              }),
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="scss">
      #vehicle1 {
          width: 15rem;
          height: 8.2rem;
      }
  </style>