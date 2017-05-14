// import Vue from 'vue';
import Resource from '@/resources/resource_todo';
import * as types from './mutations_type';

const state = {
  todos: [
    // {
    //   content: 'vue.js 2.0',
    //   done: true,
    // },
    // {
    //   content: 'vuex 2.0',
    //   done: false,
    // },
    // {
    //   content: 'vue-router 2.0',
    //   done: false,
    // },
    // {
    //   content: 'vue-resource 2.0',
    //   done: false,
    // },
    // {
    //   content: 'webpack',
    //   done: false,
    // },
  ],
};

const actions = {
  [types.GET_TODO]: ({ commit }) => {
    commit(
      types.GET_TODO,
      Resource.get({
        userId: 1,
      }),
    );
  },
  [types.ADD_TODO]: ({ commit }, payload) => {
    commit(
      types.ADD_TODO,
      Resource.save(
        {},
        {
          title: payload,
          body: payload,
          userId: 1,
        },
      ),
    );
  },

  [types.DELETE_TODO]: ({ commit }, index) => {
    commit(
      types.DELETE_TODO,
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(index);
        }, 1000);
      }),
    );
  },

  [types.TOGGLE_TODO]: ({ commit }, index) => {
    commit(
      types.TOGGLE_TODO,
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(index);
        }, 1000);
      }),
    );
  },
};

const mutations = {
  /** GET_TODO */
  [types.GET_TODO]: () => {},
  [`${types.GET_TODO}_SUCCEEDED`]: (s, payload) => {
    state.todos = payload.data.map(d => ({ content: d.title, done: false }));
  },
  [`${types.GET_TODO}_FAILED`]: (s, err) => {
    console.log(err);
  },

  /** ADD_TODO */
  [types.ADD_TODO]: () => {},
  [`${types.ADD_TODO}_SUCCEEDED`]: (s, payload) => {
    s.todos.push({
      content: payload.data.title,
    });
  },
  [`${types.ADD_TODO}_FAILED`]: (s, err) => {
    console.log(err);
  },

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
