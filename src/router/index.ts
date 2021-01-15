import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import { stores } from '../store/store-entry';
Vue.use(VueRouter);

//修改原型对象中的push方法
const originalPush: any = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: any) {
  return originalPush.call(this, location).catch((err: any) => err);
};
export const routes: Array<RouteConfig> = [
  {
    path: "",
    name: "index",
    // redirect: "/home",
    component: () => import("@/components/Layout/index.vue"),
    children: [
      {
        path: "/banner",
        name: "banner",
        component: () => import("@/views/Banner.vue"),
        meta: {
          icon: "idcard",
          title: "Banner"
        }
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: {
          icon: "idcard",
          title: "Home"
        }
      },
      {
        path: "/illustration",
        name: "Illustration",
        component: () => import("@/views/illustration/index.vue"),
        meta: {
          icon: "ant-cloud",
          title: "Illustration"
        }
      },
      {
        path: "/blog",
        name: "Blog",
        component: () => import("@/views/blog/index.vue"),
        meta: {
          icon: "global",
          title: "Blog"
        }
      }
    ],

    meta: {
      title: "首页"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
