import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

export function createRouter () {
  const router = new Router({ routes })
  return router
}
