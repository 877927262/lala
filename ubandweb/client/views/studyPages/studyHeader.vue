<!-- 这是学习页面的公用头部组件 -->
<template lang="html">
  <header>
    <div class="logo">
      <img src="../../../static/studyPages/uband-web-logo.png" alt="logo">
    </div>
    <b-nav class="nav" >
      <b-nav-item>兴趣课</b-nav-item>
      <b-nav-item>享干货</b-nav-item>
      <b-nav-item>关于我们</b-nav-item>
    </b-nav>
    <div class="userLogo m-r-xl">
      <img class="m-t-md "src="../../../static/studyPages/userLogo.png" alt="userlogo">
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/studyHeader";
</style>
