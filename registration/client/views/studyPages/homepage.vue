<template lang="html">
  <div class="center-bar block-center">
    <h1>科室排班表</h1>
    <div class="course-info m-t-lg" v-if="isShow">
      <table>
        <tr class="date">
          <td></td>
          <td v-for="item in theDoctor">{{item.date}}</td>
        </tr>
        <tr>
          <td>上午</td>
          <td v-b-modal.punchCard v-for="item in theDoctor" class="pointer" @click="getAppointmentAmInfo(item)">剩余{{item.am}}</td>
        </tr>
        <tr>
          <td>下午</td>
            <td v-b-modal.punchCard v-for="item in theDoctor" class="pointer" @click="getAppointmentPmInfo(item)">剩余{{item.pm}}</td>
        </tr>
      </table>
      <span v-if="result!=' '">{{result.user}}您好，您成功挂到了{{result.date}}日{{result.time}}{{result.doctor}}大夫的号</span>
      <!-- {{theDoctor}} -->
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
                  <span class="pull-left text-s">身份证号</span><input type="number" class="pull-left" v-model="card_id">
                </div>
                <div class="info-box clear p-b-md">
                  <!--<span class="pull-left text-s">性别</span><input type="text" class="pull-left" v-model="gender">-->
                  <span class="pull-left text-s">性别</span>
                  <input type="radio" id="male" class="pull-left radio " v-model="gender" value="男">
                  <label for="male" class="pull-left m-r">男</label>
                  <input type="radio" id="female" class="pull-left radio" v-model="gender" value="女">
                  <label for="female" class="pull-left m-r">女</label>
                </div>
                <div class="info-box clear p-b-md">
                  <span class="pull-left text-s">年龄</span><input type="number" class="pull-left" v-model="age">
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
  import Vue from 'vue';
  import Toasted from 'vue-toasted';
  Vue.use(Toasted);
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
    },
    result(){
      return this.$store.state.studyPages.result;
    }
  },
  methods: {
    //设置日期和上午
    getAppointmentAmInfo(item){
      let date=item.date;
      let time='上午';
      this.$store.commit('setAppointmentDate',{appointmentDate:date});
      this.$store.commit('setAppointmentTime',{appointmentTime:time});

    },
    //设置日期和上午
    getAppointmentPmInfo(item){
      let date=item.date;
      let time='下午';
      this.$store.commit('setAppointmentDate',{appointmentDate:date});
      this.$store.commit('setAppointmentTime',{appointmentTime:time});

    },

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
      //新增一个用户
      this.$store.dispatch('addUser',{
        name:this.name,
        card_id:this.card_id,
        age:this.age,
        gender:this.gender
      }).then(function () {
        //新增一个用户之后立马查询它的id
        thisThis.$store.dispatch('selectUserId',{
          card_id:thisThis.card_id
        }).then(function () {
          //挂号
          let appointmentDate=thisThis.$store.state.studyPages.appointmentDate;
          let appointmentTime=thisThis.$store.state.studyPages.appointmentTime;
          let appointmentDoctorId=thisThis.$store.state.studyPages.appointmentDoctorId;
          let appointmentUserId=thisThis.$store.state.studyPages.appointmentUserId;

          thisThis.$store.dispatch('registration',{appointmentDate,appointmentTime,appointmentDoctorId,appointmentUserId}).then(function () {

            thisThis.$store.dispatch('getCurrentDoctorWorkList',{doctorId:thisThis.$store.state.studyPages.appointmentDoctorId}).then(function () {
//              alert('成功');
//              this.$toasted.show('挂号成功');
              Vue.toasted.show('挂号成功',{
                theme: "outline",
                position: "top-center",
                duration : 3000,
                className:'toastedCorrectStyle'
              });
              thisThis.$store.dispatch('getAppointment',{appointmentUserId}).then(function () {
              })
            })
          })
        })
      });

      thisThis.close();

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
