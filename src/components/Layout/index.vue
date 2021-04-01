<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 14:37:22
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-26 13:58:06
-->
<template>
  <div>
    <a-layout>
      <a-layout-header class="layout-header"><Banner /></a-layout-header>
      <a-layout>
        <a-layout-sider class="layout-sider" width="320"
          ><a-affix><AppSlider /></a-affix
        ></a-layout-sider>

        <a-layout class="layout-content">
          <!-- 小屏侧边栏抽屉按钮 -->
          <a-affix>
            <a-button
              :class="{
                'sider-menu-trigger': true,
                'drawer-closed': !menuDrawerVisible,
                'drawer-open': menuDrawerVisible,
              }"
              shape="circle"
              size="large"
              :icon="menuDrawerVisible ? 'arrow-left' : 'bars'"
              @click="toggleMenuDrawer"
            ></a-button>
          </a-affix>
          <!-- 正文锚点 -->
          <a-layout-content><div id="anchor-next"></div></a-layout-content>
          <a-layout-content v-for="(m,key) in moduleIds" :key="key">
            <Home v-if="m.name === 'Home'" />
            <Illustration v-if="m.name === 'Illustration'" />
            <Blog v-if="m.name === 'Blog'" />
          </a-layout-content>
          <!-- <a-layout-footer><Footer/></a-layout-footer> -->
        </a-layout>
      </a-layout>
      <!-- 小屏侧边栏抽屉 -->
      <a-drawer
      class="drawer"
        placement="left"
        :closable="true"
        :visible="menuDrawerVisible"
        @close="onMenuDrawerClose"
      >
        <AppSlider @menuClick="onMenuDrawerClose" />
      </a-drawer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppSlider from "@/components/AppSlider/index.vue";
import Banner from "@/views/Banner.vue";
import Home from "@/views/Home.vue";
import Blog from "@/views/blog/index.vue";
import Illustration from "@/views/illustration/index.vue";
import { routes } from '@/router';

@Component({
  components: {
    Banner,
    AppSlider,
    Home,
    Blog,
    Illustration
  }
})
export default class extends Vue {
  get moduleIds() {
        return routes[0]?.children;
    }
  menuDrawerVisible = false;
  mounted() {
    
  }
  toggleMenuDrawer() {
    this.menuDrawerVisible = !this.menuDrawerVisible;
  }
  private onMenuDrawerClose() {
    this.menuDrawerVisible = false;
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  z-index: 0;
  height: 100vh;
  overflow: auto;
  padding: 0;
}

.layout-content {
  position: relative;
}
.sider-menu-trigger {
  position: absolute;
  top: 20px;
  z-index: 99999;

  &.drawer-closed {
    left: 20px;
  }

  &.drawer-open {
    left: 276px;
  }
}
.ant-drawer-body{
        padding: 0 24px !important;
    }
@media screen and (max-width: @screen-sm-min) {
  .layout-sider {
    display: none;
  }
}

@media screen and (min-width: @screen-sm-min) {
  .sider-menu-trigger {
    display: none;
  }

  .layout-sider {
    box-shadow: 1px 0 5px #e0e0e0;
    z-index: 999;
  }
}
</style>
