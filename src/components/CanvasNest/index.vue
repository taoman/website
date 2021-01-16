<!--
 * @Descripttion: 
 * @Author: yzj
 * @Date: 2021-01-16 14:43:20
 * @LastEditors: yzj
 * @LastEditTime: 2021-01-16 15:08:34
-->
<template>
  <div>
      <vue-canvas-nest :config="config" :el="`${el}`"></vue-canvas-nest>
  </div>
</template>
<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import vueCanvasNest from 'vue-canvas-nest';
@Component({
  components: {
      vueCanvasNest
  }
})
export default class CanvasNest extends Vue {
    @Prop({
        type:String,
        required:true
    })
    el!:string;
    config = {
    // 配置
    color: '255, 0, 0', // 线条颜色
    pointColor: '255, 155, 0', // 节点颜色
    opacity: 1, // 线条透明度
    count: 100, // 线条数量
    zIndex: 50 // 画面层级
}
mounted() {
 console.log(this.el);
    
}
}
</script>
<style lang="less" scoped></style>
