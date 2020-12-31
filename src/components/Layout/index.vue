<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 14:37:22
 * @LastEditors: taoman
 * @LastEditTime: 2020-12-31 14:01:01
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
                                'drawer-open': menuDrawerVisible
                            }"
                            shape="circle"
                            size="large"
                            :icon="menuDrawerVisible ? 'arrow-left' : 'bars'"
                            @click="toggleMenuDrawer"
                        ></a-button>
                    </a-affix>
                    <!-- 正文锚点 -->
                    <!-- <a-layout-content
                        ><div id="anchor-next"></div
                    ></a-layout-content> -->
                    <a-layout-content id="anchor-next">
                        <AppContent></AppContent>
                    </a-layout-content>
                    <!-- <a-layout-footer><Footer/></a-layout-footer> -->
                </a-layout>

            </a-layout>
            <!-- 小屏侧边栏抽屉 -->
        <a-drawer placement="left" :closable="true" :visible="menuDrawerVisible" @close="onMenuDrawerClose">
            <AppSlider @menuClick="onMenuDrawerClose" />
        </a-drawer>
        </a-layout>
    </div>
</template>

<script lang=ts>
import { Vue, Component } from 'vue-property-decorator';
import AppSlider from '@/components/AppSlider/index.vue';
import AppContent from '@/components/AppContent/index.vue';
import Banner from '@/views/Banner.vue';
@Component({
    components: {
        Banner,
        AppSlider,
        AppContent
    }
})
export default class extends Vue {
    moduleIds = ['第一部分', '第二部分']
    menuDrawerVisible = false
    toggleMenuDrawer() {
        this.menuDrawerVisible = !this.menuDrawerVisible
    }
    private onMenuDrawerClose() {
            this.menuDrawerVisible = false;
        }
}
</script>

<style lang='less' scoped>
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