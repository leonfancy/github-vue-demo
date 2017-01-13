import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import RepoListView from './views/RepoListView.vue'
import CommitsListView from './views/CommitsListView.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/repos', component: RepoListView },
  { path: '/repos/:owner/:repo/commits', name: 'repo-commits', component: CommitsListView }
];

const router = new VueRouter({mode:'history', routes});

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
});
