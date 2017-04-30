<template>
  <div id="todo">
    <div>Count: {{count}}</div>
    <div>Done: {{doneConut}}</div>
    <md-layout>
      <md-input-container md-inline>
        <label>Add a todo...</label>
        <md-input v-model="todo"></md-input>
      </md-input-container>
      <md-button @click.native="add" class="md-primary md-icon-button md-raised">
      <!-- <md-button @click.native="todo && addTodo(todo)" class="md-primary md-icon-button md-raised"> -->
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
  import {
    mapGetters,
    mapActions,
    mapState,
  } from 'vuex'

  export default {
    name: 'todo',

    data() {
      return {
        todo: '',
      }
    },

    computed: {
      ...mapGetters({
        count: 'getTodoCount',
        doneConut: 'getDoneCount',
      }),
      ...mapState({
        todos: (state) => state.todo.todos
      }) //can NOT put in data
    },

    methods: {

      add() {
        this.todo && this.addTodo(this.todo);
        this.todo = '';
      },

      ...mapActions([
        'addTodo',
        'deleteTodo',
        'toggleTodo',
      ]),
    },
  };

</script>

<style lang="css" scoped>
  .delete {
    text-decoration: line-through;
    color: #ccc;
  }

</style>
