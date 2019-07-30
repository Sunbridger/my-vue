import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Data from './components/Data';
Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/a',
      component: Data
    }
  ]
})

new Vue({
  render: h => h(App)
}).$mount('#app')
