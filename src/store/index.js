import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
// import plugins from './plugins'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules,
    // plugins, // TODO plugins
    actions,
    getters,
    mutations,
    state,
    strict: process.env.NODE_ENV !== 'production'
  })
}
