// import router from '../router'
import ProfileService from '../_services/profile.service'
import router from '../router'

const state = {
  user: null,
  isPremium: false,
  // Progress
  fetchingProfile: false,
  errorMessage: ''
}
const getters = {
  isFetching: state => state.fetchingProfile,
  user: state => state.user
}

const mutations = {
  fetchRequest (state) {
    state.fetchingProfile = true
  },

  fetchSuccess (state, response) {
    state.user = { ...response.user }
  },

  fetchError (state, errorMessage) {
    state.fetchingProfile = false
    state.errorMessage = errorMessage
  },

  logoutSuccess (state) {
    state.user = {}
  }
}

const actions = {
  async fetchProfile ({ commit }) {
    commit('fetchRequest')
    try {
      const data = await ProfileService.fetchProfile()
      commit('fetchSuccess', data)
      const { user } = data
      if (!user.team || !user.firstName || !user.lastName) {
        router.push('/welcome')
      }
    } catch (e) {
      console.log(e)
      commit('fetchError', e)
    }
  },

  async updateUser ({ commit }, obj) {
    try {
      const data = await ProfileService.patchProfile(obj)
      commit('fetchSuccess', data)
    } catch (e) {
      console.log(e)
      commit('fetchError', e)
    }
  }
}

export const user = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
