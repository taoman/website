/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2020-12-14 13:55:20
 * @LastEditors: taoman
 * @LastEditTime: 2020-12-14 13:55:47
 */
// vue.d.ts的代码
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "ant-design-vue/lib/locale-provider/zh_CN";
declare module "vue-virtual-scroller";
declare module "vue-infinite-scroll";
declare module "vue-print-nb";
