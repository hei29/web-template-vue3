import { createApp } from 'vue'
import '../mock'
import '@/style.css'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import { pinia } from '@/store'

createApp(App)
.use(router)
.use(pinia)
.use(ElementPlus)
.mount('#app')
