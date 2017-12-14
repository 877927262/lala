<template lang="html">
  <b-container fluid class="b-container">
    <!-- 一行排列三门课程 -->
    <b-row>

      <b-col  md="6"	lg="4"	xl="4" v-for="(item,index) in hospitalDepartmentList" :key="item.id">
          <div class="course-box pointer m-t-lg" @click="linkTo(item.id)">
            <!--<router-link :to="/studyPage/myCourse">-->
              <div class="course-image">
                <img :src="item.banner" alt="科室图片">
              </div>
              <div class="course-info">
                <span>{{item.name}}</span><span>{{changeDate(item.startDate)}}</span>
              </div>
            <!--</router-link>-->
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
    linkTo(clazzId){
      this.$router.push("/studyPage/myCourse/"+clazzId)
//      this.$router.push("/studyPage/myCourse/")
    }
  },
  created(){
    this.$store.dispatch('getAllDepartment');
    console.log(this.$store.state.studyPages.hospitalDepartmentList)
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/underway";

</style>
