<template>
  <div class="home-bg">
    <div class="header-container">
      <div class="header-log">
        <div @click="gotoUrl()" class="logo-title">智慧园区大屏</div>
      </div>
    </div>
    <webglContent></webglContent> <!-- 在这里使用 webglContent 组件 -->
  </div>
</template>

<script>
import webglContent from "./components/webglContent.vue";
export default {
  name: "HomeView",
  components: {
    webglContent
  },
  data() {
    return {
      // controls: null,
    };
  },
  created() {},
  watch() {},
  methods: {
    gotoUrl() {
      this.$router.push({ name: "case" });
    },
  },
  mounted() {},
};
</script>

<style>
</style>