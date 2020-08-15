import Vue from 'vue'

import App from './App.vue'

import router from './router'

import { ModalPlugin } from 'bootstrap-vue';
Vue.use(ModalPlugin)

require('./js/modal');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  mounted: () => document.dispatchEvent(new Event('render-event'))
}).$mount('#vicksburg-family-dentistry')
