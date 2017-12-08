import 'whatwg-fetch';
import studyPagesService from '../../service/studyPages-service'

const state={
  doctors:[{
    name:'张大夫',
    works:[{
      date:'星期一',
      am:'11人',
      pm:'111人'
    },{
      date:'星期二',
      am:'22人',
      pm:'222人'
    },{
      date:'星期三',
      am:'3人',
      pm:'333人'
    },{
      date:'星期四',
      am:'4人',
      pm:'444人'
    },{
      date:'星期五',
      am:'5人',
      pm:'555人'
    },{
      date:'星期六',
      am:'6人',
      pm:'666人'
    },{
      date:'星期日',
      am:'7人',
      pm:'777人'
    }]
  }],
  // 当前大夫的工作信息
  theDoctor:[{
    date:'星期一',
    am:'11人',
    pm:'111人'
  },{
    date:'星期二',
    am:'22人',
    pm:'222人'
  },{
    date:'星期三',
    am:'3人',
    pm:'333人'
  },{
    date:'星期四',
    am:'4人',
    pm:'444人'
  },{
    date:'星期五',
    am:'5人',
    pm:'555人'
  },{
    date:'星期六',
    am:'6人',
    pm:'666人'
  },{
    date:'星期日',
    am:'7人',
    pm:'777人'
  }]
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
