//这是路由页面
import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home'
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
//将进行中引入进来
import underway from '../views/studyPages/underway'
//将已结束引进来
import over from '../views/studyPages/over'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      //学习页面
      path: '/studyPage',
      redirect:'/studyPage/course',
      component: StudyPage,
      children:[{
        path: 'course',
        component: Course,
        redirect:'course/underway',
        children:[{
          path:'underway',
          component:underway
        },{
            path:'over',
            component:over
        }]
      },{
        path: 'department/:departmentId',
        redirect:'department/:departmentId/homepage',
        component: MyCourse,
        children:[{
          path:'homepage',
          component:Homepage
        }]
      },{
        path: 'illness/:illnessId',
        redirect:'illness/:illnessId/homepage',
        component: MyCourse,
        children:[{
          path:'homepage',
          component:Homepage
        }]
      }]
  }]
})
