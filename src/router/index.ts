import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

//修改原型对象中的push方法
const originalPush: any = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: any) {
  return originalPush.call(this, location).catch((err: any) => err);
};
export const routes: Array<RouteConfig> = 
[
  {
    path: "",
    name: "index",
    redirect: "/home",
    component: () => import("@/components/Layout/index.vue"),
    meta: {
      title: "首页"
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: {
          title: "Home"
        }
      },
      {
        path: "/illustration",
        name: "illustration",
        component: () => import("@/views/BlankPage.vue"),
        children: [
          {
            path: "/ps",
            name: "ps",
            component: () => import("@/views/illustration/ps/index.vue"),
            meta: {
              title: "ps"
            }
          },
          {
            path: "/ai",
            name: "ai",
            component: () => import("@/views/illustration/ai/index.vue"),
            meta: {
              title: "ai"
            }
          }
        ],
        meta: {
          title: "illustration"
        }
      },
      {
        path: "/blog",
        name: "Blog",
        component: () => import("@/views/blog/index.vue"),
        meta: {
          title: "taoman"
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
