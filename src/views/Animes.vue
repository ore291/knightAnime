<template>
  <div>
    <div class="anime-container">
      <div class="anime" v-for="anime in animes" :key="anime.id">
        <img
          class="anime-img"
          :src="anime.attributes.posterImage.small"
          :alt="anime.attributes.canonicalTitle"
        />
        <div class="anime-info">
          <h4>{{ anime.attributes.canonicalTitle }}</h4>
          <span
            :class="['animeRating', setRating(anime.attributes.averageRating)]"
            >{{ anime.attributes.averageRating }}</span
          >
        </div>
        <div class="anime-overview">
          <h3>Synopsis:</h3>
          <p>{{ anime.attributes.synopsis }}</p>
        </div>
      </div>
      
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import api from "../api";
import {mapGetters} from 'vuex'
import fanimes from '../seed'

export default {
  name: "Animes",

  data() {
    return {
      page: `/anime?page[limit]=20&page[offset]=0`,
      fanimes: fanimes
    };
  },
  methods: {
    setRating(rating) {
      if (rating < 70) {
        return "red";
      } else if (rating < 80) {
        return "yellow";
      } else {
        return "green";
      }
    },
    infiniteHandler($state) {
      api.get(this.page).then(({ data }) => {
        console.log(data);
        if (data.data.length) {
          this.page = data.links.next;
          this.$store.dispatch('animes/addToAnimes', data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      }).catch(err => console.log(err))
    },
  },
  // end of methods
  computed: {
    ...mapGetters({
      animes: 'animes/animes'
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
