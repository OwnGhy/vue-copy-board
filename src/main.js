import Vue from 'vue'
import App from './App.vue'
import vueCopyBoard from './lib/index';
Vue.use(vueCopyBoard);

new Vue({
  el: '#app',
  render: h => h(App)
})
