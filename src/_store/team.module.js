import TeamService from '../_services/team.service'

const state = {
  team: {
    name: null
  }
}
const getters = {
  team: state => state.team
}
const mutations = {
  SET_TEAM (state, team) {
    state.team = team
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
      commit('SET_TEAM', data.team)
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
