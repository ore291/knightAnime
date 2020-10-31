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
  </div>
  
</template>

<script>

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
 
}
</script>

<style>

</style>