<template>
    <div :class="`common-wrap ${size}`">
      <div class="common-content">
        <div class="content-header">
          <h3 class="header-title">{{ title }}</h3>
          <div class="header-right" v-if="$slots.right">
            <slot name="right" />
          </div>
        </div>
        <div class="content-chart">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {}
    },
    props: {
      title: {
        type: String,
        require: true
      },
      // small medium large
      size: {
        type: String,
        default: 'medium'
      }
    },
    methods: {}
  }
  </script>
  
  <style lang="scss" scoped>
  .common-wrap {
    display: flex;
    padding: 1vh 0.5vw;
    box-sizing: border-box;
  
    &.small {
      height: 26vh;
      background: url(../../../assets/images/wrapsmall.png) no-repeat center;
      background-size: 100% 100%;
    }
  
    &.medium {
      height: 30.55vh;
      background: url(../../../assets/images/wrapmedium.png) no-repeat center;
      background-size: 100% 100%;
    }
  
    &.large {
      height: 30.55vh;
      background: url(../../../assets/images/wraplarge.png) no-repeat center;
      background-size: 100% 100%;
    }
  
    &::before {
      content: '';
      display: block;
      width: 0.83vw;
      height: 1.66vw;
      background: url(../../../assets/images/title-icon.png) no-repeat center;
      background-size: 100% 100%;
      margin: 0.3vw 8px 0 0;
    }
  
    &::after {
      content: '';
      display: block;
      width: 0.83vw;
      height: 1.66vw;
    }
  
    .common-content {
      flex: 1;
      display: flex;
      flex-direction: column;
  
      .content-header {
        display: flex;
        justify-content: space-between;
  
        .header-title {
          max-width: 21.6vw;
          min-width: 20vw;
          font-family: Microsoft YaHei;
          font-size: 0.93vw;
          font-weight: 400;
          color: #EFF7FF;
          height: 3vh;
          line-height:  3vh;
          padding-left: 0.5vw;
          background: linear-gradient(to right,rgba(48,186,221,0.2),rgba(48,186,221,0));
        }
      }
  
      .content-chart {
        flex: 1;
      }
    }
  }
  </style>
  