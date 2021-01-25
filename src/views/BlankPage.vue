<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-21 13:38:35
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-22 16:48:17
-->
<template>
  <div>
      <transition mode="out-in">
      <router-view></router-view>
      </transition>
  </div>
</template>

<script lang=ts>

import {Vue, Component} from 'vue-property-decorator';

@Component({})

export default class BlankPage extends Vue {

}

</script>

<style lang='less' scoped></style>