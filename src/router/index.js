import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'

import Router from 'vue-router'
import Hello from '../components/Hello'
import settings from '../components/settings'
import timer from '../components/timer'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VueResource)

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
    {
      path: '/timer',
      name: 'timer',
      component: timer
    },
  ]
})
