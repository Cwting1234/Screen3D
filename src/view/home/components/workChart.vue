<template>
  <div>
    <lineChart3 :chartData="chartData" ref="lineChart3"  />
  </div>
</template>
  
  <script>
import lineChart3 from "./lineChart3.vue";
import axios from "axios";
export default {
  components: {
    lineChart3,
  },
  data() {
    return {
      chartData: {
        dateList: [11,12,13,14],
        barData: [22,33,44,55],
        planData: [10,20,30,40],
        dataMax1: 50000,
      },
    };
  },
  mounted() {
    this.getDataSource();
    // setInterval(() => {
    //   this.getDataSource();
    // }, 1 * 6000 * 10 * 15);
  },
  methods: {
    getDataSource() {
      let that = this;
      axios
        .get(
          this.$globle.apiUrl +
            "/produce/swTypeDap/getDataSourceaOnwip?workShop=A21328"
        )
        .then((response) => {
          if (response.data.success) {
            that.chartData.barData = response.data.result.barData;
            that.chartData.dateList = response.data.result.dateList;
            that.chartData.planData = response.data.result.planData;

            // that.jhNum = response.data.result.jhNum;
            //that.sjDcl = response.data.result.sjDcl;
            //that.sjNum = response.data.result.sjNum;
            that.chartData.dataMax1 = response.data.result.dataMax1;
            this.$nextTick(() => {
              if (this.$refs.lineChart3) {
                this.$refs.lineChart3.renderChart();
                console.log("回调"+this.$refs.lineChart3);
              }
            });
            //this.$forceUpdate(); // 通知 Vue.js 进行视图更新
            console.log(response.data);
            console.log(that.chartData.barData);
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log(error);
        });
    },
  },
  components: { lineChart3 },
};
</script>
  