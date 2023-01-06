import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
