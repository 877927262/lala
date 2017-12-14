<!--这个组件分为左右两部分-->
<!--左侧为导航栏，右侧为点击每个导航显示不同的内容-->
<!--右侧内容使用路由控制内容-->
<template lang="html">
  <div class="myCourse clear">
    <div class="left">
      <h5>请选择大夫</h5>
      <b-nav vertical class="left-nav" >
        <b-nav-item v-for="(item,index) in DepartmentDoctorList" :key="index" @click="change(index,item.doctor)" :class={active:isActive(index)}>{{item.name}}</b-nav-item>
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
      currentIndex:0
    }
  },
  computed:{
    //按科室查找大夫
    DepartmentDoctorList(){
      return this.$store.state.studyPages.DepartmentDoctorList;
    },

    departmentId(){
      return this.$route.params.departmentId;
    },
    illnessId(){
      return this.$route.params.illnessId;
    }
  },
  methods:{
    isActive(index) {
      return this.currentIndex === index
    },
    change(index,doctorId){
      this.currentIndex = index;
      this.$store.dispatch('getCurrentDoctorWorkList',{doctorId})

    }
  },
  created(){
    //动态获取当前的大夫列表
    if(this.departmentId){
      //如果是按照科室查询的
      this.$store.dispatch('getCurrentDepartmentDoctorList',{departmentId:this.departmentId})
    }else if(this.illnessId){
      //如果是按照病症查询的
      this.$store.dispatch('getCurrentIllnessDoctorList',{illnessId:this.illnessId})

    }else{
      console.log('出错了')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/myCourse";
</style>
