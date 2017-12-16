import Vue from 'vue'
import Vuex from 'vuex'

import account from './modules/account'
import config from './modules/config'
import studyPages from './modules/studyPages'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    account,
    config,
    studyPages
  }
})

export default store
