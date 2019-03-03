import '@babel/polyfill'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import './utils/plugins'
import './utils/filters'
import './utils/mixins'

import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'

import './registerServiceWorker'

Vue.config.productionTip = false

const store = createStore()
const router = createRouter()

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
