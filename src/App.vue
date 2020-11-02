<template>
  <div id="app">  
    <Header/>
    <Trending v-if="trendingPage"/> 
    <div class="loading" v-if="loading">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <transition :name="transitionName" mode="out-in">
      <router-view v-if="!loading"></router-view> 
    </transition>
    
  </div>
</template>

<script>
import Header from "./components/Header";
import Trending from "./components/Trending"
import {mapActions, mapGetters} from 'vuex'


export default {
  name: "App",
  mounted() {
   this.trending();
   this.categories();
  },
  components: {
    Header,
    Trending
  },
  data() {
    return {
      searchedAnimes: null,
      trendingAnimes: null,
      transitionName: null 
    };
  },
  methods: { 
   ...mapActions({
     trending: 'animes/getTrendingAnimes',
     categories: 'animes/getCategories'
   }),
    
  },
  computed: {
     ...mapGetters({
        loading: 'animes/loading',
        trendingPage: 'animes/trendingPage'
      })
  },
   watch: {
   $route: function(to, from) {
    // Check if given route is true, if it is then hide Nav. 
    if (this.$route.name === "home") {
        this.$store.commit('animes/showTrending');
        } else  {
        this.$store.commit('animes/hideTrending');
    }
    if (from.path === '/') {
        this.transitionName = 'sakura';
      } else {
        this.transitionName = 'sake';
      }
    }

  }, 
  
};
</script>

<style >


</style>
