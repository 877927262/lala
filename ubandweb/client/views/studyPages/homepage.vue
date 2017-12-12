<!--课程主页组件-->
<template lang="html">
  <div class="center-bar block-center">
    <h1>科室排班表</h1>
    <div class="course-info m-t-lg">
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
        {{works}}
    </div>
    <b-modal id="punchCard" ref="modal" @ok="handleOk" @shown="clearName" hide-header hide-footer size="lg">
      <form @submit.stop.prevent="handleSubmit">
        <div class="modal-box block-center clear p-b-xl">
          <!--这个是600px的容器-->
          <div class="modal-center-box block-center ">
            <!--这个是520px的容器-->
            <div class="head clear text-md m-t-xxl">
              <h5 class="pull-left  font-normal">打卡</h5><span class="pull-right pointer" @click="close">X</span>
            </div>
            <div class="puch-card-info m-t-lg ">
                <div class="info-box clear p-b-md">
                  <span class="pull-left text-s">班级</span><input type="text" class="pull-left">
                </div>
                <div class="info-box clear p-b-md">
                  <span class="pull-left text-s">任务名</span><input type="text" class="pull-left">
                </div>
                <div class="info-box clear p-b-md">
                  <span class="pull-left text-s">日期</span><input type="text" class="pull-left">
                </div>
            </div>

            <div class="upload-files clear">
             <a href="a" class="pull-right m-l-lg text-s font-bold">上传文件</a><a href="a" class="pull-right text-s font-bold ">外链提交</a>
            </div>
            <div class="file-container">
              <div class="file-box m-b">
                <span class="m-l-md">这是我的打卡文件.png</span><a href="a" class="pull-right text-s font-bold m-r ">移除</a>
              </div>
              <div class="file-box m-b">
                <span class="m-l-md">这是我的打卡文件.png</span><a href="a" class="pull-right text-s font-bold m-r ">移除</a>
              </div>
            </div>
            <b-btn class="pull-right m-l-md submit-button m-r">提交</b-btn><b-btn class="pull-right concel-button">取消</b-btn>
          </div>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  computed:{
    doctors(){
      return this.$store.state.studyPages.doctors;
    },
    theDoctor(){
      return this.$store.state.studyPages.theDoctor;

    }
  },
  methods: {
    clearName () {
      this.name = ''
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
    handleSubmit () {
      this.names.push(this.name)
      this.clearName()
      this.$refs.modal.hide()
    },
    close(){
      this.$refs.modal.hide()

    },
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/homepage";
</style>
