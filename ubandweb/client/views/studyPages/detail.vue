<!--这个组件分为左右两部分-->
<!--左侧为导航栏，右侧为点击每个导航显示不同的内容-->
<!--右侧内容使用路由控制内容-->
<template lang="html">
  <div class="myCourse clear">
    <div class="left">
      <h5>请选择大夫</h5>
      <b-nav vertical class="left-nav" >
        <b-nav-item v-for="(item,index) in DepartmentDoctorList" :key="index" @click="change(index,item)" :class={active:isActive(index)}>{{item.name}}</b-nav-item>
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
    isShow(){
      return this.$store.state.studyPages.isShow;
    }

  },
  methods:{
    isActive(index) {
      return this.currentIndex === index
    },
    change(index,item){
      //控制激活状态
      this.currentIndex = index;

      //设置要预约的大夫的id
      if(item.id){
        this.$store.commit('setAppointmentDoctorId',{appointmentDoctorId:item.id});
      }
      else if(item.doctor){
        this.$store.commit('setAppointmentDoctorId',{appointmentDoctorId:item.doctor});
      }
      else {
        console.log('呵呵，又一个bug自己找去吧')
      }


      //theDoctor当前大夫的工作信息
      if(item.id){
        this.$store.dispatch('getCurrentDoctorWorkList',{doctorId:item.id});
      }
      else if(item.doctor){
        this.$store.dispatch('getCurrentDoctorWorkList',{doctorId:item.doctor});
      }
      else{
        console.log("你doctorid没有拿到");
      }

      //点击之后让右边的排班表显示出来
      this.$store.commit('setShowTrue');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/detail";
</style>
