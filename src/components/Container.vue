<template>
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
          {{ anime.attributes.synopsis | truncate(200) }}
          <button @click="animeRoute(anime.id, anime.attributes.slug)">
            read more
          </button>
        </p>
      </div>
    </div>
    <back-to-top text="Back to top"></back-to-top>
  </div>
</template>

<script>
import api from "../api";
import BackToTop from 'vue-backtotop'
export default {
  name: "container",
  props: ["animes"],
  components: {
     BackToTop
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
    async animeRoute(id, animeName) {
      try {
        this.$store.commit("animes/loading");
        const res = await api.get(`anime/${id}`);
        this.$store.commit("animes/animePage", res.data.data.attributes);
        this.$router.push({
          name: "anime",
          params: {
            id: animeName,
          },
        });
        this.$store.commit("animes/loading");
        this.$store.commit("animes/resetAnimes");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>

</style>