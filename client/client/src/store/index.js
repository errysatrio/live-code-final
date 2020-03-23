import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const url = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    reports: []
  },
  mutations: {
    FETCH_COUNTRIES (state, payload) {
      state.countries = [...payload]
    },
    FETCH_REPORTS (state, payload) {
      state.reports = [...payload]
    }
  },
  actions: {
    getCountries ({ commit }) {
      axios({
        url: `${url}/countries`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ result }) => {
          commit('FETCH_COUNTRIES', data)
        })
    },
    getReports ({ commit }) {
      axios({
        url: `${url}/reports`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ result }) => {
          commit('FETCH_REPORTS', data)
        })
    }
  },
  modules: {
  }
})
