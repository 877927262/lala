<template>
  <div class="page">
    <u-header></u-header>
    <div class="centers-bar block-center">
      <div></div>
      <div></div>
    </div>

  </div>
</template>


<script>
  //this is page's header
  import UHeader from '../components/u-header.vue'
  export default {
    components: {
      UHeader
    }
  }

</script>
<style lang="scss">
  @import "../../style/home/index.scss";

</style>
