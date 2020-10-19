import Vue from 'vue'
import VueRouter from 'vue-router'
import animes from "./views/Animes";
import sanimes from "./views/searchedAnimes";
import anime from "./views/Anime";

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
      }
    ]
    })