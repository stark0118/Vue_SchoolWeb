import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import store from './store/index.js'

import moment from 'moment'
// import animate from 'animate.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  error: '/src/assets/imgs/imgerror.jpg',
  loading: '/src/assets/imgs/imgloading.gif',
  preLoad: 1,
  attempt: 1
});
Vue.use(iView);
Vue.use(ElementUI);
Vue.use(moment);


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
