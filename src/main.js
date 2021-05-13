import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import store from './store'
import axios from 'axios'
import JSONEditor from 'jsoneditor'



import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jsoneditor/dist/jsoneditor.min.css'
//import Bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import router from '../src/router/index'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
    //Vue.use(ToastPlugin)
Vue.use(PortalVue)



new Vue({
    App,
    //Bootstrap,
    router: router,
    store,
    axios,
    JSONEditor,
    render: h => h(App)
}).$mount('#app')