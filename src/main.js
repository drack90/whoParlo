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

const firebaseConfig = {
    apiKey: "AIzaSyDQhDNui9HS0cwkZYXg7lxROmbtyiJmLbE",
    authDomain: "whosayparlo.firebaseapp.com",
    projectId: "whosayparlo",
    storageBucket: "whosayparlo.appspot.com",
    messagingSenderId: "536678387300",
    appId: "1:536678387300:web:5ca7478f93251ebb60d971"
};

new Vue({
    App,
    Bootstrap,
    router: router,
    firebase,
    firebaseConfig,
    render: h => h(App)
}).$mount('#app')