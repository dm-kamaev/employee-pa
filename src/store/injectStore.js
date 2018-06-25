// MOUNT STORE

import Vue from 'vue'
import Vuex from 'vuex'

import authStore from '@/store/authStore.js'
import settingsStore from '@/store/settingsStore.js'
import employeeStore from '@/store/employeeStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    employee: employeeStore,
    auth: authStore,
    settings: settingsStore
  }
})
