import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import VuexPromiseMiddleware from 'vuex-promise-middleware';

import todo from './module_todo';
import ui from './module_ui';

Vue.use(Vuex);

const plugins = [createLogger(), VuexPromiseMiddleware];

export default new Vuex.Store({

  /** Use modules in here to make vuex-promise-middleware working. */
  modules: {
    ui,
    todo,
  },
  plugins,
  strict: true,
});

