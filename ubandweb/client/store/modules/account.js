import router from '../../router'
import AccountService from '../../service/account-service'

const state = {
  'token': window.localStorage.getItem('token'),
  'username': window.localStorage.getItem('username')
}

const mutations = {
  login (state, {
    token,
    username
  }) {
    state.token = token
    state.username = username
  },
  logout (state) {
    state.token = ''
    state.username = ''
  }
}

const actions = {
  // 跳转至二维码页面
  getWechatAuth ({
    commit
  }, params) {
    console.log('ss')
    router.push('/redirection')
    // 获取微信登陆地址
    // AccountService.getWechatAuth(params.url).then(function (res) {
    //   // 跳转到微信扫描页面
    //   console.log('sss');
    // }).catch(function (err) {
    //   console.log(err)
    // })
  },

  // 登录，获取token
  login ({
    commit
  }, params) {
    let token, username
    // 获取了登陆的token,username
    // 模拟换取了token
    console.log('开始设置token 和 username')
    token = '1234'
    window.localStorage.setItem('username', username)
    router.push('/aboutus')
    commit('login', {
      token: token,
      username: username
    })
    // AccountService.wechatLogin(params.code).then(res => {
    //   token = res.headers.get('X-Auth-Token')
    //   window.localStorage.setItem('token', token)
    //   return res.json()
    // }).then(json => {
    //   if (json.code === 200) {
    //     username = json.data.name
    //     img = json.data.headImgUrl
    //     window.localStorage.setItem('username', username)
    //     window.localStorage.setItem('img', img)

    //     commit('login', {
    //       token: token,
    //       username: username,
    //       img: img
    //     })
    //     router.push('/clazz-list')
    //   }
    // })
    //   .catch(err => {
    //     console.log(err)
    //   })
  },

  logout ({
    commit
  }) {
    commit('logout')
    window.localStorage.clear()
  }
}

export default {
  state,
  actions,
  mutations
}
