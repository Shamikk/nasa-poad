import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const nasa_api_key = '164gMSeTkfbivfD5G4fAuZlFspVUCrRwpGn9yfUf'
const base_url = 'https://api.nasa.gov/planetary/apod'

export const store = new Vuex.Store({
  state: {
    poad: null,
    poadDate: null
  },
  mutations: {
    FETCH_POAD(state, poad) {
      state.poad = poad
    },
    SET_POAD_DATE(state, poadDate) {
      state.poadDate = poadDate
    }
  },
  actions: {
    fetchPoad() {
      var url = ''
      console.log('date: ')
      console.log(this.state.poadDate)
      if (this.state.poadDate !== null) {
        url = `${base_url}?api_key=${nasa_api_key}&date=${this.state.poadDate}`
      } else {
        url = `${base_url}?api_key=${nasa_api_key}`
      }

      axios
        .get(url)
        .then(response => {
          this.commit('FETCH_POAD', response.data)
        })
        .catch(error => {
          console.log(`Something went wrong: ${error}`)
        })
    },
    setPoadDate({
      commit
    }, poadDate) {
      commit('SET_POAD_DATE', poadDate)
    }
  }
})
