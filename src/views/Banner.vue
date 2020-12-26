<template>
    <div class="banner" id="banner">
        <!-- 加载层 -->
        <div class="bg back"><h1></h1></div>
        <!-- 角贴 -->
        <div class="fork-me">
            <a
                class="fork-me-link"
                href="https://github.com/manerfan/vuesume/wiki"
                target="_blank"
            >
                <span class="fork-me-text">Docs On GitHub</span>
            </a>
        </div>
        <!-- 背景层 -->
        <div data-aos="fade-in" class="bg"></div>
        <!-- 内容层 -->
        <div data-aos="fade-in" class="desc">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../assets/images/avatar.jpg" />
            </span>
            <div>
                <h1>{{ banner.title || 'taoman' }}</h1>
                <h3 class="typer white">
                    <vue-typer
                        :text="banner.desc"
                        :type-delay="200"
                        eraseStyle="select-all"
                    ></vue-typer>
                </h3>
            </div>
        </div>
        <!-- <a
            data-aos="fade-in"
            class="scroll-next animated infinite bounce"
            href="#anchor-next"
            v-smooth-scroll
        >
            <a-icon type="double-right" />
        </a> -->
    </div>
</template>
<script lang=ts>
import { Vue, Component } from 'vue-property-decorator'
import { VueTyper } from 'vue-typer'
@Component({
    components: {
        VueTyper
    }
})
export default class extends Vue {
    banner = 
        {
            title: 'taoman',
            desc: ['爱旅行的美食家','原画爱好者']
        }
}
</script>

<style lang="less">
.banner {
    display: flex;
    position: relative;
    width: 100vw;
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
        text-align: center;
        h1 {
            display: block;
            margin-top: 35vh;
            color: @font-color;
            font-size: 2em;
            text-shadow: 0 0 5px @color-gray;
        }
    }
    .desc {
        text-align: center;
        margin: auto;
        margin-bottom: 40vh;
        .avatar {
            width: 160px;
            height: 160px;
            line-height: 160px;
            margin-bottom: 10%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
}
</style>

