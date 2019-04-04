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

// ApiService.init('http://localhost:5000/api')
ApiService.init('https://sporton-api.herokuapp.com/api')
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
