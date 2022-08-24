import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SimplePlugin from './plugins/simplePlugins'
import {marked} from "marked"

Vue.config.productionTip = false

Vue.use(SimplePlugin)
Vue.filter('marked', marked)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
