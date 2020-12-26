<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 14:37:22
 * @LastEditors: yzj
 * @LastEditTime: 2020-12-26 14:42:47
-->
<template>
  <div>
    <a-layout>
    <a-layout-header class="layout-header"><Banner/></a-layout-header>
    <a-layout>
    <a-layout-header> <a-affix ><AppHeader /></a-affix></a-layout-header>
    <a-layout-content><AppContent /></a-layout-content>
    </a-layout>
    </a-layout>
  </div>
</template>

<script lang=ts>

import {Vue, Component} from 'vue-property-decorator';
import AppHeader from "@/components/AppHeader/index.vue";
import AppContent from "@/components/AppContent/index.vue";
import Banner from "@/views/Banner.vue"
@Component({
    components:{
        Banner,
        AppHeader,
        AppContent
    }
})

export default class  extends Vue {

}

</script>

<style lang='less' scoped>
  .layout-header{
    height: 100vh;
  }
</style>