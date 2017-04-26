import * as types from './mutations_type';

export const state = {
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

export const mutations = {

  [types.ADD_TODO]: (s, payload) => {
    s.todos.push({
      content: payload,
      done: false,
    });
  },

  [types.DELETE_TODO](s, index) {
    s.todos.splice(index, 1);
  },

  [types.TOGGLE_TODO](s, index) {
    const todo = s.todos[index];
    todo.done = !todo.done;
  },

};
