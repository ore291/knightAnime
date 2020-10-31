<template>
    <div>
    <h1 class="searchedTextHeader">Search Results....</h1>
    <container :animes='sanimes' />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import container from '../components/Container'
export default {
    components: {container},
    computed: {
        ...mapGetters({
            sanimes: 'animes/sanimes'
        })
    },
    methods: {
        
    },
}
</script>

<style scoped>

</style>