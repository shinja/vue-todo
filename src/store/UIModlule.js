const START_LOADING = 'START_LOADING';
const STOP_LOADING = 'STOP_LOADING';

const state = {
  fetchPending: false,
  fetchError: null,
};

const actions = {
  [START_LOADING]: ({ commit }) => {
    commit(START_LOADING, null);
  },

  STOP_LOADING: ({ commit }, payload) => {
    commit(STOP_LOADING, payload);
  },
};

const mutations = {
  [START_LOADING]: (s, payload) => {
    state.fetchPending = true;
    state.fetchError = payload;
  },

  [STOP_LOADING]: (s, payload) => {
    state.fetchPending = false;
    state.fetchError = payload;
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
