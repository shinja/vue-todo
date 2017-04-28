import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import VuexPromiseMiddleware from 'vuex-promise-middleware';
import state from './state';
import mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

Vue.use(Vuex);

const plugins = [createLogger(), VuexPromiseMiddleware];

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins,
  strict: true,
});
