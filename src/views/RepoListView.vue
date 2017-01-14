<template>
  <div class="repo-list-view">
    <h1>Repo List</h1>
    <spinner :show="isLoading"></spinner>
    <ul class="repo-list">
      <li is="repo-item" v-for="repo in repos" :repo="repo"></li>
    </ul>
  </div>
</template>

<script>
  import RepoItem from '../components/RepoItem.vue';
  import Spinner from '../components/Spinner.vue';

  export default {
    name: 'repo-list-view',
    components: {RepoItem, Spinner},
    beforeMount: function () {
      this.$http.get('repositories').then((response) => {
        this.isLoading = false;
        this.repos = response.body;
      });
    },
    data: function () {
      return {
        repos: [],
        isLoading: true
      }
    }
  }
</script>
