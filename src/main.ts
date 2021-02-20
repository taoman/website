import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import "@/assets/less/main.less";
//全局swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
// import 'swiper/css/swiper.css'

//swiper 6.4.5 各种坑,先不用
import "swiper/swiper-bundle.min.css"; //样式
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"; //导入模组
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]); //使用模组

//平滑过渡
import VueSmoothScroll from "vue2-smooth-scroll";
import VueMarkdown from "vue-markdown";
import AOS from "aos";
import "aos/dist/aos.css";
Vue.config.productionTip = false;
import { stores } from "./store/store-entry";
import { module } from "@/api";
Vue.prototype.$module = module;
Vue.prototype.$stores = stores;

AOS.init({
  once: true,
  offset: 50,
  delay: 100,
  duration: 1000
});
// store.dispatch("getUserData")
Vue.use(Antd, VueAwesomeSwiper);
Vue.use(VueSmoothScroll);
Vue.use(VueMarkdown);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
