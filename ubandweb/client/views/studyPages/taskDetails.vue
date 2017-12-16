<!--任务详情组件-->
<template lang="html">
  <div class="center-bar block-center">
    <div class="head clear">
      <h1 class="pull-left">任务详情</h1> <b-btn class="back pull-right m-xxs pointer" @click="goBack">返回</b-btn>
    </div>
    <div class="content-box box-shadow m-t-lg clear">
      <div class="box block-center">
        <div class="m-t-xl head clear">
          <h2 class="pull-left">我的打卡</h2>
          <b-button class="pull-right m-r-lg m-xxs">修改</b-button>
        </div>
        <div class="punch-card-info m-t-lg clear">
          <div class="one pull-left box-shadow"><span class="m-l-md">为什么早起.mp4</span><a class="pull-right m-r-md text-s" href="a">预览</a></div>
          <div class="two pull-left box-shadow"><span class="m-l-md">为什么早起.mp4</span><a class="pull-right m-r-md text-s" href="a">预览</a></div>
        </div>
        <div class="m-t-xl head clear">
          <h2 class="pull-left">打卡评价</h2>
          <span class="grade pull-right m-r-lg">4.5分</span>
        </div>
        <p class="time text-s m-t-sm">2017-09-10 12:00:00 提交</p>
        <!--这里面写评价-->
        <div class="evaluate m-t-md clear">
          <div class="user-info clear">
            <img class="pull-left m-t-md" src="../../../static/studyPages/坤叔.png" alt="a">
            <div class="pull-left m-l-md">
              <p class="user-name m-t-md m-b-sm font-bold">坤叔</p>
              <p class="user-evaluate">和昨天的复述练习一样，今天我们将复述材料切分开，供大家练习。</p>
            </div>
          </div>
          <div class="user-info clear">
            <img class="pull-left m-t-md" src="../../../static/studyPages/坤叔.png" alt="a">
            <div class="pull-left m-l-md">
              <p class="user-name m-t-md m-b-sm font-bold">坤叔</p>
              <p class="user-evaluate">和昨天的复述练习一样，今天我们将复述材料切分开，供大家练习。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-box box-shadow m-t-lg">
      <div class="box block-center">
        <div class="m-t-xl head clear">
          <h2 class="pull-left">群内讨论精华</h2>
        </div>
        <p class="time text-s m-t-sm">2017-09-10 12:00:00 提交</p>
        <!--这里面写评价-->
        <div class="evaluate m-t-md clear">
          <div class="user-info clear">
            <img class="pull-left m-t-md" src="../../../static/studyPages/坤叔.png" alt="a">
            <div class="pull-left m-l-md">
              <p class="user-name m-t-md m-b-sm font-bold">坤叔</p>
              <p class="user-evaluate">和昨天的复述练习一样，今天我们将复述材料切分开，供大家练习。</p>
            </div>
          </div>
          <div class="user-info clear">
            <img class="pull-left m-t-md" src="../../../static/studyPages/坤叔.png" alt="a">
            <div class="pull-left m-l-md">
              <p class="user-name m-t-md m-b-sm font-bold">坤叔</p>
              <p class="user-evaluate">和昨天的复述练习一样，今天我们将复述材料切分开，供大家练习。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-box box-shadow m-t-lg">





            <div style="height: 500px;">
            <!--占空间专用-->
            </div>
    </div>

    <div class="content-box submit box-shadow m-t-xxl pos-rlt ">
      <h1 class="m-t-xl m-l-xxl">我的打卡</h1>
      <div class="button-box pos-abt">
        <b-button v-b-modal.punchCard>打卡交作业</b-button>
        <p class="text-c m-t-sm">2017年5月9号 24:00 截止</p>
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
  </div>

</template>

<script>
export default {
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
  @import "../../../style/components/studyPages/taskDetails";
</style>
