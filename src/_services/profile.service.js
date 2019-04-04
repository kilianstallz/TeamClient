import ApiService from './api.service'

const ProfileService = {
  fetchProfile: async function () {
    const requestData = {
      method: 'get',
      url: '/o/auth/me'
    }

    try {
      const response = await ApiService.customRequest(requestData)
      return response.data
    } catch (error) {
      // const { message } = error.response.data.info.errors
      throw new Error(error)
    }
  },

  patchProfile: async function (data) {
    try {
      const response = await ApiService.patch('/o/auth/me', data)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default ProfileService

export { ProfileService }
