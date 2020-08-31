import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueToasted from 'vue-toasted';
import './assets/styles/index.css';

Vue.config.productionTip = false

Vue.use(VueToasted, {
  iconPack: 'fontawesome'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
