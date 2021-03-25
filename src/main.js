import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css'
import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'
import router from '../src/router/index'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
    App,
    Bootstrap,
    router: router,
    firebase,
    render: h => h(App)
}).$mount('#app')