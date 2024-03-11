<template>
  <header>智慧仓库</header>
  <div id="webgl" class="webgl-content"></div>
</template>

<script>

let scene;
export default {
  name: "ckPage",
  components: {},
  data() {
    return {};
  },
  created() { },
  methods: {
    initThree() {

    
  },
  },
  mounted() {
    
  },
  onUnmounted() { },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// body {
//   width: 100%;
//   height: 100%;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//   background: url(../../assets/images/px.jpg) no-repeat;
// }
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

header {
  background: url(../../assets/images/tb1.png) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: white;
  font-size: 2rem;
  line-height: 3.5rem;
  z-index: 100;
}

#webgl {
  position: absolute; 
  width: 100vw;
  height: 100vh;
  z-index: 99;
}
</style>