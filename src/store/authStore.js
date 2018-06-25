import settingsTypes from '@/store/settingsTypes.js'
import authTypes from '@/store/authTypes.js'
// import authApi from '@/api/authApi.js'

// const resetState = function () {
//   window.store.replaceState(JSON.parse(JSON.stringify(window.initialStateCopy)))
// }

const state = {
  loggedIn: false
}

const mutations = {
  // [authTypes.SIGN_OUT]: function(state) {
  //   state.loggedIn = false
  // },
  [authTypes.SIGN_IN]: function (state) {
    state.loggedIn = true
  }
}

const actions = {
  // async signOut ({ dispatch }) {
  //   await authApi.logout()

  //   dispatch('cleanCookies')
  //   resetState()
  // },

  [authTypes.SIGN_IN]: async function ({ commit, dispatch }) {
    commit(authTypes.SIGN_IN);
    try {
      await dispatch(settingsTypes.ACTION_LOAD_SETTINGS)
    } catch (err) {
      console.error(err);
    }
  }
}


export default {
  state,
  mutations,
  actions
}
