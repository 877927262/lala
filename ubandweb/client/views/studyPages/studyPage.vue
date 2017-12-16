<!--这个组件是学习页面的主干-->
<!--它包含了页面头部和内容区-->
<!--内容区使用路由显示不同的内容-->
<template lang="html">
  <div>
    <component is="StudyHeader"></component>
    <b-container fluid  class="course-container">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import StudyHeader from './studyHeader'
export default {
  components:{
    StudyHeader
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/studyPages";
</style>
