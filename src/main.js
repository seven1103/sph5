// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  { AlertPlugin,ConfirmPlugin } from 'vux'
import store from '@/store'
import fn from '@/utils/function'
import * as filters from '@/utils/filter'

Vue.config.productionTip = false
Vue.use(require('vue-cookies'))
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
/* eslint-disable no-new */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.prototype.$fn = fn
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
