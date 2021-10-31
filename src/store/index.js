import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'https://iecosystem-api.tomyue.cc/api'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    // 儲存登入資料 + 抬頭附上 token
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    }
  },
  actions: {
    // 登入 post 資料
    login ({ commit }, credentials) {
      console.log(credentials)
      return axios
        .post('/login', credentials)
        .then(({ data }) => {
          commit('setUserData', data)
        })
    }
  },
  getters: {
    isLogged: state => !!state.user,
    user: state => {
      console.log(state)
      return state.user
    }
  }
})
