import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading);







Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
