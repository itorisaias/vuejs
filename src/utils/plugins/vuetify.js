import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const options = {
  theme: {
    primary: '#00539F',
    secondary: colors.blueGrey.lighten2,
    accent: colors.blue.lighten3,
    error: colors.red.darken3,
    info: colors.blue.darken2,
    success: colors.green.darken3,
    warning: colors.yellow.accent4
  },
  customProperties: true,
  iconfont: 'md'
}

const Plugin = Vuetify

export {
  Plugin,
  options
}
