import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
  en: {
    message: {
      hello: 'hello world'
    },
    menu: {
      course: 'Courses',
      blog: 'Blog',
      aboutus: 'Aboutus'
    }
  },
  cn: {
    message: {
      hello: '你好'
    },
    menu: {
      course: '主页',
      blog: '友班博客',
      aboutus: '关于我们'
    }
  }
}

const i18n = new VueI18n({
  locale: 'cn',
  messages
})

export default i18n
