<template>
  <div class="u-header" v-bind:class="{notTop: notTop}">
    <div class="logo">
      <img v-bind:src="logoSrc" alt="">
    </div>
    <b-nav class="u-nav">
      <b-nav-item @click="home" active v-if="activeItem=='/'">{{ $t("menu.course") }}</b-nav-item>
      <b-nav-item @click="home" v-if="activeItem!='/'">{{ $t("menu.course") }}</b-nav-item>

      <b-nav-item href="http://blog.gambition.cn">{{ $t("menu.blog") }}</b-nav-item>

      <b-nav-item @click="aboutus" active v-if="activeItem=='/aboutus'">{{ $t("menu.aboutus") }}</b-nav-item>
      <b-nav-item @click="aboutus" v-if="activeItem!='/aboutus'">{{ $t("menu.aboutus") }}</b-nav-item>
    </b-nav>
    <!-- <b-button class="login-btn u-btn u-btn-primary" @click="login">
      登录
    </b-button> -->
    <b-button to="/studyPage" class="login-btn u-btn u-btn-primary">
      登录
    </b-button>
  </div>
</template>

<script>
  export default {
    name: "u-header",
    created() {
      window.addEventListener('scroll', this.handleScroll);
       let path = this.$store.state.route.path;
      this.$store.dispatch('initCurrPage',{'path':path});
    },
    data() {
      return {
        notTop: false,
        whiteLogo: 'static/home/uband-web-logo.png',
        blackLogo: 'static/home/uband-web-logo-black.png',
        logoSrc: 'static/home/uband-web-logo.png',
        activeItem: this.$store.state.config.currentPage
      }
    },
    methods: {
      login: function(){
        this.$store.dispatch('getWechatAuth',{
          url:'/redirection'
        })
      },
      aboutus: function(){
        this.$router.push('/aboutus')
        this.$store.dispatch('changePage',{'page':'/aboutus'});
      },
      home:function(){
        this.$router.push('/')
        this.$store.dispatch('changePage',{'page':'/'});
      },
      handleScroll: function (e) {
        let scrollTop = window.pageYOffset;
        if (scrollTop > 150) {
          this.notTop = true;
          this.logoSrc = this.blackLogo
          // this.$i18n.locale = 'en'
        }else{
          this.notTop = false;
          this.logoSrc = this.whiteLogo
          // this.$i18n.locale = 'cn'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/components/u-header.scss";

</style>
