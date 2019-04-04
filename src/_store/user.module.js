// import router from '../router'
import ProfileService from '../_services/profile.service'
import router from '../router'

const state = {
  user: {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    sportType: null,
    team: null
  },
  // Progress
  fetchingProfile: false,
  errorMessage: ''
}
const getters = {
  email: state => { return state.user.email },
  fullName: state => { return `${state.user.firstName} ${state.user.lastName}` },
  sportType: state => { return state.user.sportType },
  team: state => state.user.team,
  isFetching: state => state.fetchingProfile
}
const mutations = {
  fetchRequest (state) {
    state.fetchingProfile = true
  },

  fetchSuccess (state, response) {
    state.user = response.user
  },

  fetchError (state, errorMessage) {
    state.fetchingProfile = false
    state.errorMessage = errorMessage
  },

  logoutSuccess (state) {
    state.email = ''
    state.firstName = ''
    state.lastName = ''
    state.sportType = null
    state.team = null
    // Progress
    state.fetchingProfile = false
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
