import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  Bootstrap,

  render: h => h(App)
}).$mount('#app')
