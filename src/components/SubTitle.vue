<template>
  <div>
    <div class="title-cont">
      <i class="icon-line"></i>
      <label>{{subTitle}}</label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    subTitle: {
      default: "小标题"
    }
  }
};
</script>
<style lang="scss" scoped>
.title-cont {
  height: 14px;
  .icon-line {
    display: inline-block;
    width: 3px;
    height: 14px;
    margin-right: 4px;
    background: url("../assets/img/icon-line.png") no-repeat;
  }
  label {
    font-family: MicrosoftYaHei;
    font-size: 17px;
    color: #f8f6f8;
    text-align: center;
    line-height: 18px;
  }
}
</style>