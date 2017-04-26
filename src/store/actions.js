// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type';

export const addTodo = ({ commit }, payload) => {
  commit(types.ADD_TODO, payload);
};

export const deleteTodo = ({ commit }, index) => {
  commit(types.DELETE_TODO, index);
};

export const toggleTodo = ({ commit }, index) => {
  commit(types.TOGGLE_TODO, index);
};
