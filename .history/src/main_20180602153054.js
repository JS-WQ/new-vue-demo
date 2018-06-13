// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.scss'
import App from './App'
import AV from 'leancloud-storage'


var APP_ID = 'uYbyAtISGBqo5fqSx7S7coXe-gzGzoHsz'
var APP_KEY = 'bNSqKcbNOJz7ElpDXTNVJzRg'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
       
  },
  components: { App },
  template: '<app/>',
 
})
