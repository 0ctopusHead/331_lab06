// import './assets/main.css'
import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import '@/services/AxiosInterceptorSetup.ts'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserPlus,faSignInAlt ,faUser,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


library.add(faSignInAlt)
library.add(faUserPlus)
library.add(faUser)
library.add(faSignOutAlt)

const app = createApp(App)
// const x = "helxysx"
// console.log(x);
app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
