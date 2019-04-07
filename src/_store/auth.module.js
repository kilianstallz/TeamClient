
import { UserService, AuthenticationError } from '../_services/user.service'
import { TokenService } from '../_services/storage.service'
import router from '../router'

const state = {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationErrorCode: 0,
  authenticationError: ''
}

const getters = {
  loggedIn: (state) => {
    return !!state.accessToken
  },

  authenticationErrorCode: (state) => {
    return state.authenticationErrorCode
  },

  authenticationError: (state) => {
    return state.authenticationError
  },

  authenticating: (state) => {
    return state.authenticating
  }
}

const actions = {
  async login ({ commit }, { email, password }) {
    commit('loginRequest')

    try {
      const token = await UserService.login(email, password)
      commit('loginSuccess', token)

      return true
    } catch (e) {
      if (e instanceof AuthenticationError) {
        commit('loginError', { errorCode: e.errorCode, errorMessage: e.message })
      }

      return false
    }
  },

  async signup ({ commit }, { email, password }) {
    commit('loginRequest')

    try {
      const token = await UserService.signup(email, password)
      commit('loginSuccess', token)
      return true
    } catch (e) {
      if (e instanceof AuthenticationError) {
        commit('loginError', { errorCode: e.errorCode, errorMessage: e.message })
      }

      return false
    }
  },

  forgotPassword ({ commit }, email) {
    try {
      const response = UserService.forgotPassword(email)
      return response
    } catch (e) {
      return false
    }
  },

  resetPassword ({ commit }, { token, password }) {
    try {
      const res = UserService.resetPassword(token, password)
      return res
    } catch (e) {
      throw new Error(e)
    }
  },

  logout ({ commit }) {
    UserService.logout()
    commit('logoutSuccess')
    router.push('/login')
  }
}

const mutations = {
  loginRequest (state) {
    state.authenticating = true
    state.authenticationError = ''
    state.authenticationErrorCode = 0
  },

  loginSuccess (state, accessToken) {
    state.accessToken = accessToken
    state.authenticating = false
  },

  loginError (state, { errorCode, errorMessage }) {
    state.authenticating = false
    state.authenticationErrorCode = errorCode
    state.authenticationError = errorMessage
  },

  logoutSuccess (state) {
    state.accessToken = ''
  }
}

export const auth = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
