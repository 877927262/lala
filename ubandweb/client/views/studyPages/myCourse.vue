<!--这个组件分为左右两部分-->
<!--左侧为导航栏，右侧为点击每个导航显示不同的内容-->
<!--右侧内容使用路由控制内容-->
<template lang="html">
  <div class="myCourse clear">
    <div class="left">
      <h5>请选择大夫</h5>
      <b-nav vertical class="left-nav" >
        <b-nav-item v-for="(item,index) in nav" :key="index" @click="change(index)" :class={active:isActive(index)}><router-link :to="item.router">{{item.title}}</router-link></b-nav-item>
      </b-nav>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nav:[{
            title:'张大夫',
            router:'homepage'
          },
          {
            title:'李大夫',
            router:'studyTask'
          },
          {
            title:'王大夫',
            router:'homepage'
          },
          {
            title:'赵大夫',
            router:'homepage'
          }],

      currentIndex:0
    }
  },
  methods:{
    isActive(index) {
      return this.currentIndex === index
    },
    change(index){
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/myCourse";
</style>
