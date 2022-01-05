import { createStore } from 'vuex'
import axios from 'axios'
//
axios.defaults.baseURL = 'https://iecosystem-api.tomyue.cc/api'

export default createStore({
  state: {
    user: null,
    userData: {},
    tempUserData: {}
  },
  mutations: {
    // 儲存登入資料 + 抬頭附上 token
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },
    GETUSERDATA (state, payload) {
      state.userData = payload
      state.tempUserData.city = payload.city
    },
    LOGOUT () {
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    // 登入 post 資料
    login ({ commit }, credentials) {
      return axios
        .post('/login', credentials)
        .then(({ data }) => {
          commit('setUserData', data)
        })
    },
    getUserData (context) {
      axios.get('https://iecosystem-api.tomyue.cc/api/user/').then((res) => {
        context.commit('GETUSERDATA', res.data.user)
      })
    },
    saveData (context, tempUserData) {
      axios.post('https://iecosystem-api.tomyue.cc/api/user/profile', tempUserData).then((res) => {
        alert('成功修改資料')
      })
    },
    logout (context) {
      context.commit('LOGOUT')
    }
  },
  getters: {
    isLogged: state => !!state.user,
    user: state => {
      return state.user
    }
  }
})
