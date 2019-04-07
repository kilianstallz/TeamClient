// import router from '../router'
import ProfileService from '../_services/profile.service'

const state = {
  profile: null,

  fetchingProfile: false,
  errorMessage: ''
}
const getters = {
  isFetching: state => state.fetchingProfile,
  fullName: state => state.profile !== null ? `${state.profile.firstName} ${state.profile.lastName}` : '',
  teamName: state => state.profile !== null ? `${state.profile.team.name}` : ''
}

const mutations = {
  fetchRequest (state) {
    state.fetchingProfile = true
  },

  fetchSuccess (state, profile) {
    let teamName = profile.team.details.name || ''
    delete profile.team
    state.profile = { ...profile, team: { name: teamName } }
    state.fetchingProfile = false
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
      commit('fetchSuccess', data.user)
    } catch (e) {
      console.log(e)
      commit('fetchError', e)
    }
  },

  async updateUser ({ commit }, obj) {
    try {
      commit('fetchRequest')
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
