<template>
  <div class="home-bg">
    <div class="header-container">
      <div class="header-log">
        <div @click="gotoUrl()" class="logo-title">智慧园区大屏</div>
      </div>
    </div>
    <div class="body-container">
      <div class="left-aside">
        <div class="card" title="设备运行情况">
          <div class="card-content">
            <div class="card-title">设备运行情况</div>
            <DeviceChart></DeviceChart>
          </div>
        </div>
        <div class="card" title="设备出库情况">
          <div class="card-content">
            <div class="card-title">设备出库情况</div>
            <qualityChart></qualityChart>
          </div>
        </div>
        <div :class="{ card: true, middle: true }" title="在制工单">         
          <div class="card-content">
            <div class="card-title">在制工单</div>
            <orderChart/>      
        </div>
        
        </div>
      </div>
      <div class="right-aside">
        <div class="card" title="在制数据">
          <div class="card-content">
            <div class="card-title">在制数据</div>
            <workChartVue></workChartVue>
          </div>
        </div>
      </div>
      <ul class="eqp-data-wrap">
        <li class="eqp-data-item run">
          <p class="label">运行</p>
          <p class="value">{{ yxNum }}</p>
        </li>
        <li class="eqp-data-item error">
          <p class="label">故障</p>
          <p class="value">{{ gzNum }}</p>
        </li>
        <li class="eqp-data-item await">
          <p class="label">待机</p>
          <p class="value">{{ djNum }}</p>
        </li>

        <li class="eqp-data-item info">
          <p class="label">离线</p>
          <p class="value">{{ lxNum }}</p>
        </li>
      </ul>
      <webglContent></webglContent>
      <!-- 在这里使用 webglContent 组件 -->
    </div>
  </div>
</template>

<script>
import vCard from "./components/card";
import webglContent from "./components/webglContent.vue";
import DeviceChart from "./components/deviceChart.vue";
import qualityChart from "./components/qualityChart.vue";
import workChartVue from "./components/workChart.vue";
import orderChart from "./components/orderChart.vue";
import axios from "axios";

//import global from "../../global/global"
export default {
  name: "HomeView",
  components: {
    vCard,
    webglContent,
    DeviceChart,
    qualityChart,
    workChartVue,
    orderChart
  },
  data() {
    return {
      // controls: null,
      yxNum: 0,
      djNum: 0,
      gzNum: 0,
      lxNum: 0,
    };
  },
  created() {},
  watch() {},
  mounted() {
    this.getDataSource();
  },
  methods: {
    gotoUrl() {
      this.$router.push({ name: "case" });
    },
    getDataSource() {
      let that = this;

      axios
        .get(
          this.$globle.apiUrl +
            "/produce/swTypeDevStatus/getEquipmetInfo?type=1"
        )
        .then((response) => {
          if (response.data.success) {
            that.eqpList = response.data.result;
            that.yxNum = 0;
            that.lxNum = 0;
            that.djNum = 0;
            that.gzNum = 0;
            for (let i = 0; i < that.eqpList.length; i++) {
              if ("运行" == that.eqpList[i].statusName) {
                that.yxNum++;
              }
              if ("离线" == that.eqpList[i].statusName) {
                that.lxNum++;
              }
              if (
                "待机" == that.eqpList[i].statusName ||
                "停机" == that.eqpList[i].statusName
              ) {
                that.djNum++;
              }
              if ("故障" == that.eqpList[i].statusName) {
                that.gzNum++;
              }
            }
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.left-aside,
.right-aside {
  width: 25%;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
}
.right-aside {
  position: absolute;
  right: 0;
}
.card-content {
  display: flex;
  flex-direction: column;
}
.body-container {
  display: flex;
  position: relative;
  z-index: 100;
}
.card {
  display: flex;
  ///width: 300px;
  height: 180px;
  // height:30.55vh;
  padding: 0.5vw 0.36vw;
  background: url("../../assets/images/wrapsmall.png") no-repeat center;
  background-size: 100% 100%;
  margin: 5px 10px 5px 10px;
}
.card.middle {
  // width: 300px;
  height: 180px;
  // height:30.55vh;

  background: url("../../assets/images/wrapsmall.png") no-repeat center;
  background-size: 100% 100%;
  margin: 5px 10px 5px 10px;
}
.card-title {
  max-width: 16.6vw;
  min-width: 15vw;
  height: 1.5vw;
  line-height: 1.5vw;
  margin-left: 0.36vw;
  padding-left: 0.25vw;
  font-family: Microsoft YaHei;
  font-size: 0.93vw;
  color: #ffffff;
  background: linear-gradient(
    to right,
    rgb(14 198 245 / 20%),
    rgb(12 180 223 / 0%)
  );
}

.card::before {
  content: "";
  display: block;
  width: 0.83vw;
  height: 1.66vw;
  margin: 0.22vw 0vw 0vw 0.22vw;
  background: url("../../assets/images/title-icon.png");
  background-size: 100% 100%;
}

</style>