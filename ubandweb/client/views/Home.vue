<template>
  <div class="page">
    <u-header></u-header>
    <div class="centers-bar block-center">
      <img src="../../static/timg.jpg" alt="" class="block-center">
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
