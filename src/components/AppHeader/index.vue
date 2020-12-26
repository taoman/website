<template>
    <div id="header">
        <a-menu mode="horizontal" @click="onMenuclick" >
            <template v-for="item in routerList">
                <template v-if="item.children && item.children.length > 0">
                    <SubMenu
                        :key="`${item.path}`"
                        :menu-info="item"
                        v-if="item.children && item.children.length > 0"
                    ></SubMenu>
                </template>
                <template v-else>
                    <a-menu-item :key="`${item.path}$${item.name}`" >{{
                        item.meta.title
                    }}</a-menu-item>
                </template>
            </template>
        </a-menu>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { routes } from '@/router'
import { Menu } from 'ant-design-vue'
const SubMenu = {
    template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.meta.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path + '$' + item.name">
            <a-icon type="pie-chart" />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
    name: 'SubMenu',
    // must add isSubMenu: true
    isSubMenu: true,
    props: {
        ...(Menu.SubMenu as any).props,
        // Cannot overlap with properties within Menu.SubMenu.props
        menuInfo: {
            type: Object,
            default: () => ({})
        }
    }
}
@Component({
    components: { SubMenu }
})
export default class AppHeader extends Vue {
    get routerList() {
        return routes[0]?.children
    }
    onMenuclick(val: any) {
        const pathName: string[] = val.key.split('$')
        const path = pathName[0]
        const name = pathName[1]

        this.$router.push({
            name: name
        })
    }
}
</script>
<style lang="less">
@ant-background:#FBD786;
.ant-menu{
        height: 64px;
        line-height: 64px;
        background: @ant-background;
    }
//   ul{
//     background: @ant-background !important;
//   }
//   /deep/ div .ant-menu-submenu .ant-menu ,/deep/ .ant-menu-submenu > .ant-menu {
//       background: @ant-background;
//   }
//     .ant-menu .ant-menu-vertical .ant-menu-sub .ant-menu-submenu-content {
//         background: @ant-background;
//     }
//     .ant-menu-item {
//         background: @ant-background;
//     }
//     .ant-menu-submenu-popup {
//         background: @ant-background;
//     }

</style>
