<template>
    <div class="redirection">
        <div class="container">
            <div class="content-container">
                <div class="content-info">
                    <span class="content-text">登录成功！跳转中...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      mounted() {
        let code = '1234'//this.$route.query.code;
        this.$store.dispatch('login', {
          code: code
        })
      }
    }
</script>

<style lang="scss">
    @import "../../style/components/redirection.scss";
</style>