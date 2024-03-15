<template>
  <div class="order-table">
    <div class="table-header">
      <div class="cell work">工单编号</div>
      <div class="cell desc">产品编号</div>
      <div class="cell jd">工单进度</div>
      <div class="cell">完成度</div>
    </div>
    <div class="outer-container">
      <div class="inner-container">
        <div class="order-table-rows">
          <div class="cell work">XN5000802</div>
          <div class="cell desc">M-PZ069-40211</div>
          <div class="cell jd">干尘沙前清晰1111</div>
          <div class="cell">100.33%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderChart",
};
</script>

<style lang="scss">
.order-table {
  display: flex;
  flex-direction: column;
}
.table-header {
  display: flex;
  padding: 5px 2px 0;
  color: #ffffff;
  justify-content: space-between;
}
.cell {
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #c5ddf7;
  text-align: center;
  &.work {
    width: 70px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &.desc {
    width: 95px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &.jd {
    width: 75px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &:last-child {
    width: 55px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.outer-container {
  height: 300px;
  position: relative;
  overflow: hidden;
}
.inner-container {
  position: absolute;
  overflow-x:hidden;
  overflow-y: auto;
}
.order-table-rows {
  display: flex;
  margin-top: 5px;
  border-left: 2px solid #1af3fd;
  position:relative;
  &::before{
    content: " ";
    display: block;
    top: 50%;
    margin-top: -2px;
    margin-left: 1px;
    border-top:3px solid transparent;
    border-bottom: 3px solid transparent;
    border-left: 3px solid #1af3fd;
    position:absolute;
  }

  .cell {
    font-family: Microsoft YaHei;
    background-color: rgba(0, 114, 255, 0.18);
    font-weight: 400;
    color: #c5ddf7;
    padding: 2px 7px;
    font-size: 10px;
    &:nth-child(2) {
      color: #7e8c9a;
    }
    &:nth-child(3) {
      font-size: 10px;
      // font-family: DS-Digital;
      font-weight: 400;
      color: #1af3fd;
    }
  }
}
</style>