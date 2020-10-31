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
    <router-view v-else-if="!loading"></router-view> 
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
      trendingAnimes: null
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
   $route: function() {
    // Check if given route is true, if it is then hide Nav. 
    if (this.$route.name === "home") {
        this.$store.commit('animes/showTrending');
        } else  {
        this.$store.commit('animes/hideTrending');
    }
  }
},
  
};
</script>

<style >
</style>
