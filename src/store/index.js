import Vue from 'vue'
import Vuex from 'vuex'
import flows from './modules/flows'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    flows,
  }
})
