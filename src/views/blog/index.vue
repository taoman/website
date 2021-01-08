<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 14:20:33
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-07 16:04:49
-->
<template>
  <div class="Blog" id="Blog">
      blog页
  </div>
</template>

<script lang=ts>

import {Vue, Component} from 'vue-property-decorator';

@Component({})

export default class Blog extends Vue {
  mounted() {
    // this.user();
  }
  async user(){
  }
}

</script>

<style lang='less' scoped>
.Blog{
  height: 100vh;
}
</style>