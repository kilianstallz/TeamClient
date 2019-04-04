import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './_store/auth.module'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    window: {
      width: 0
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth
  }
})

export default store
