import Vue from 'vue'
import Vuex from 'vuex'
import flows from './modules/flows'
import dataLesson from './modules/dataLesson'
import bonus from './modules/bonus'
import getStudentsTariff from './modules/studentsTariff'
import teachers from './modules/teachers'



Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        dataLesson,
        flows,
        bonus,
        getStudentsTariff,
        teachers,
    
    }
})