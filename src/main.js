// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vuexRouterSync from 'vuex-router-sync';
import App from './App';
import router from './router';

import authTypes from '@/store/authTypes.js';
import store from '@/store/injectStore.js';
import VueScrollTo from 'vue-scrollto';

import moment from 'moment';
moment.locale('ru');

Vue.config.productionTip = false;

vuexRouterSync.sync(store, router);

Vue.use(VueScrollTo);


// COPY START STATE FOR LOGOUT
// window.initialStateCopy = JSON.parse(JSON.stringify(store.state))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

store.dispatch(authTypes.SIGN_IN);
