<template>
    <a-layout class="layout-menu">
        <!-- 头像 -->
        <div class="header">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../../assets/images/avatar.jpg" />
            </span>
            <span>{{ banner.name || 'taoman' }}</span>
        </div>
        <!-- 菜单 -->
        <a-layout-content class="menu">
            <a-menu>
                <!-- 根据配置动态模块的内容和顺序 -->
                <a-menu-item v-for="m in menus" :key="m.name">
                    <a-icon :type="m.meta.icon" />
                    <a
                        v-smooth-scroll
                        :href="'#' + m.name"
                        @click="closeMenuDrawer"
                        >{{ m.meta.title }}</a
                    >
                </a-menu-item>
            </a-menu>
        </a-layout-content>

        <!-- 菜单页脚 -->
        <a-layout-footer class="footer">
            <!-- <live2d
                :style="style"
                :model="[1, 53]"
                :direction="direction"
                :size="size"
            ></live2d> -->
            fotter
            <!-- <a-row type="flex" justify="center" align="middle" :gutter="2">
                <a-col span="24"><Social color="rgb(136,136,136)" :size="1.2"/></a-col>
            </a-row>
            <a-row type="flex" justify="center" align="middle" :gutter="2">
                <a-col span="24"><Copyrights color="rgb(136,136,136)" :size=".6"/></a-col>
            </a-row> -->
        </a-layout-footer>
    </a-layout>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { routes } from '@/router'
import live2d from 'vue-live2d'
@Component({
    components: { live2d }
})
export default class AppHeader extends Vue {
    banner = {
        title: 'taoman'
    }
    direction = 'left'
    style = ''
    width = 300
    height = 300
    size = 300
    tips = {
        mouseover: [
            {
                selector: '.vue-live2d',
                texts: ['就这']
            }
        ]
    }
    get menus() {
        return routes[0]?.children
    }
    private closeMenuDrawer() {
        this.$emit('menuClick')
    }
    // onMenuclick(event:any){
    //     this.$emit('menuClick');
    //     this.$router.push({
    //         name:event.key
    //     })
    // }
    created() {
    //  this.tips = this.customTips   
    }
}
</script>
<style lang="less">
.layout-menu {
    width: 100%;
    height: 100vh;
    // text-align: center;

    .header,
    .menu,
    .footer {
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
            margin-top: 0.5rem;
            font-size: 1.2em;
            font-weight: 500;
            text-align: center;
            color: @color-gray;
        }
    }

    .menu {
        text-align: left;
        li {
            padding-left: 30%;
        }
        * {
            font-size: 1em;
        }

        a {
            display: inline-block;
        }
    }

    .footer {
        padding: 10px;
        margin-bottom: 1rem;
        * {
            color: @color-gray;
        }

        & > div {
            margin: 3.5rem auto;
        }
    }
}
</style>
