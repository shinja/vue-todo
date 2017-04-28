import * as types from './mutations_type';

const pending = (s) => {
  const state = s;
  state.fetchPending = true;
  state.fetchError = null;
};

const done = (s, err) => {
  const state = s;
  state.fetchPending = false;
  state.fetchError = err;
};

export default {

  [types.ADD_TODO]: pending,
  [types.DELETE_TODO]: pending,
  [types.TOGGLE_TODO]: pending,

  [`${types.ADD_TODO}_SUCCEEDED`]: (s, payload) => {
    const state = s;
    done(state, null);
    state.todos.push({
      content: payload,
      done: false,
    });
  },

  [`${types.DELETE_TODO}_SUCCEEDED`]: (state, index) => {
    done(state, null);
    state.todos.splice(index, 1);
  },

  [`${types.TOGGLE_TODO}_SUCCEEDED`]: (state, index) => {
    done(state, null);
    const todo = state.todos[index];
    todo.done = !todo.done;
  },

};
