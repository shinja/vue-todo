<template>
  <md-layout md-gutter>
    <md-layout md-align="center" md-flex="100">
      <div id="app">
        <img src="./assets/logo.png">
        <todo-header></todo-header>
        <router-view></router-view>
      </div>
    </md-layout>
  </md-layout>
</template>

<script>
  import TodoHeader from '@/components/TodoHeader';

  export default {
    name: 'app',
    components: {
      TodoHeader,
    },
  };
</script>

<!-- import in the main App -->
<style src="vue-material/dist/vue-material.css" />

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
