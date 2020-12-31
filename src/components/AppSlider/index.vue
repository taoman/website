<template>
    <a-layout class="layout-menu">
        <!-- 头像 -->
        <div class="header">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../../assets/images/avatar.jpg">
            </span>
            <span>{{banner.name|| 'taoman'}}</span>
        </div>
        <!-- 菜单 -->
        <a-layout-content class="menu">
            <a-menu>
                <!-- 根据配置动态模块的内容和顺序 -->
                <a-menu-item v-for="m in menus" :key="m.name">
                    <a-icon :type="m.meta.icon" />
                    <router-link :to="{name:'m.name'}">{{m.meta.title}}</router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-content>
        <!-- 菜单页脚 -->
        <!-- <a-layout-footer class="footer">
            <a-row type="flex" justify="center" align="middle" :gutter="2">
                <a-col span="24"><Social color="rgb(136,136,136)" :size="1.2"/></a-col>
            </a-row>
            <a-row type="flex" justify="center" align="middle" :gutter="2">
                <a-col span="24"><Copyrights color="rgb(136,136,136)" :size=".6"/></a-col>
            </a-row>
        </a-layout-footer> -->
    </a-layout>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { routes } from '@/router'
import { Menu } from 'ant-design-vue';
import router from '@/router';
@Component({
    components: {  }
})
export default class AppHeader extends Vue {
     banner = 
        {
            title: 'taoman',
            desc: ['爱旅行的美食家','原画爱好者']
        }
    // menus = [
    //     {
    //     id: "home",
    //     icon: "idcard",
    //     name: "首页"
    //   },
    //     {
    //     id: "about",
    //     icon: "global",
    //     name: "关于"
    //   }
    // ]
    get menus() {
        return routes[0]?.children;
    }
    closeMenuDrawer(val:any){
        console.log(val)
    }
}
</script>
<style lang="less">
.layout-menu {
        width: 100%;
        height: 100vh;
        // text-align: center;

        .header, .menu, .footer {
            background-color: white !important;
        }

        .header {
            margin: 2rem auto;
            .avatar {
                width: 80px;
                height: 80px;
                line-height: 80px;
            }
            span {
                display: block;
                margin-top: .5rem;
                font-size: 1.2em;
                font-weight: 500;
                text-align: center;
                color: @color-gray;
            }
        }

        .menu {
            * {
                font-size: 1em;
            }

            a {
                display: inline-block;
            }
        }

        // .footer {
        //     padding: 10px;
        //     margin-bottom: 1rem;
        //     * {
        //         color: @color-gray;
        //     }

        //     & > div {
        //         margin: .5rem auto;
        //     }
        // }
    }
</style>
