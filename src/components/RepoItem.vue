<template>
  <li class="repo-item">
    <img :src="repo.owner.avatar_url">
    <div>
      <h4>
        <router-link :to="{ name: 'repo-commits', params: {owner: repo.owner.login, repo: repo.name} }">
          {{ repo.full_name }}
        </router-link>
      </h4>
      <p>{{ repo.description }}</p>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'repo-item',
    props: ['repo']
  }
</script>

<style>
  li.repo-item {
    display: flex;
    margin-bottom: 1.5em;
  }

  .repo-item img {
    width: 60px;
    height: 60px;
    margin-right: 2em;
  }

  .repo-item h4 {
    margin-top: 0;
    font-weight: normal;
  }
</style>