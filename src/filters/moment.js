import Vue from 'vue'
import moment from 'moment'

moment.locale('pt-BR')

Vue.filter('moment', function (date, format = '') {
  if (!date) return ''
  return moment(date).format(format)
})
