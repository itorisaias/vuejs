import Vue from 'vue'

import {
  Plugin as PluginAxios
} from './axios'
import {
  Plugin as PluginVuetify,
  options as optionsVuetify
} from './vuetify'
import {
  Plugin as PluginSweetAlert,
  options as optionsAlert
} from './sweetAlert'

Vue.use(PluginVuetify, optionsVuetify)
Vue.use(PluginAxios)
Vue.use(PluginSweetAlert, optionsAlert)
