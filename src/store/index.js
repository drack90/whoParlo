import Vue from 'vue'
import Vuex from 'vuex'
import flows from './modules/flows'
import bonus from './modules/bonus'
import getStudentsTariff from './modules/studentsTariff'
import teachers from './modules/teachers'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        flows,
        bonus,
        getStudentsTariff,
        teachers,
    }
})