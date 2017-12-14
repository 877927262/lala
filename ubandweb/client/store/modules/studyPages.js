// import studyPagesService from '../../service/studyPages-service'
import 'whatwg-fetch';

const state={
  //大夫的所有信息
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
  },{
    name:'李大夫',
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
  }],
  //医院科室列表
  hospitalDepartmentList:[
    // {
    // id:'01',
    // name:'内科',
    // banner:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512111646555&di=34daf8b3e3d8889f4c3b594d4819f4c8&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2016%2F08%2F01%2Fb2abda9a1e99731a8d9bf34399af1003.jpg",
    // }
  ],
  //医院病症列表
  illnessList:[
    // {
    // id:'001',
    // name:'感冒',
    // banner:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512111646555&di=34daf8b3e3d8889f4c3b594d4819f4c8&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2016%2F08%2F01%2Fb2abda9a1e99731a8d9bf34399af1003.jpg'
    // }
  ],
  //当前大夫
  DepartmentDoctorList:[
  //   {
  //   id:'007',
  //   name:'张三疯'
  // }
  ],
  //当前病症大夫
  illnessDoctorList:[
    {
    id:'01',
    name:'大柱子'
  },{
    id:'02',
    name:'三柱子'
  }]
};
const getters={

};
const mutations={
  setAllDepartment(state,{hospitalDepartmentList}){
    state.hospitalDepartmentList=hospitalDepartmentList;
  },

  setAllIllness(state,{illnessList}){
    state.illnessList=illnessList;
  },

  setCurrentDepartmentDoctorList(state,{DepartmentDoctorList}){
    state.DepartmentDoctorList=DepartmentDoctorList;

  },

  setCurrentIllnessDoctorList(state,{illnessDoctorList}){
    state.illnessDoctorList=illnessDoctorList;

  }
};
const actions={
  getAllDepartment({commit}){
    fetch('http://127.0.0.1:3000/appointment/getAllDepartment').then(function(response) {
     response.json().then(function(res){
        commit('setAllDepartment',{hospitalDepartmentList:res})

     }).catch(function (err) {
       throw err;
     })
    }).catch(function (err) {
      throw err;
    })
  },
  getAllIllness({commit}){
    fetch('http://127.0.0.1:3000/appointment/getAllIllness').then(function(response) {
      response.json().then(function(res){
        commit('setAllIllness',{illnessList:res})

      }).catch(function (err) {
        throw err;
      })
    }).catch(function (err) {
      throw err;
    })
  },
  getCurrentDepartmentDoctorList({commit},params){
    fetch('http://127.0.0.1:3000/appointment/getCurrentDepartmentDoctorList?&departmentId='+params.departmentId).then(function(response) {
      response.json().then(function(res){
        commit('setCurrentDepartmentDoctorList',{DepartmentDoctorList:res})

      }).catch(function (err) {
        throw err;
      })
    }).catch(function (err) {
      throw err;
    })
  },
  getCurrentIllnessDoctorList({commit},params){
    fetch('http://127.0.0.1:3000/appointment/getCurrentIllnessDoctorList?&illnessId='+params.illnessId).then(function(response) {
      response.json().then(function(res){
        commit('setCurrentDepartmentDoctorList',{DepartmentDoctorList:res})

      }).catch(function (err) {
        throw err;
      })
    }).catch(function (err) {
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
