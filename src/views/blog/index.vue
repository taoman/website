<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 14:20:33
 * @LastEditors: yzj
 * @LastEditTime: 2021-01-16 15:06:57
-->
<template>
    <div class="Blog" id="Blog">
        blog页
          <!-- <CanvasNest :el="'#Blog'"></CanvasNest> -->
    </div>
</template>

<script lang=ts>
import { Vue, Component } from 'vue-property-decorator'
// import CanvasNest from '@/components/CanvasNest/index.vue'

@Component({
    components: {
            // CanvasNest
    }
})
export default class Blog extends Vue {
}
</script>

<style lang='less' scoped>
.Blog {
    height: 100vh;
}
</style>