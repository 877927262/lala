// import studyPagesService from '../../service/studyPages-service'
import 'whatwg-fetch';

const state={
  //控制是否显示排班表
  isShow:false,
  //预约日期
  appointmentDate:'',

  //预约上午还是下午
  appointmentTime:'',

  //预约大夫
  appointmentDoctorId:null,

  //要预约的病人
  appointmentUserId:null,



  // 当前大夫的工作信息
  theDoctor:[
    // {
    // date:'星期一',
    // am:'11人',
    // pm:'111人'
    // }
  ],
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
  // 挂号之后返回的挂号信息
  result: ' '




};
const getters={

};
const mutations={
  //设置预约日期
  setAppointmentDate(state,{appointmentDate}){
    state.appointmentDate=appointmentDate;

  },
  //设置预约上午还是下午
  setAppointmentTime(state,{appointmentTime}){
    state.appointmentTime=appointmentTime;

  },
  //设置要预约的大夫的id
  setAppointmentDoctorId(state,{appointmentDoctorId}){
    state.appointmentDoctorId=appointmentDoctorId;
  },
  //设置要挂号的用户的id
  setAppointmentUserId(state,{appointmentUserId}){
    state.appointmentUserId=appointmentUserId;
  },
  //显示科室排班表
  setShowTrue(state){
    state.isShow=true;
  },
  //隐藏科室排班表
  setShowFalse(state){
    state.isShow=false;
  },

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

  },

  setCurrentDoctorWorkList(state,{theDoctor}){
    state.theDoctor=theDoctor;

  },
  setAppointment(state,{result}){
    state.result=result;
  }
};
const actions={
  // 查询用户的挂号信息
  getAppointment({commit},params){
    fetch('http://127.0.0.1:3000/appointment/getUserAppointment?&userId='+params.appointmentUserId).then(function(response) {
     response.json().then(function(res){
        commit('setAppointment',{result:res[0]})

     }).catch(function (err) {
       throw err;
     })
    }).catch(function (err) {
      throw err;
    })
  },
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
  },
  //theDoctor当前大夫的工作信息
  getCurrentDoctorWorkList({commit},params){
    fetch('http://127.0.0.1:3000/appointment/getCurrentDoctorWorkList?&doctorId='+params.doctorId).then(function(response) {
      response.json().then(function(res){
        commit('setCurrentDoctorWorkList',{theDoctor:res})

      }).catch(function (err) {
        throw err;
      })
    }).catch(function (err) {
      throw err;
    })
  },

  //新增一条用户信息
  addUser({commit},params){
    return new Promise((resolve,reject)=>{
      let datas={
        name:params.name,
        card_id:+params.card_id,
        age:params.age,
        gender:params.gender
      };
      fetch('http://127.0.0.1:3000/appointment/addUser', {
        method: "POST",
        body: JSON.stringify(datas),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {
          resolve();
      }).catch(function (err) {
        throw err;
      })
    })

  },

  //查询新增用户的id
  selectUserId({commit},params){
    return new Promise((resolve,reject)=>{
      fetch('http://127.0.0.1:3000/appointment/selectUserId?&card_id='+params.card_id).then(function(response) {
        response.json().then(function(res){
          let userId=res[0].id;
          //将挂号用户的id放到state中去
          commit('setAppointmentUserId',{appointmentUserId:userId})
          resolve();
        }).catch(function (err) {
          throw err;
        })
      }).catch(function (err) {
        throw err;
      })
    })

  },

  //进行挂号
    registration({commit},params){
      return new Promise((resolve,reject)=>{
        let datas={
          appointmentDate:params.appointmentDate,
          appointmentTime:params.appointmentTime,
          appointmentDoctorId:params.appointmentDoctorId,
          appointmentUserId:params.appointmentUserId
        };
        fetch('http://127.0.0.1:3000/appointment/registration', {
          method: "POST",
          body: JSON.stringify(datas),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(function(response) {
          resolve(response);
        }).catch(function (err) {
          throw err;
        })
      })

    }

}

export default {
  state,
  getters,
  actions,
  mutations
}
