import Vue from 'vue'
import Vuetify from 'vuetify'

import Router from 'vue-router'
import Hello from '../components/Hello'
import settings from '../components/settings'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/settings',
      name: 'Settings',
      component: settings
    },
  ]
})
