<template>
  <md-layout md-gutter>
    <md-layout md-align="center" md-flex="100">
      <div id="app">
        <img src="./assets/logo.png">
        <todo-header></todo-header>
        <router-view></router-view>
        <!-- dialog -->
        <md-dialog ref="spinner">
          <md-dialog-content>
            <md-spinner md-indeterminate></md-spinner>
          </md-dialog-content>
        </md-dialog>
      </div>
    </md-layout>
  </md-layout>
</template>

<script>
import {
  mapState,
} from 'vuex';
import Vue from 'vue';
import TodoHeader from '@/components/TodoHeader';
import * as types from '@/store/mutations_type';

export default {
  name: 'app',

  mounted() {
    console.log('App.vue mounted');
    /** In this App.vue, we want to hook an interceptor for
     * popup a spinning in every vue-resource request. */
    Vue.http.interceptors.push((request, next) => {
      this.$store.dispatch(types.START_LOADING);
      next((response) => {
        console.log(response);
        this.$store.dispatch(types.STOP_LOADING, response);
      });
    });
    // console.log(Vue.http.interceptors);
  },

  components: {
    TodoHeader,
  },

  computed: {
    ...mapState({
      fetchPending: state => state.ui.fetchPending,
      fetchError: state => state.ui.fetchError,
    }), // can NOT put in data
  },

  watch: {
    fetchPending(fetchPending) {
      if (fetchPending) { this.openDialog('spinner'); } else { this.closeDialog('spinner'); }
    },
  },

  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
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
