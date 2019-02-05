import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import ThreadShow from '@/pages/PageThreadShow'
import Forum from '@/pages/PageForum'
import Category from '@/pages/PageCategory'
import Profile from '@/pages/PageUserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile,
      props: true

    },
    {
      path: '/me/edit',
      name: 'ProfileEdit',
      component: Profile,
      props: {
        edit: true
      }
    },
    {
      path: '*',
      name: 'NotFound',
      redirect: {name: 'Home'}
    }
  ],
  mode: 'history'
})
