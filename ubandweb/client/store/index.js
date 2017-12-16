import Vue from 'vue'
import Vuex from 'vuex'


import studyPages from './modules/studyPages'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {

    studyPages
  }
})

export default store
