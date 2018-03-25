//这是路由页面
import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home'
//将学习页面引入
import StudyPage from '../views/studyPages/studyPage'
//将主要板块引入
import Main from '../views/studyPages/main'
// 将详情页面引入
import Detail from '../views/studyPages/detail'
//将主页引入
import Homepage from '../views/studyPages/homepage'
//将科室列表引入
import DepartmentList from '../views/studyPages/departmentList'
//将病症列表引入
import IllnessList from '../views/studyPages/illnessList'
import getUserInfo from '../views/studyPages/getUserInfo'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/getUserInfo',
      component: getUserInfo
    },
    {
      path: '/studyPage',
      redirect:'/studyPage/main',
      component: StudyPage,
      children:[{
        path: 'main',
        component: Main,
        redirect:'main/departmentList',
        children:[{
          path:'departmentList',
          component:DepartmentList
        },{
            path:'illnessList',
            component:IllnessList
        }]
      },{
        path: 'department/:departmentId',
        redirect:'department/:departmentId/homepage',
        component: Detail,
        children:[{
          path:'homepage',
          component:Homepage
        }]
      },{
        path: 'illness/:illnessId',
        redirect:'illness/:illnessId/homepage',
        component: Detail,
        children:[{
          path:'homepage',
          component:Homepage
        }]
      }]
  }]
})
