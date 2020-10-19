<template>
  <div>   
      
        <header >
            <router-link to="/">
            <div class="brand">
              <img src="../assets/logo.png" 
                alt="logo" class="brand-img">
              <h2>knight anime</h2>
            </div>
            </router-link> 
            <form @submit.prevent='searchAnime'> 
            <input v-model="searchText"  class="anime-search"  type="search" placeholder="search....">
            </form>
        </header>
      

      <div class="Tanime" v-if="!loaded">
        <h1  >Trending Animes</h1>
        <carousel :autoplay="true" :nav="false" :margin=8 :items='6' :responsive="{0:{items:2,nav:false}, 600:{items:5,nav:false}}"> 
        <img v-for="tanime in trendingAnimes" :key="tanime.id" :src="tanime.attributes.posterImage.small">
        <!-- remember to change to large in production -->
        </carousel>
     </div>
      
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import carousel from 'vue-owl-carousel'

export default {
    data() {
        return {
            searchText: '',
        }
    },
    methods: {
       searchAnime(){
           this.$store.dispatch('animes/searchAnime',this.searchText);
           this.$store.commit('animes/resetAnimes')
           this.searchText = '';
           this.$router.push({name: 'searched'})
        }
    },
   
  components: {
      carousel
  },
  computed: {
    ...mapGetters({
      trendingAnimes: 'animes/tanimes',
      loaded: 'animes/loading'
    })
  },
}
</script>

<style>

</style>