import Vue from 'vue'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';

import BootstrapVue from "bootstrap-vue"
import CKEditor from '@ckeditor/ckeditor5-vue';

import App from './App'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.prototype.$http = Axios;
Vue.prototype.$swal = VueSweetalert2;

Vue.config.productionTip = false;

Vue.use(BootstrapVue, VueAxios, CKEditor, VueSweetalert2);

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
