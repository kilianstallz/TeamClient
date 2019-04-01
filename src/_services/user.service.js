
import ApiService from './api.service'
import { TokenService } from './storage.service'

class AuthenticationError extends Error {
  constructor (errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.errorCode = errorCode
  }
}

const UserService = {
  /**
     * Login the user and store the access token to TokenService.
     *
     * @returns access_token
     * @throws AuthenticationError
    **/
  login: async function (email, password) {
    const requestData = {
      method: 'post',
      url: '/o/auth/login',
      data: {
        user: {
          email,
          password
        }
      }
    }

    try {
      const response = await ApiService.customRequest(requestData)

      TokenService.saveToken(response.data.user.token)
      ApiService.setHeader()

      ApiService.mount401Interceptor()

      // Return Token
      return response.data.user.token
    } catch (error) {
      const { message } = error.response.data.info.errors
      throw new AuthenticationError(error.response.status, message)
    }
  },

  /**
     * Login the user and store the access token to TokenService.
     *
     * @returns access_token
     * @throws AuthenticationError
    **/
  signup: async function (email, password) {
    const requestData = {
      method: 'post',
      url: '/o/auth/signup',
      data: {
        user: {
          email,
          password
        }
      }
    }

    try {
      const response = await ApiService.customRequest(requestData)

      TokenService.saveToken(response.data.user.token)
      ApiService.setHeader()

      ApiService.mount401Interceptor()

      // Return Token
      return response.data.user.token
    } catch (error) {
      const { message } = error.response.data.info.errors
      throw new AuthenticationError(error.response.status, message)
    }
  },

  /**
     * Logout the current user by removing the token from storage.
     *
     * Will also remove `Authorization Bearer <token>` header from future requests.
    **/
  logout () {
    // Remove the token and remove Authorization header from Api Service as well
    TokenService.removeToken()
    // TokenService.removeRefreshToken()
    ApiService.removeHeader()

    ApiService.unmount401Interceptor()
  }
}

export default UserService

export { UserService, AuthenticationError }
