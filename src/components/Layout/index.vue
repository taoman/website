<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 14:37:22
 * @LastEditors: taoman
 * @LastEditTime: 2020-12-23 16:28:25
-->
<template>
  <div>
    <a-layout>
    <a-layout-header class="layout-header"><Banner/></a-layout-header>
    <a-layout>
    <a-layout-header> <AppHeader /></a-layout-header>
    <AppContent />
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