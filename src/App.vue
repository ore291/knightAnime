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
     trending: 'animes/getTrendingAnimes'
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
    if (this.$route.name === "anime" || this.$route.name === "searched") {
        this.$store.commit('animes/hideTrending');
        } else  {
        this.$store.commit('animes/showTrending');
    }
  }
},
  
};
</script>

<style >
</style>
