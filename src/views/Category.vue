<template>
  <div>
      <container :animes='canimes' />
      <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import container from '../components/Container'
import api from '../api'
export default {
    components: {
        container
    },
    methods: {
    infiniteHandler($state) {
      api.get(this.$store.state.animes.cpage).then(({ data }) => {
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
  },
}
</script>

<style>

</style>