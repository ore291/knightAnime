import Vue from 'vue'
import VueRouter from 'vue-router'
import animes from "./views/Animes";
import sanimes from "./views/searchedAnimes"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: animes
      },
      {
        path: '/searched',
        name: 'searched',
        component: sanimes
      }
    ]
    })