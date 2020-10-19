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
          <p>
            {{ anime.attributes.synopsis| truncate(350)}}
            <button @click="animeRoute(anime.id, anime.attributes.slug)">read more</button>
          </p>
          
        </div>
        
      </div>
      
    </div>
    <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import api from "../api";
import {mapGetters, mapState} from 'vuex'
import fanimes from '../seed'

export default {
  name: "Animes",

  data() {
    return {
      fanimes: fanimes,
      ...mapState({
        infiniteId: 'animes/infiniteId'
      })
      
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
      api.get(this.$store.state.animes.page).then(({ data }) => {
        console.log(data);
        if (data.data.length) {
          this.$store.commit('animes/setPage', data.links.next);
          this.$store.dispatch('animes/addToAnimes', data.data);
          $state.loaded();
        } else {
          $state.complete();
        }
      }).catch(err => console.log(err))
    },
    async animeRoute(id, animeName){
      try {
        this.$store.commit('animes/loading')
        const res = await api.get(`anime/${id}`);
        this.$router.push({name: 'anime', params: {
        id:animeName,
        data: res.data.data.attributes
        }});
        this.$store.commit('animes/loading')
        this.$store.commit('animes/resetAnimes')
      } catch (error) {
        console.log(error)
      }
      
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
