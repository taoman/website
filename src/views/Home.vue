<template>
  <div class="bg-section">
    这是首页banner
    <p>qwedqsd</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>
<style lang="less">
.bg-section{
  background:url('../assets/images/bg.png');
 -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    // background-position: center center;
    // -webkit-transition: all .4s ease;
    // transition: all .4s ease;
}
</style>
