import Vue from 'vue'
import Router from 'vue-router'
const home = () => import( /* webpackChunkName: "homePage" */'./views/Home.vue')
const work = () => import( /* webpackChunkName: "workPage" */'./views/Work.vue')

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
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})
