import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = "http://192.168.1.7:8080/"

createApp(App).use(store).use(router).mount('#app')
