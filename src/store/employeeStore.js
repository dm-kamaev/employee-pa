import employeeTypes from '@/store/employeeTypes.js';

const state = {
  employeeId: null
};

const mutations = {
  [employeeTypes.SET_EMPLOYEE_ID]: function (state, { employeeId }) {
    state.employeeId = employeeId;
  }
};

const actions = {};

const getters = {
  employeeId: function (state, getters) {
    return state.employeeId;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  modules: {}
};
