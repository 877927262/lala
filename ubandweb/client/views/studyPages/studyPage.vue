
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
