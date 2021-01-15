<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 14:20:33
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-14 15:31:23
-->
<template>
    <div class="Blog" id="Blog">
        blog页
        <vue-canvas-nest :config="config" :el="'#Blog'"> blog页</vue-canvas-nest>
    </div>
</template>

<script lang=ts>
import { Vue, Component } from 'vue-property-decorator'

import vueCanvasNest from 'vue-canvas-nest';

@Component({
    components: {
        vueCanvasNest 
    }
})
export default class Blog extends Vue {
  config = {
    // 配置
    color: '255, 0, 0', // 线条颜色
    pointColor: '255, 155, 0', // 节点颜色
    opacity: 1, // 线条透明度
    count: 25, // 线条数量
    zIndex: 1 // 画面层级
}
}
</script>

<style lang='less' scoped>
.Blog {
    height: 100vh;
}
</style>