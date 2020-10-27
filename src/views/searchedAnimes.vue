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
            <p>{{ anime.attributes.synopsis| truncate(200)}}</p>
            <button @click="animeRoute(anime.id, anime.attributes.slug)">read more</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import api from "../api";
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
        async animeRoute(id, animeName){
        try {
            this.$store.commit('animes/loading')
            const res = await api.get(`anime/${id}`);
            this.$store.commit('animes/animePage', res.data.data.attributes)
            this.$router.push({name: 'anime', params: {
            id:animeName 
            }});
            this.$store.commit('animes/loading')
            this.$store.commit('animes/resetAnimes')
        } catch (error) {
            console.log(error)
        }
        
    },
    },
}
</script>

<style scoped>

</style>