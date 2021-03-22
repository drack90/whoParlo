import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Navbar from '../src/components/app/Navbar'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from '../src/router/index'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
    App,
    Bootstrap,
    router: router,
    Navbar,
    render: h => h(App)
}).$mount('#app')