import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 載入 SweerAlet2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// 載入 Vuex
import store from './store'

// 載入 BootStrap5
import 'bootstrap'

// 載入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 載入 fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// 載入 VueLoaders
import VueLoaders from 'vue-loaders'

// 匯入 vee-validate 主套件
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'

// 匯入 vee-validate 相關規則
import { required, email, min } from '@vee-validate/rules'

// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'

// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 載入 datePicker
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

const VueScrollTo = require('vue-scrollto')

const app = createApp(App)
app.use(VueSweetalert2)
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.use(VueLoaders)
app.use(require('moment'))
app.use(VueScrollTo, {
  container: 'body',
  duration: 100,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
app.component('DatePicker', Vue3PersianDatetimePicker)

// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})

// 設定預設語系
setLocale('zh_TW')

// 註冊 vee-validate 三個全域元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

// 導航守衛
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login')
    return
  }
  next()
})
app.mount('#app')
