import Vue from 'vue'
import {
  sync
} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import bootstrap from './bootstrap'
import vuescroll from 'vue-scroll'
import i18n from 'utilities/i18n-config'

Vue.use(vuescroll)
sync(store, router, bootstrap, vuescroll)

const app = new Vue({
  router,
  store,
  bootstrap,
  vuescroll,
  i18n,
  ...App
}).$mount('#app')

document.addEventListener('contextmenu', event => {
  event.preventDefault()
  event.stopPropagation()
})
document.addEventListener('mousedown', e => {
  // e.preventDefault()
  e.stopPropagation()

})

export {
  app,
  router,
  store,
  bootstrap,
  vuescroll,
  i18n
}
