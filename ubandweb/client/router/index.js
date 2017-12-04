//这是路由页面
import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home'
import Aboutus from '../views/intro/aboutus'
import Redirection from '../components/redirection'
//将学习页面引入
import StudyPage from '../views/studyPages/studyPage'
//将课程页面引入
import Course from '../views/studyPages/course'
// 将我的课程页面引入
import MyCourse from '../views/studyPages/mycourse'
//将课程主页引入
import Homepage from '../views/studyPages/homepage'
//将学习任务引入
import StudyTask from '../views/studyPages/studyTask'
//将任务详情页面引入
import TaskDetails from '../views/studyPages/taskDetails'


Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/aboutus',
      component: Aboutus
    },
    {
      path: '/redirection',
      component: Redirection
    },
    {
      //学习页面
      path: '/studyPage',
      redirect:'/studyPage/course',
      component: StudyPage,
      children:[{
        path: 'course',
        component: Course
      },{
        path: 'myCourse',
        redirect:'myCourse/homepage',
        component: MyCourse,
        children:[{
          path:'homepage',
          component:Homepage
        },{
          path:'studyTask',
          component:StudyTask
        },{
          path:'taskDetails',
          component:TaskDetails
        }]
      }]
    }
  ]
})
