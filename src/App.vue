<template>
    <div id="app">
        <WaveItem />
        <router-view />
        
    </div>
</template>

<script lang=ts>
import { Vue, Component } from 'vue-property-decorator'
import  WaveItem from '@/components/waves/index.vue'
@Component({
    components: {
        // vueCanvasNest,
        WaveItem
    }
})
export default class App extends Vue {
    // config = {
    //     // 配置
    //     color: '255, 0, 0', // 线条颜色
    //     pointColor: '255, 155, 0', // 节点颜色
    //     opacity: 1, // 线条透明度
    //     count: 150, // 线条数量
    //     zIndex: 0 // 画面层级
    // }

    
    mounted() {
        this.$stores.userModel.getUserData()
        this.$stores.userModel.showHotokoto()
    }
}
</script>

<style lang='less' scoped>
// #app {
//     text-align: center;
//     color: #2c3e50;
// }

// #nav {
//     padding: 30px;

//     a {
//         font-weight: bold;
//         color: #2c3e50;

//         &.router-link-exact-active {
//             color: #42b983;
//         }
//     }
// }
canvas {
    background: rgb(226, 225, 225);
    opacity: 0.3;
}
</style>