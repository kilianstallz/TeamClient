import TeamService from '../_services/team.service'

const state = {
  team: null,
  isFetching: false
}
const getters = {
  isFetching: state => state.isFetching,
  team: state => state.team || null
}
const mutations = {
  fetchRequest (state) {
    state.isFetching = true
  },
  fetchSuccess (state, team) {
    state.team = team
    state.isFetching = false
  }
}
const actions = {
  // Create new team
  async createTeam ({ commit }, teamObj) {
    try {
      const data = await TeamService.createTeam(teamObj)
      commit('SET_TEAM', data.team)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchTeam ({ commit }) {
    try {
      const data = await TeamService.getMyTeam()
      commit('fetchSuccess', data.team)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export const team = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
