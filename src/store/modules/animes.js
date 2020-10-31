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
  categoriesList: null
}

const getters = {
  categories({categoriesList}){
    return categoriesList.map(
      a => {
        return {
          title: a.attributes.title,
          slug: a.attributes.slug
        }
      }
    )
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
    addToAnimes({ commit }, animes){
        commit('addToAnimes', animes)
     },
    async getTrendingAnimes({commit}){
      try {  
        commit('loading')
        const res = await api.get(`trending/anime`);
        commit('addTrendingAnimes',res.data.data);
        commit('loading')
      } catch (error) {
        console.log(error);
      }
    },
    async searchAnime({commit},anime) {
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
    async getCategories({commit}){
      try {
        const res = await api.get(`/categories?sort=-totalMediaCount`);
        commit('setCategories', res.data.data)
      } catch (error) {
         console.log(error)
      }
    }


   
} 

const mutations = {
  addToAnimes (state, animes){
    state.animes.push(...animes)
  },
  addTrendingAnimes(state, Tanimes){
    state.tanimes = Tanimes
  },
  loading(state){
    state.loading = !state.loading
  },
  searchedAnimes(state, sanimes){
    state.sanimes = sanimes
  },
  resetAnimes(state){
    state.animes = [],
    state.infiniteId += 1,
    state.page = `/anime?page[limit]=20&page[offset]=0`
  },
  setPage(state, page){
    state.page = page
  },
  animePage(state, anime){
    state.anime = anime
  },
  hideTrending(state){
    state.trendingPage = false
  },
  showTrending(state){
    state.trendingPage = true
  },
  setCategories(state, categories){
    state.categoriesList = categories
  },
  setCname(state, title){
    state.cname = title;
  }

    
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}