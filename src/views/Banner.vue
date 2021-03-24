<template>
     <div class="banner" id="banner">
        <!-- 加载层 -->
        <!-- <div class="bg back"><h1>123456</h1></div> -->
        <!-- 脚贴 -->
        <div class="fork-me">
            <a class="fork-me-link" href="https://github.com/taoman" target="_blank">
                <span class="fork-me-text">Docs On GitHub</span>
            </a>
        </div>
        <!-- 背景层 -->
        <div data-aos="fade-in" class="bg"></div>
        <!-- 内容层 -->
        <div data-aos="fade-in" class="desc">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../assets/images/avatar.jpg">
            </span>
            <div v-if="userData">
                <h1 >{{userData.title || 'taoman'}}</h1>
                <h3 class="typer white">
                    <vue-typer :text="hotokotoList|| 'taoman'" :type-delay='200' eraseStyle='select-all'></vue-typer>
                </h3>
            </div>
        </div>
        <a class="scroll-next animated infinite bounce" href="#Home" v-smooth-scroll>
            <a-icon type="double-right" />
        </a>
    </div>
</template>
<script lang=ts>
import { Vue, Component } from 'vue-property-decorator'
import { VueTyper } from 'vue-typer';
import { HitokotoInterface } from '@/interface/hitokoto/hitokoto-interface';
@Component({
    components: {
        VueTyper
    }
})
export default class Banner extends Vue {
    hotokotoList:HitokotoInterface.HitokotoData[] = []
    get userData(){
        return this.$stores.userModel.userData?.banner
    }
    mounted() {
        this.$nextTick(()=>{
            this.getHitokoto()
        })
        
        setInterval(() => {
            setTimeout(() => {
                this.getHitokoto()
            }, 1000);
        }, 5000);
        
    }
    async getHitokoto() {
        const res = await this.$module.hitokoto.showHitokoto('k')
        this.hotokotoList = res.data.hitokoto
    }
}
</script>

<style lang="less">
@import '../assets/less/fork';
.banner {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // background: url('../assets/images/bg_banner.jpg') no-repeat center
        //     center scroll;
        z-index: -1;
        background-size: cover;
        .back{
            z-index: -2;
        }
        h1 {
            display:inline-block;
            margin-top: 45vh;
            color: @font-color;
            font-size: 2em;
            text-shadow: 0 0 5px @color-gray;
        }
    }
    .desc {
        text-align: center;
        // margin: auto;
        margin-bottom: 20vh;
        * {
                // display: block;
                margin: auto;
                color: @font-color;
                text-shadow: 0 0 5px rgba(0, 0, 0, .5);
            }
        .avatar {
            z-index: -1;
            width: 160px;
            height: 160px;
            line-height: 160px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        h1 {
                font-size: 3em;
                margin: 3rem auto 1rem;
            }

            h3 {
                font-size: 1.5em;
                color:#fafafa;
                .vue-typer {
                    display: inline-block;
                }
            }
    }
    @media screen and(max-width: @screen-sm-min) {
        h1 {
            font-size: 2em;
        }
        h3 {
            font-size: 1.3em;
        }
    }
    .scroll-next {
            position: absolute;
            display: inline-block;
            padding: 2rem 0;
            bottom: 1vh;
            left: 50%;
            font-size: 1.5rem;
            color: @font-color;
            animation-duration: 2s;
            animation-delay: 1s;
            transform: rotate(45deg);
        }
}
</style>

