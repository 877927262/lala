<!--这个组件，显示所有的课程-->
<template lang="html">
  <div>
    <div class="center-bar block-center">
      <h2>请选择您要挂的号</h2>
      <b-nav class="border-bottom">
        <b-nav-item to="underway" >按科室挂号</b-nav-item>
        <b-nav-item to="over" >按疾病挂号</b-nav-item>
      </b-nav>

      <router-view></router-view>

      <div style="height:50px;">
        <!--占空间专用-->
      </div>

    </div>
    <footer>
      <b-nav>
        <b-nav-item>官方微博</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>官方微信</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>关于我们</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>联系我们</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>意见反馈</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>帮助中心</b-nav-item>
        <b-nav-item>|</b-nav-item>
        <b-nav-item>友情链接</b-nav-item>
      </b-nav>
      <p>沪ICP备16024788号</p>
    </footer>
  </div>

</template>

<script>
export default {
  data(){
    return {
      active:true,
      test:[{
        "id":"1",
        "name":"内科",
        "banner":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512111646555&di=34daf8b3e3d8889f4c3b594d4819f4c8&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2016%2F08%2F01%2Fb2abda9a1e99731a8d9bf34399af1003.jpg",
        "startDate": "66776"
      },{
        "id":"2",
        "name":"外科",
        "banner":require("../../../static/studyPages/course-img01.png"),
        "startDate":"2099/11/16"
      },{
        "id":"3",
        "name":"儿科",
        "banner":require("../../../static/studyPages/course-img01.png"),
        "startDate":"2099/11/16"
      },{
        "id":"4",
        "name":"眼科",
        "banner":require("../../../static/studyPages/course-img01.png"),
        "startDate":"2099/11/16"
      },{
        "id":"5",
        "name":"口腔科",
        "banner":require("../../../static/studyPages/course-img01.png"),
        "startDate":"2099/11/16"
      },{
        "id":"6",
        "name":"耳鼻喉科",
        "banner":require("../../../static/studyPages/course-img01.png"),
        "startDate":"2099/11/16"
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../style/components/studyPages/course";

</style>
