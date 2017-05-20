<template>
  <div id="todo">
    <div>Count: {{count}}</div>
    <div>Done: {{doneConut}}</div>
    <md-layout>
      <md-input-container md-inline>
        <label>Add a todo...</label>
        <md-input v-model="todo"></md-input>
      </md-input-container>
      <md-button @click.native="addTodo" class="md-primary md-icon-button md-raised">
      <!-- <md-button @click.native="todo && addTodo(todo)" class="md-primary md-icon-button md-raised"> -->
        <md-icon>add</md-icon>
      </md-button>
    </md-layout>

    <md-list>
      <md-list-item v-for="(todo, index) in todos">
        <span :class="{delete: todo.done }">{{todo.content}}</span>
        <div>
          <md-button @click.native="TOGGLE_TODO(index)" class="md-icon-button md-raised">
            <md-icon v-if="todo.done">restore</md-icon>
            <md-icon v-else>done</md-icon>
          </md-button>
          <md-button @click.native="DELETE_TODO(index)" class="md-icon-button md-raised md-warn">
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
  } from 'vuex';

  import * as types from '@/store/mutations_type';

  export default {
    name: 'todo',

    mounted() {
      console.log('Todo mounted');
      this.GET_TODO();
    },

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

      addTodo() {
        this.todo && this.ADD_TODO(this.todo);
        this.todo = '';
      },

      ...mapActions(types),
    },
  };

</script>

<style lang="css" scoped>
  .delete {
    text-decoration: line-through;
    color: #ccc;
  }

</style>
