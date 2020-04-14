import Vue from 'vue'

import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount('#vicksburg-family-dentistry')
