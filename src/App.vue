<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/repos">Repositories</router-link>
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
    text-align: center;
  }

  header a {
    margin-right: 2em;
  }

  header a:last-child {
    margin-right: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }
</style>
