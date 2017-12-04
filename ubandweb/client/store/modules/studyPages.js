import 'whatwg-fetch';
import studyPagesService from '../../service/studyPages-service'

const state={

};
const getters={

};
const mutations={

};
const actions={
  getClazzList({commit}, params){
    studyPagesService.getClazzList(params.status, params.token).then(function(res){

    }).catch(function(err){
      throw err;
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
