const state = {
  token: 'Token Init'
}

const mutations = {
  setToken (state, token) {
    state.token = token
  },
  resetToken (state) {
    state.token = ''
  }
}

const actions = {
  async login ({ commit }, user) {
    commit('setToken', user)
  },
  async register ({ commit }, user) {
    commit('setToken', 'tokenRegistrar')
  },
  logout ({ commit }) {
    commit('resetToken')
  }
}

const getters = {
  isLoggedIn (state) {
    if (!state.token) return false
    return true
  },
  currentUser (state) {
    if (!state.token) return {}
    return { name: 'Itor Isaias', email: 'itor.isaias@gmail.com' }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
