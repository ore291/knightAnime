<template>
  <div>
    <h1 class="catTextHeader">{{ $route.params.data }} Animes</h1>

    <container :animes="canimes" />
    <infinite-loading
      :identifier="infiniteId"
      @infinite="infiniteHandler"
      spinner="waveDots"
    ></infinite-loading>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import container from "../components/Container";
import api from "../api";
export default {
  data() {
    return {
      ...mapState({
        infiniteId: "animes/infiniteId",
      }),
    };
  },
  components: {
    container,
  },
  methods: {
    infiniteHandler($state) {
      api
        .get(this.$store.state.animes.cname)
        .then(({ data }) => {
          if (data.data.length) {
            this.$store.commit("animes/setCategoryPage", data.links.next);
            this.$store.commit("animes/addToCategories", data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    ...mapGetters({
      canimes: "animes/canimes",
    }),
  },
};
</script>

<style>
</style>