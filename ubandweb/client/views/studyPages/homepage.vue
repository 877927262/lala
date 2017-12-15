<!--课程主页组件-->
<template lang="html">
  <div class="center-bar block-center">
    <h1>科室排班表</h1>
    <div class="course-info m-t-lg" v-if="isShow">
      <table>
        <tr class="date">
          <td></td>
          <!-- {{works}} -->
          <td v-for="item in theDoctor">{{item.date}}</td>
        </tr>
        <tr>
          <td>上午</td>
          <td v-b-modal.punchCard v-for="item in theDoctor" class="pointer">{{item.am}}</td>
        </tr>
        <tr>
          <td>下午</td>
            <td v-b-modal.punchCard v-for="item in theDoctor" class="pointer">{{item.pm}}</td>
        </tr>
      </table>


    </div>

    <b-modal id="punchCard" ref="modal" @ok="handleOk" @shown="clearName" hide-header hide-footer size="lg">
      <form @submit.stop.prevent="handleSubmit">
        <div class="modal-box block-center clear p-b-xl">
          <!--这个是600px的容器-->
          <div class="modal-center-box block-center ">
            <!--这个是520px的容器-->

            <div class="head clear text-md m-t-xxl">
              <h5 class="pull-left  font-normal">请输入您的个人信息</h5><span class="pull-right pointer" @click="close">X</span>
            </div>
            <div class="puch-card-info m-t-lg m-b-lg ">
                <div class="info-box clear p-b-md">
                  <span class="pull-left text-s">姓名</span><input type="text" class="pull-left" v-model="name">
                </div>
                <div class="info-box clear p-b-md">
                  <span class="pull-left text-s">身份证号</span><input type="text" class="pull-left" v-model="card_id">
                </div>
                <div class="info-box clear p-b-md">
                  <span class="pull-left text-s">性别</span><input type="text" class="pull-left" v-model="gender">
                </div>
                <div class="info-box clear p-b-md">
                  <span class="pull-left text-s">年龄</span><input type="text" class="pull-left" v-model="age">
                </div>
            </div>

            <b-btn class="pull-left concel-button">取消</b-btn><b-btn class="pull-left m-l-md submit-button m-r" @click="submit">提交</b-btn>
          </div>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'',
      card_id:null,
      gender:'',
      age:''
    }
  },
  computed:{
    doctors(){
      return this.$store.state.studyPages.doctors;
    },
    theDoctor(){
      return this.$store.state.studyPages.theDoctor;

    },
    departmentId(){
      return this.$route.params.departmentId;
    },
    illnessId(){
      return this.$route.params.illnessId;
    },
    isShow(){
      return this.$store.state.studyPages.isShow;
    }
  },
  methods: {
    clearName () {
      this.name = '';
      this.card_id=null;
      this.age='';
      this.gender='';
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.name) {
        alert('Please enter your name')
      } else {
        this.handleSubmit()
      }
    },
    close(){
      this.$refs.modal.hide()

    },
    goBack(){
      this.$router.go(-1);
    },
    submit(){
      let thisThis=this;
      this.$store.dispatch('addUser',{
        name:this.name,
        card_id:this.card_id,
        age:this.age,
        gender:this.gender
      });

      setTimeout(function () {
        thisThis.$store.dispatch('selectUserId',{
          card_id:thisThis.card_id
        })
      },1000);
      //这里遗留了一个问题，怎么用dispatch的then()




//      thisThis.close();

    }


  },

  created(){
    //进来之后先将科室排班表隐藏
    this.$store.commit('setShowFalse');

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
  @import "../../../style/components/studyPages/homepage";
</style>
