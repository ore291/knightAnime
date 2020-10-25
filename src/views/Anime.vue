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
      <img :src="anime.posterImage.small" alt="anime.canonicalTitle" class="anime-poster">
    </div>
     <div class="pure-u-1 pure-u-md-2-5 anime-page-info">
       <h4>Synopsis:</h4><p>{{anime.description}}</p>
    </div>
     <div class="pure-u-1 pure-u-md-2-5 anime-page-extra">
      <iframe width="420" height="315"
        :src="`https://www.youtube.com/embed/${anime.youtubeVideoId}`">
      </iframe>
    </div>
  </section>

</div>
  <!-- <div class="anime-page pure-g" >
    <h1 class="anime-page-title pure-u-1">{{anime.canonicalTitle}}</h1>
    <section class="pure-u-xl-1-2 pure-u-1 anime-page-info" > 
    <img :src="anime.posterImage.small" alt="anime.canonicalTitle" class="anime-page-img">
    <h3 style="margin-bottom:10px">synopsis:</h3>
    <p>{{anime.description}}</p>
    </section>
    <section class="pure-u-xl-1-2 pure-u-1 anime-page-right">
      <div class="pure-g">
      <div class="pure-u-1">
        <img class="anime-page-cover" :src="animeCoverImg" alt="" srcset="">
      </div>
      <div class="pure-u-1">
        <div class="pure-g">
          <div class="pure-u-1-3 pure-u-md-1-5 button-success">Episodes: {{anime.episodeCount}}</div>
          <div class="pure-u-1-3 pure-u-md-2-5">started: {{anime.startDate}}</div>
          <div class="pure-u-1-3 pure-u-md-1-5">rank: {{anime.ratingRank}}</div>
          <div class="pure-u-1-3 pure-u-md-1-5">4</div>
          <div class="pure-u-1 pure-u-md-1"><iframe width="420" height="315"
            :src="`https://www.youtube.com/embed/${anime.youtubeVideoId}`">
          </iframe></div>
        </div>
      </div>
      </div>
      
      
    </section>     
  </div> -->
</template>

<script>
import fanime from '../seed'
import {mapGetters} from 'vuex';
export default {
  name: "anime",
  data() {
    return {
      fanime: fanime[0].attributes
    };
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
    }
  },
  
};
</script>

<style>

</style>