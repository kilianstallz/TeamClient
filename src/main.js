import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ApiService from './_services/api.service'
import { TokenService } from './_services/storage.service'

ApiService.init('http://localhost:5000')
if (TokenService.getToken()) {
  ApiService.setHeader()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
