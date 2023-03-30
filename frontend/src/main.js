import Vue from 'vue'
import App from './App.vue'
import router from "./routers";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueTouch from 'vue-touch'
// import SocketIOConfig from "common/socketIoConfig";
import ws from "common/config.js"
import toast from 'components/contents/toast'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.prototype.$ws = ws
// Vue.use(SocketIOConfig)

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
