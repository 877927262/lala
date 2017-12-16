<template>
  <div class="page">
    <u-header></u-header>
    <div>
      <!-- home page cover -->
      <div class="home-cover">
        <div class="cover-body">
        </div>
        <div class="clear"></div>
        <div class="cover-desc p-t-lg">
          <p class="text-c text-xxl font-bold">帮你成为前 1% 的学习者</p>
          <p class="text-c text-lg font-thin m-t">学校和培训机构外学习的地方</p>
        </div>
      </div>
      <!-- end of home page cover -->
      <div class="home-adv-text">
        <div class="m-t-xl">
          <p class="text-c text-xxl m-b-xxs">“</p>
          <p class="text-c text-lg font-thin m-b-xxs">学会游泳的最好方式，不是看文章或听老师讲课</p>
          <p class="text-c text-lg font-thin">而是在教练的指导下，扎入水中练习。</p>
        </div>
      </div>

      <!-- crouse show group -->
      <div class="u-course-show">
        <div class="u-course-group">
          <div class="group-content">
            <div class="group-title">
              课程
            </div>
            <b-nav class="group-nav">
              <b-nav-item active>New</b-nav-item>
              <b-nav-item>{{ $t("message.hello") }}</b-nav-item>
              <b-nav-item>法语</b-nav-item>
              <b-nav-item>编程</b-nav-item>
              <b-nav-item>逻辑学</b-nav-item>
              <b-nav-item>管理学</b-nav-item>
            </b-nav>
          </div>
        </div>
        <div class="course-list">
          <ul class="top-ul">
            <li class="course-item pointer">
              <div class="course-item-title">英文口语课</div>
              <img src="/static/home/course-item-test.png" alt="" class="course-item-img m-t" />
              <div class="course-item-desc p-t">和你一起练就靠谱英语</div>
              <div class="course-item-counts">

              </div>
            </li>
            <li class="course-item pointer">
              <div class="course-item-title">英文口语课</div>
              <img src="/static/home/course-item-test.png" alt="" class="course-item-img m-t" />
              <div class="course-item-desc p-t">和你一起练就靠谱英语</div>
              <div class="course-item-counts">

              </div>
            </li>
            <li class="course-item pointer">
              <div class="course-item-title">英文口语课</div>
              <img src="/static/home/course-item-test.png" alt="" class="course-item-img m-t" />
              <div class="course-item-desc p-t">和你一起练就靠谱英语</div>
              <div class="course-item-counts">

              </div>
            </li>
            <li class="course-item pointer">
              <div class="course-item-title">英文口语课</div>
              <img src="/static/home/course-item-test.png" alt="" class="course-item-img m-t" />
              <div class="course-item-desc p-t">和你一起练就靠谱英语</div>
              <div class="course-item-counts">

              </div>
            </li>
          </ul>

        </div>
      </div>
      <!-- end of crouse show group -->
      <!-- start of teacher group -->
      <div class="uband-teacher container">
        <div class="uband-teacher-content">
          <p class="text-c text-xl">牛人导师 精英教育</p>
          <p class="text-c text-md text-gray m-t-md p-b-md">友班的老师都为名校当中的佼佼者，且在专业领域有卓越成就</p>

          <div class="row m-t-xxl">
            <div class="col pointer">
              <img src="/static/home/header01.png" class="teacher-header block-center" alt="">
              <p class="text-c m-t-md">Luke Goodman</p>
              <p class="text-c">Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            </div>
            <div class="col pointer">
              <img src="/static/home/header02.png" class="teacher-header block-center" alt="">
              <p class="text-c m-t-md">Luke Goodman</p>
              <p class="text-c">Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            </div>
            <div class="col pointer">
              <img src="/static/home/header03.png" class="teacher-header block-center" alt="">
              <p class="text-c m-t-md">Luke Goodman</p>
              <p class="text-c">Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            </div>
            <div class="col pointer">
              <img src="/static/home/header01.png" class="teacher-header block-center" alt="">
              <p class="text-c m-t-md">Luke Goodman</p>
              <p class="text-c">Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            </div>            
              
          </div>
        </div>
      </div>
      <!-- end of teacher group -->
    </div>

  </div>
</template>


<script>
  //this is page's header
  import UHeader from '../components/u-header.vue'
  export default {
    components: {
      UHeader
    }
  }

</script>
<style lang="scss">
  @import "../../style/home/index.scss";

</style>
