export const getTodoCount = state => state.todos.length;
export const getDoneCount = state => state.todos.filter(todo => todo.done).length;
