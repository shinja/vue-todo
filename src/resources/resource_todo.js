import Vue from 'vue';
import VueResource from 'vue-resource';

console.log('Vue.use(VueResource);', this);
Vue.use(VueResource);

const API = 'http://jsonplaceholder.typicode.com/';
const resource = Vue.resource(`${API}posts{/id}`);

export default resource;
