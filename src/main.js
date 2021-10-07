import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 載入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 載入 VueLoaders
import VueLoaders from 'vue-loaders'

// 載入 fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

var VueScrollTo = require('vue-scrollto')

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(VueLoaders)

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
app.mount('#app')
