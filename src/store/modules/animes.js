import api from '../../api'

const state = {
  trendingPage: true,
  anime: null,
  animes: [],
  tanimes: null,
  loading: false,
  sanimes: null,
  infiniteId: +new Date(),
  page: `/anime?page[limit]=20&page[offset]=0`,
  categoriesList: null,
  cname: null,
  categoryAnimes: []
}

const getters = {
  categories({ categoriesList }) {
    if (categoriesList) {
      return categoriesList.map(
        a => {
          return {
            title: a.attributes.title,
            slug: a.attributes.slug
          }
        }
      )
    }
  },
  canimes: state => {
    return state.categoryAnimes
  },
  animes: state => {
    return state.animes
  },
  loading: state => {
    return state.loading
  },
  tanimes: state => {
    return state.tanimes
  },
  sanimes: state => {
    return state.sanimes
  },
  anime: state => {
    return state.anime
  },
  trendingPage: state => {
    return state.trendingPage
  }
}


const actions = {
  addToAnimes({ commit }, animes) {
    commit('addToAnimes', animes)
  },
  async getTrendingAnimes({ commit }) {
    try {
      commit('loading')
      const res = await api.get(`trending/anime`);
      commit('addTrendingAnimes', res.data.data);
      commit('loading')
    } catch (error) {
      console.log(error);
    }
  },
  async searchAnime({ commit }, anime) {
    try {
      commit('loading')
      const res = await api.get(
        `/anime?page[limit]=20&page[offset]=0&filter[text]=${anime}`
      );
      commit('searchedAnimes', res.data.data)
      commit('loading')
    } catch (error) {
      console.log(error);
    }
  },
  async getCategories({ commit }) {
    try {
      const res = await api.get(`/categories?sort=-totalMediaCount&page[limit]=15&page[offset]=0`);
      commit('setCategories', res.data.data)

    } catch (error) {
      console.log(error)
    }
  }



}

const mutations = {
  addToAnimes(state, animes) {
    state.animes.push(...animes)
  },
  addToCategories(state, animes) {
    state.categoryAnimes.push(...animes)
  },
  addTrendingAnimes(state, Tanimes) {
    state.tanimes = Tanimes
  },
  loading(state) {
    state.loading = !state.loading
  },
  cloading(state) {
    state.loading = false
  },
  searchedAnimes(state, sanimes) {
    state.sanimes = sanimes
  },
  resetAnimes(state) {
    state.animes = [],
      state.categoryAnimes = []
    state.infiniteId += 1,
      state.cname = null,
      state.page = `/anime?page[limit]=20&page[offset]=0`
  },
  setPage(state, page) {
    state.page = page
  },
  setCategoryPage(state, page) {
    state.cname = page
  },
  animePage(state, anime) {
    state.anime = anime
  },
  hideTrending(state) {
    state.trendingPage = false
  },
  showTrending(state) {
    state.trendingPage = true
  },
  setCategories(state, categories) {
    state.categoriesList = categories
  },
  setCname(state, title) {
    state.cname = `/anime?filter[categories]=${title}&sort=-favoritesCount&page[limit]=20&page[offset]=0`;
  }


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}