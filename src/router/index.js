import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Category from '@/pages/Category'
import RoomList from '@/pages/RoomList'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/roomList/:gameId/:gameName',
      component: RoomList
    }
  ]
})
