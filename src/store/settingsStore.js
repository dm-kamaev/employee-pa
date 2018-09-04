// import HandleErr from '@/lib/HandleErr.js';
import settingsTypes from '@/store/settingsTypes';
import authApi from '@/api/authApi.js';
import employeeTypes from '@/store/employeeTypes.js';
import employeeApi from '@/api/employeeApi.js';

const state = {
  loading: false,
  loaded: false,
  error: false
};

const mutations = {
  [settingsTypes.LOAD_SETTINGS_START]: function (state) {
    state.loading = true;
    state.error = false;
  },

  [settingsTypes.LOAD_SETTINGS_SUCCESS]: function (state) {
    state.loading = false;
    state.loaded = true;
  },

  [settingsTypes.LOAD_SETTINGS_ERROR]: function (state) {
    state.loading = false;
    state.error = true;
  }
};

const actions = {
  [settingsTypes.ACTION_LOAD_SETTINGS]: async function ({ state, commit, dispatch, rootState }) {
    if (state.loaded) {
      return;
    }

    commit(settingsTypes.LOAD_SETTINGS_START);

    try {
      const { employeeId } = await authApi.getAuthData();
      if (employeeId) {
        commit(employeeTypes.SET_EMPLOYEE_ID, { employeeId });
        commit(settingsTypes.LOAD_SETTINGS_SUCCESS);
        employeeApi.setId(employeeId);
      }
    } catch (err) {
      commit(settingsTypes.LOAD_SETTINGS_ERROR);
    }
  }
};

export default {
  state,
  mutations,
  actions
};
