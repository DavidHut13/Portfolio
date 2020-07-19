import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';

import 'aos/dist/aos.css'



Vue.use(VueCarousel);
Vue.use(BootstrapVue)

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
