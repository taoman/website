<template>
  <div>
    <router-view />
  </div>
</template>

<script lang=ts>

import {Vue, Component} from 'vue-property-decorator';

@Component({})

export default class  extends Vue {
mounted() {
  this.$stores.userModel.getUserData()
}
}

</script>

<style lang='less' scoped></style>