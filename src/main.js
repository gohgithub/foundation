import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 載入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 載入 fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
