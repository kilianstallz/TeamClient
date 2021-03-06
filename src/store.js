import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './_store/auth.module'
import { user } from './_store/user.module'
import { team } from './_store/team.module'

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
    async fetchBaseData ({ dispatch, state }) {
      await dispatch('user/fetchProfile')
      await dispatch('team/fetchTeam')
    }
  },
  modules: {
    auth,
    user,
    team
  }
})

export default store
