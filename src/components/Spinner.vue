<template>
  <div class="spinner" v-if="show">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  'name': 'spinner',
  'props': ['show']
}
</script>

<style>
  .spinner .loader:before,
  .spinner .loader:after,
  .spinner .loader {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: spinner 1.8s infinite ease-in-out;
    animation: spinner 1.8s infinite ease-in-out;
  }

  .spinner .loader {
    margin: 1em auto;
    font-size: 10px;
    top: -20px;
    position: relative;
    text-indent: -9999em;
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  .spinner .loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .loader:after {
    left: 3.5em;
  }

  .spinner .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    top: 0;
  }

  @-webkit-keyframes spinner {
    0%, 80%, 100% {
      box-shadow: 0 2.5em 0 -1.3em #42b983;
    }
    40% {
      box-shadow: 0 2.5em 0 0 #42b983;
    }
  }

  @keyframes spinner {
    0%, 80%, 100% {
      box-shadow: 0 2.5em 0 -1.3em #42b983;
    }
    40% {
      box-shadow: 0 2.5em 0 0 #42b983;
    }
  }
</style>
