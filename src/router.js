import Vue from 'vue'
import VueRouter from 'vue-router'
import animes from "./views/Animes";
import sanimes from "./views/searchedAnimes";
import anime from "./views/Anime";
import tanimes from "./views/trendingAnimes"
import canimes from "./views/Category"

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
        path: '/anime/:id',
        name: 'anime',
        component: anime
      },
      {
        path: '/searched',
        name: 'searched',
        component: sanimes
      },
      {
        path: '/trending',
        name: 'trending',
        component: tanimes
      },
      {
        path: '/genre/:genre',
        name: 'category',
        component: canimes
      }
    ]
    })