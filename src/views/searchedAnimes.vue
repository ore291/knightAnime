<template>
    <div>
    <h1 class="searchedTextHeader">Search Results....</h1>
    <div class="anime-container">
        <div class="anime" v-for="anime in sanimes" :key="anime.id">
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
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            sanimes: 'animes/sanimes'
        })
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
    },
}
</script>

<style scoped>

</style>