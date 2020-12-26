<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-21 14:28:09
 * @LastEditors: yzj
 * @LastEditTime: 2020-12-26 14:40:06
-->
<template>
  <div class="content">
      <router-view></router-view>
  </div>
</template>

<script lang=ts>

import {Vue, Component} from 'vue-property-decorator';

@Component({})

export default class  extends Vue {

}

</script>

<style lang='less' scoped>
.content{
  width: 100%;
  height: 100%;
  display: block;
}
</style>