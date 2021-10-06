import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 載入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//
import ScrollBar from '@morioh/v-smooth-scrollbar'

// 載入 fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(ScrollBar)
app.mount('#app')
