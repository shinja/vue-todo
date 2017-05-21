<template>
  <div>
    <h2>Menu</h2>
    <ul>
      <li>
        <router-link :to="{ name: 'Hello' }">Hello</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Todo' }">Todo</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todoheader',
};
</script>


<!-- TODO How to use commom scss -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
