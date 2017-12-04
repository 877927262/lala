<!--课程主页组件-->
<template lang="html">
  <div class="center-bar block-center">
    <h1>课程主页</h1>
    <div class="course-info m-t-lg">
      <div class="class-info p-t-xl">
        <h4>班级信息</h4>
        <p class="text-s">2017-09-09 12:00:00 提交</p>
      </div>
      <div class="wechat m-t-lg">
          <h4 class="text-md text-c">微信群</h4>
          <p class="text-c">暗号是“加群-编程班55”</p>
          <img src="../../../static/studyPages/wechat.png" alt="wechat">
          <h4 class="text-md text-c m-t-xl">班级攻略</h4>
          <div class="buttons m-t-lg">
            <b-button class="pointer">如何学习</b-button>
            <b-button class="pointer">如何打卡</b-button>
            <b-button class="pointer">评分和奖励</b-button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/homepage";
</style>
