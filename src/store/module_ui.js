import * as types from './mutations_type';

const state = {
  fetchPending: false,
  fetchError: null,
};

const actions = {
  [types.START_LOADING]: ({ commit }) => {
    commit(types.START_LOADING, null);
  },

  [types.STOP_LOADING]: ({ commit }, payload) => {
    commit(types.STOP_LOADING, payload);
  },
};

const mutations = {
  [types.START_LOADING]: (s, payload) => {
    state.fetchPending = true;
    state.fetchError = payload;
  },

  [types.STOP_LOADING]: (s, payload) => {
    state.fetchPending = false;
    if (!payload.ok) state.fetchError = payload;
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
