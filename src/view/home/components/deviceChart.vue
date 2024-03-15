<template>
  <div style="margin-top:2px">
    <lineChart
      ref="vehicle"
      :options="{
        domSelector: 'vehicle',
        viewData: this.vehicle,
        smooth: true,
        data: this.vehicleData,
       
      }"
    />
  </div>
</template>

<script>
import lineChart from "./lineChart.vue";
export default {
  name: "deviceContent",
  components: {
    "lineChart": lineChart,
  },
  data() {
    return {
      vehicle: {
        title: "出入库统计",
        xAxis: Array(7)
          .fill(1)
          .map(function (item, index) {
            return index++;
          }),
       
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
	#vehicle {
		width: 15rem;
		height: 8.2rem;
	}
</style>