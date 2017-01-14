<template>
  <div class="home-page">
    <h1>GitHub Demo</h1>
    <p>Have fun with GitHub API and Vue.js</p>
    <div class="logos">
      <img src="../assets/logo.png">
      <img src="../assets/github.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-view'
  }
</script>

<style>
  .home-page {
    margin-top: 100px;
    text-align: center;
  }
  .logos {
    margin-top: 100px;
  }
  .logos img {
    width: 250px;
  }
</style>