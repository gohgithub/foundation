import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'https://iecosystem-api.tomyue.cc/api'

export default createStore({
  state: {
    user: null,
    userData: {},
    messages: [],
    userMessages: [],
    userId: 45,
    tempUserData: {}
  },
  mutations: {
    // 儲存登入資料 + 抬頭附上 token
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },
    // 儲存使用者資料
    GETUSERDATA (state, payload) {
      console.log(payload)
      state.userData = payload
      state.tempUserData.city = payload.city
    },
    // 指派訊息用
    ASSIGN (state, payload) {
      axios.post('https://iecosystem-api.tomyue.cc/api/orders/' + 1 + '/assign', { user_id: 45 })
        .then((res) => {
          console.log(res)
        })
    },
    // 登出
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
    // 取得使用者資料
    getUserData (context) {
      axios.get('https://iecosystem-api.tomyue.cc/api/user/').then((res) => {
        context.commit('GETUSERDATA', res.data.user)
      })
    },
    // 修改使用者資料
    saveData (context, tempUserData) {
      axios.post('https://iecosystem-api.tomyue.cc/api/user/profile', tempUserData).then((res) => {
        alert('成功修改資料')
      })
    },
    // 取得指派清單
    getQuestion (context) {
      axios.get('https://iecosystem-api.tomyue.cc/api/orders/assign')
        .then((res) => {
          console.log(res)
        })
    },
    assign (context) {
      context.commit('ASSIGN')
    },
    // 登出
    logout (context) {
      context.commit('LOGOUT')
    }
  },
  getters: {
    isLogged: state => !!state.user,
    user: state => {
      return state.user
    },
    userData: state => {
      return state.userData
    }
  }
})
