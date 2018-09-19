import Vue from 'vue'
import Vuex from 'vuex'
import tabbar from './tabbar/tabbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tabbar
  }
})
