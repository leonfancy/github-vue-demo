<template>
  <div id="app">
    <header>
      <router-link to="/repos">All Repositories</router-link>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    margin: auto;
    max-width: 60%;
  }

  header {
    margin-top: 1em;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }
</style>
