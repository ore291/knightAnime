<template>
<div class="anime-page pure-g">
  <section class="cover-img pure-u-1" :style="{
       height: '50vh', 
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center center',
       backgroundImage: `url(${animeCoverImg})`}"
       >
      <h1 class="anime-page-title">{{anime.canonicalTitle}}</h1>
  </section>
  <section>
    <div class="pure-u-1 pure-u-md-1-5" > 
      <div class="pure-g">
        <div class="pure-u-1-2 pure-u-lg-1 ">
            <img :src="anime.posterImage.small" alt="anime.canonicalTitle" class="anime-poster ">
        </div>
        <div class=" pure-u-1-2 pure-u-lg-1">
          <star-rating v-model="rating" 
            :read-only=true 
            :show-rating=false 
            :star-size=35
            class="anime-stars"
            />
            <div class="anime-mini-info anime-hidden">
              <p class="pure-u-1 pure-u-md-1-5">Type: {{anime.showType}}</p>
              <p class="pure-u-1 pure-u-md-1-5">Episodes: {{anime.episodeCount}}</p>
              <p class="pure-u-1 pure-u-md-1-5">Started: {{anime.startDate | moment("MMMM YYYY") }}</p>
              <p class="pure-u-1 pure-u-md-1-5">Rank: #{{anime.ratingRank}}</p>
              <p class="pure-u-1 pure-u-md-1-5">Status: {{anime.status}}</p>
            </div>
        </div>
      </div> 
        
    </div>
    <div class="pure-u-1 pure-u-lg-4-5">
      <div class="pure-g">
         <div  class="pure-u-1 anime-mini-info  ">
           <div id="anime-sm-hidden" class="pure-g">
              <p class="pure-u-1 pure-u-md-1-5 ">Type: {{anime.showType}}</p>
              <p class="pure-u-1 pure-u-md-1-5 ">Episodes: {{anime.episodeCount}}</p>
              <p class="pure-u-1 pure-u-md-1-5 ">Started: {{anime.startDate | moment("MMMM YYYY") }}</p>
              <p class="pure-u-1 pure-u-md-1-5 ">Rank: #{{anime.ratingRank}}</p>
              <p class="pure-u-1 pure-u-md-1-5 ">Status: {{anime.status}}</p>
           </div>  
        </div>
        <div class="pure-u-1 anime-page-info">
       <h3>Synopsis:</h3><p>{{anime.description}}</p>
      </div>
    </div>
    </div>
  </section>
  <div class="footer">
    <p>&copy; Copyright 2020 KnightLabs Ltd</p>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import StarRating from 'vue-star-rating'
export default {
  name: "anime",
  data() {
    return {
      
    };
  },
  components: {
    StarRating
  },
  // created() {
  //   this.anime = this.$route.params.data;
  // },
  computed: {
    ...mapGetters({anime : 'animes/anime'}),
    animeCoverImg(){
      if(this.anime.coverImage === null){
        return this.anime.posterImage.large
      }else{
        return this.anime.coverImage.original
      }
    },
    rating() {
      const rat = this.anime.averageRating;
      if (rat > 80) {
        return 5;
      } else if (rat > 65) {
        return 4;
      } else if (rat > 45){
        return 3
      } else if(rat > 25){
        return 2
      }else {
        return 1 ;
      }
    },
  },
  
};
</script>

<style>

</style>