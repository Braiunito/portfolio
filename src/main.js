import './assets/css/global.scss';
// Importing styles directly
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './Home.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
