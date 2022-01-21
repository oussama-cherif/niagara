import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartes: [],
    carte: {
      format:null,
      nom:null,
      tags: null,
      declancheur:null,
      date: null
    },
    // format: '',
    // nom: null,
    // tags: null,
    // declancheur: '',
    // date: ''
  },
  mutations: {
    setFormat(state, payload) {
      state.carte.format = payload.format;
    },
    setNom(state, payload) {
      state.carte.nom = payload.nom;
    },
    setTags(state, payload) {
      state.carte.tags = payload.tags;
    },
    setDeclancheur(state, payload) {
      state.carte.declancheur = payload.declancheur;
    },
    setDate(state, payload) {
      state.carte.date = payload.date;
    },

  },
  actions: {
  },
  modules: {
  }
})
