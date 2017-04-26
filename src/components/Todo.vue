<template>
  <div id="todo">

    <md-layout>
        <md-input-container md-inline>
          <label>Add a todo...</label>
          <md-input v-model="todo"></md-input>
        </md-input-container>
        <md-button @click.native="addTodo" class="md-primary md-icon-button md-raised">
          <md-icon>add</md-icon>
        </md-button>
      </md-layout>

    <md-list v-for="(todo, index) in todos">
      <md-list-item>
        <span :class="{delete: todo.done }">{{todo.content}}</span>
        <div>
        <md-button @click.native="toggleTodo(index)" class="md-icon-button md-raised">
          <md-icon v-if="todo.done">restore</md-icon>
          <md-icon v-else>done</md-icon>
        </md-button>
        <md-button @click.native="deleteTodo(index)" class="md-icon-button md-raised md-warn">
          <md-icon>delete_forever</md-icon>
        </md-button>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  export default {
    name: 'todo',

    props: {
      todos: {
        type: Array,
        default: [{
            content: 'vue.js 2.0',
            done: true
          },
          {
            content: 'vuex 2.0',
            done: false
          },
          {
            content: 'vue-router 2.0',
            done: false
          },
          {
            content: 'vue-resource 2.0',
            done: false
          },
          {
            content: 'webpack',
            done: false
          }
        ]
      },
    },

    data() {
      return {
        todo: ''
      }
    },

    methods: {
      addTodo() {
        this.todo && this.todos.push({
          content: this.todo,
          done: false
        });
        this.todo = '';
      },
      deleteTodo(index) {
        this.todos.length > 0 && this.todos.splice(index, 1);
      },
      toggleTodo(index) {
        this.todos[index].done = !this.todos[index].done;
      },
    },
  };

</script>

<style lang="css" scoped>
  .delete {
    text-decoration: line-through;
    color: #ccc;
  }
</style>
