import router from '../../router'

const state = {
  'currentPage': ''
}

const mutations = {
  changePage (state, {
    page
  }) {
    state.currentPage = page
  }
}

const actions = {
  changePage ({
    commit
  }, params) {
    commit('changePage', {
      page: params['page']
    })
  },
  initCurrPage ({
    commit
  }, params) {
    console.log(params.path)
    commit('changePage', {
      page: params.path
    })
  }
}

export default {
  state,
  actions,
  mutations
}
