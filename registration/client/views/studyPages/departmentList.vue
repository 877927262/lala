<template lang="html">
  <b-container fluid class="b-container">
    <b-row>

      <b-col  md="6"	lg="4"	xl="4" v-for="(item,index) in hospitalDepartmentList" :key="item.id">
          <div class="course-box pointer m-t-lg" @click="linkTo(item.id)">
              <div class="course-image">
                <img :src="item.banner" alt="科室图片">
              </div>
              <div class="course-info">
                <span>{{item.name}}</span><span>{{changeDate(item.startDate)}}</span>
              </div>
          </div>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
  // import moment from 'moment'
export default {
  data(){
    return {
      active:true,
    }
  },
  computed:{
    hospitalDepartmentList(){
      return this.$store.state.studyPages.hospitalDepartmentList;
    }

  },
  methods:{
    //日期格式化
    changeDate(date){
      // return moment(date).format('YYYY/MM/DD')
    },
    //路由跳转
    linkTo(departmentId){
      this.$router.push("/studyPage/department/"+departmentId)
    }
  },
  created(){
    this.$store.dispatch('getAllDepartment');
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/departmentList";

</style>
