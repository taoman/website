import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import "@/assets/less/main.less";
//全局swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css'

//swiper 6.4.5 各种坑啊
import 'swiper/swiper-bundle.min.css';//样式
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';//导入模组
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);//使用模组
//平滑过渡
import VueSmoothScroll from 'vue2-smooth-scroll';
Vue.config.productionTip = false;

Vue.use(Antd,VueAwesomeSwiper);
Vue.use(VueSmoothScroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
