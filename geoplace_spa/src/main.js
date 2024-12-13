
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import routers from './router/routers'

const app = createApp(App)

app.use(routers).mount('#app');
