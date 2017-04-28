import Vue from 'vue';

import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
// import VuexPromiseMiddleware from 'vuex-promise-middleware';
import state from './state';
import mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

function vuexPromiseMiddleware(store) {
  store.subscribe((mutation) => {
    const isPromise = mutation.payload && mutation.payload.then;

    if (!isPromise) {
      return;
    }

    const succeded = `${mutation.type}_SUCCEEDED`;
    const failed = `${mutation.type}_FAILED`;

    mutation.payload.then((response) => {
      store.commit(succeded, response);
    }).catch((response) => {
      store.commit(failed, response);
    });
  });
}

Vue.use(Vuex);
const plugins = [createLogger(), vuexPromiseMiddleware];

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins,
  strict: true,
});
