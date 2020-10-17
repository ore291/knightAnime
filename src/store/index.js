import Vue from 'vue'
import Vuex from 'vuex'
import animes from './modules/animes'


Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    animes
  }
})