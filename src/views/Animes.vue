<template>
  <div>
    <div id="genre" class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-selected">
          <!-- pure-menu-selected -->
          <a style="color: rgb(151, 151, 151)" class="pure-menu-link"
            >All Animes</a
          >
        </li>
        <li class="pure-menu-item">
          <router-link to="/trending" class="pure-menu-link"
            >Trending Animes</router-link
          >
        </li>
        <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
          <a href="#" id="menuLink1" class="pure-menu-link">Sort By Genres</a>
          <ul class="pure-menu-children">
            <div v-for="category in categories" :key="category.title">
              <li class="pure-menu-item">
                <a
                  @click="getCategories(category.title, category.slug)"
                  href="#"
                  class="pure-menu-link"
                  >{{ category.title }}</a
                >
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </div>
    <container :animes="animes" />
    <infinite-loading
      :identifier="infiniteId"
      @infinite="infiniteHandler"
      spinner="waveDots"
    ></infinite-loading>
  </div>
</template>

<script>
import api from "../api";
import { mapGetters, mapState } from "vuex";
import container from "../components/Container";

export default {
  name: "Animes",
  components: { container },
  data() {
    return {
      ...mapState({
        infiniteId: "animes/infiniteId",
      }),
      show: false,
      hover: true,
    };
  },
  methods: {
    infiniteHandler($state) {
      api
        .get(this.$store.state.animes.page)
        .then(({ data }) => {
          if (data.data.length) {
            this.$store.commit("animes/setPage", data.links.next);
            this.$store.dispatch("animes/addToAnimes", data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => console.log(err));
    },
    async getCategories(title, slug) {
      await this.$store.commit("animes/resetAnimes");
      this.$store.commit("animes/setCname", title);
      this.$router.push({
        name: "category",
        params: {
          genre: slug,
          data: title,
        },
      });
    },
  },
  // end of methods
  computed: {
    ...mapGetters({
      animes: "animes/animes",
      categories: "animes/categories",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
