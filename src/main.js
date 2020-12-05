import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import SortedTablePlugin from 'vue-sorted-table'


Vue.config.productionTip = false
Vue.prototype.$http = axios


Vue.use(SortedTablePlugin);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

