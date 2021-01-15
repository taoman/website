<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang=ts>

import {Vue, Component} from 'vue-property-decorator';

@Component({})

export default class App extends Vue {
mounted() {
 this.$stores.userModel.getUserData()
}
}

</script>

<style lang='less' scoped>
#app {
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>