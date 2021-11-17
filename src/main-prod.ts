import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// import 'element-p  lus/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import 'amfe-flexible'
// import animate from 'animate.css'
import './assets/css/global.scss'

createApp(App)
.use(store)
.use(router)
.use(ElementPlus)
// .use(animate)
.mount('#app')
