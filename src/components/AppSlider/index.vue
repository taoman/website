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
                    <a v-smooth-scroll :href="'#' + m.name" @click="closeMenuDrawer">{{m.meta.title}}</a>
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
@Component({
    components: {  }
})
export default class AppHeader extends Vue {
     banner = 
        {
            title: 'taoman'
        }
    get menus() {
        return routes[0]?.children;
    }
    private closeMenuDrawer() {
            this.$emit('menuClick');
        }
    // onMenuclick(event:any){
    //     this.$emit('menuClick');
    //     this.$router.push({
    //         name:event.key
    //     })
    // }
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
                width: 100px;
                height: 100px;
                line-height: 100px;
                border: 1px dotted #888;
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
            text-align: left;
            li{
                padding-left: 30%;
            }
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
