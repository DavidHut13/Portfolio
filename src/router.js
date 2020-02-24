import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.vue'
import work from './views/work.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/work',
      name: 'work',
      component: work
    }
  ]
})
