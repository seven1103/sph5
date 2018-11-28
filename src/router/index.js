import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
    }
  ]
})
