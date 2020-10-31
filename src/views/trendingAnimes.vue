<template>
    <div id="containercon">
    <h1>Trending Animes</h1>
     <container :animes='tanimes'/>
    </div>
</template>
<script>
import container from '../components/Container';
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    components:{
        container
    },
    computed: {
        ...mapGetters({tanimes: 'animes/tanimes'})
    }
}
</script>
<style>
 
</style>