<template>
  <div>
    <router-view />
  </div>
</template>

<script lang=ts>

import {Vue, Component} from 'vue-property-decorator';

@Component({})

export default class App extends Vue {
created() {
  // this.$stores.userModel.init()
  console.log(JSON.parse(sessionStorage.userData));
}

}

</script>

<style lang='less' scoped></style>