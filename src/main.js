import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ApiService from './_services/api.service'
import { TokenService } from './_services/storage.service'
import Sidebar from './components/SidebarPlugin'

import './assets/scss/teammanager.scss'

let API_URL = ''
if (process.env.NODE_ENV === 'production') {
  API_URL = 'https://sporton-api.herokuapp.com/api'
} else {
  API_URL = 'http://10.0.0.18:5000/api'
}
console.log(API_URL)
ApiService.init(API_URL)
if (TokenService.getToken()) {
  ApiService.setHeader()
}

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Sidebar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
