<!--这个组件，显示所有的课程-->
<template lang="html">
  <div>
    <div class="center-bar block-center">
      <h2>请选择您要挂的号</h2>
      <b-nav class="border-bottom">
        <b-nav-item to="underway" replace>按科室挂号</b-nav-item>
        <b-nav-item to="over" replace>按疾病挂号</b-nav-item>
      </b-nav>

      <router-view></router-view>

      <div style="height:50px;">
        <!--占空间专用-->
      </div>

    </div>
    <footer>
      <b-nav>
        <b-nav-item>官方微博</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>官方微信</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>关于我们</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>联系我们</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>意见反馈</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>帮助中心</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>友情链接</b-nav-item>
      </b-nav>
      <p>沪ICP备16024788号</p>
    </footer>
  </div>

</template>

<script>
export default {
  data(){
    return {
      active:true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/course";

</style>
