import Vue from 'vue'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'

import BootstrapVue from "bootstrap-vue"
import CKEditor from '@ckeditor/ckeditor5-vue';

import App from './App'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';

Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

Vue.use(BootstrapVue, VueAxios, CKEditor);

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
