import * as types from './mutations_type';

const state = {
  todos: [
    {
      content: 'vue.js 2.0',
      done: true,
    },
    {
      content: 'vuex 2.0',
      done: false,
    },
    {
      content: 'vue-router 2.0',
      done: false,
    },
    {
      content: 'vue-resource 2.0',
      done: false,
    },
    {
      content: 'webpack',
      done: false,
    },
  ],
};

const actions = {
  [types.ADD_TODO]: ({ commit }, payload) => {
    commit('START_LOADING'); // should move to fetch API.
    commit(
      types.ADD_TODO,
      new Promise((resolve) => {
        setTimeout(() => {
          commit('STOP_LOADING'); // should move to fetch API.
          resolve(payload);
        }, 1000);
      }),
    );
  },

  [types.DELETE_TODO]: ({ commit }, index) => {
    commit('START_LOADING');
    commit(
      types.DELETE_TODO,
      new Promise((resolve) => {
        setTimeout(() => {
          commit('STOP_LOADING');
          resolve(index);
        }, 1000);
      }),
    );
  },

  [types.TOGGLE_TODO]: ({ commit }, index) => {
    commit('START_LOADING');
    commit(
      types.TOGGLE_TODO,
      new Promise((resolve) => {
        setTimeout(() => {
          commit('STOP_LOADING');
          resolve(index);
        }, 1000);
      }),
    );
  },
};

const mutations = {
  /** ADD_TODO */
  [types.ADD_TODO]: () => {},
  [`${types.ADD_TODO}_SUCCEEDED`]: (s, payload) => {
    s.todos.push({
      content: payload,
    });
  },
  [`${types.ADD_TODO}_FAILED`]: () => {},

  /** DLETE_TODO*/
  [types.DELETE_TODO]: () => {},
  [`${types.DELETE_TODO}_SUCCEEDED`]: (s, index) => {
    s.todos.splice(index, 1);
  },
  [`${types.DELETE_TODO}_FAILED`]: () => {},

  /** TOGGLE_TODO*/
  [types.TOGGLE_TODO]: () => {},
  [`${types.TOGGLE_TODO}_SUCCEEDED`]: (s, index) => {
    const todo = s.todos[index];
    todo.done = !todo.done;
  },
  [`${types.TOGGLE_TODO}_FAILED`]: () => {},
};

const getters = {
  getTodoCount: s => s.todos.length,
  getDoneCount: s => s.todos.filter(todo => todo.done).length,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
