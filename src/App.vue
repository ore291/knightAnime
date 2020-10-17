<template>
  <div id="app">
    
    <Header/>  
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
      <router-view></router-view> 
  </div>
</template>

<script>
import Header from "./components/Header";
import {mapActions, mapGetters} from 'vuex'


export default {
  name: "App",
  mounted() {
   this.trending();  
  },
  components: {
    Header,
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
        loading: 'animes/loading'
      })
  },
  
};
</script>

<style >
</style>
