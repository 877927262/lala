<!-- 这是学习页面的公用头部组件 -->
<template lang="html">
  <section>
    <div class="input_box">
      <table>
        <tr>
          <td>请输入您的身份证号：</td>
          <td><input type="text" v-model="userId"></td>
          <td><input type="button" value="查询" @click="search" class="search"></td>
        </tr>
      </table>
      <section>
        <span v-if="result">尊敬的{{result.user}},您预约了{{result.date}}日{{result.time}}的{{result.doctor}}大夫</span>
        <span v-if="result.result">诊断结果为{{result.result}}</span>
      </section>
    </div>
  </section>
</template>

<script>
  import 'whatwg-fetch';
  import Vue from 'vue';
  import Toasted from 'vue-toasted';
  Vue.use(Toasted);
export default {
  data(){
    return {
      userId: "",
      result: ""
    }
  },
  computed:{

  },
  methods:{
    search(){
      let userId = this.userId;
      let _this = this;
      fetch('http://127.0.0.1:3000/appointment/getUserAppointmentForUserId?&userId='+userId).then(function(response) {
        response.json().then(function(res){
          if (res.length == 0){
            // alert("您还没有挂号，请先去挂号")
            Vue.toasted.show('您还没有挂号，请先去挂号',{
              theme: "outline",
              position: "top-center",
              duration : 3000,
              className:'toastedErrStyle'
            });
          }else{
            _this.result = res[0];
            setTimeout(function () {
              _this.result = '';
            },5000)
          }
        }).catch(function (err) {
          throw err;
        })
      }).catch(function (err) {
        throw err;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .input_box{
    width: 500px;
    height: 300px;
    margin: 50px auto 0;
    border: 1px solid #cccccc;
    .search{
      cursor: pointer;
    }
  }
</style>
