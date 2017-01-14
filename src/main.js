import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import RepoListView from './views/RepoListView.vue'
import CommitsListView from './views/CommitsListView.vue'
import HomeView from './views/HomeView.vue'

// bootstrap and jQuery
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');


Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '/', component: HomeView},
  {path: '/repos', component: RepoListView},
  {path: '/repos/:owner/:repo/commits', name: 'repo-commits', component: CommitsListView}
];

Vue.http.options.root = 'https://api.github.com';

new Vue({
  router: new VueRouter({mode: 'history', routes}),
  el: '#app',
  render: h => h(App)
});
