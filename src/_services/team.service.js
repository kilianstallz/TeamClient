import ApiService from './api.service'

const TeamService = {

  /*
    @param
      team[Object]
    @returns
      data[Object]
  */
  createTeam: async function (teamObj) {
    try {
      const response = await ApiService.post('/teams/action/new', { team: teamObj })
      return response.data
    } catch (e) {
      console.log(e)
      throw new Error(e)
    }
  },

  getMyTeam: async function () {
    try {
      const response = await ApiService.get('/teams/get/myTeam')
      return response.data
    } catch (e) {
      console.log(e)
      throw new Error(e)
    }
  }
}

export default TeamService

export { TeamService }
