import Vue from 'vue'
import App from './App.vue'
import router from "./routers";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueTouch from 'vue-touch'

import toast from 'components/contents/toast'
Vue.config.productionTip = false

Vue.use(toast)
Vue.use(ElementUI);
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold:50  //设置左右滑动的距离
}
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
