<template>
  <div class="Tanime" v-if="!loaded">
    <!-- <h1 >Trending Animes</h1> -->
    <carousel :autoplay="true" :nav="false" :margin=8 :items='6' :responsive="{0:{items:2,nav:false}, 600:{items:4,nav:false}}"> 
    <img v-for="tanime in trendingAnimes" :key="tanime.id" :src="tanime.attributes.posterImage.large">
    <!-- remember to change to large in production -->
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import {mapGetters} from 'vuex'
export default {
 name: 'trending',
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