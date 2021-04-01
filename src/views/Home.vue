<template>
    <div class="content about" id="Home">
        <ModuleHeader
            :title="about.header.title"
            :sub-title="about.header.subtitle"
        />
        <!-- <ModuleSkeleton :display="true" :number="2" /> -->
        <a-row type="flex" justify="center" align="top">
            <!-- 头像 -->
            <a-col class="col" :xs="24" :sm="24" :md="24" :lg="10" :xl="8">
                <img
                    data-aos="fade-in"
                    class="avatar"
                    draggable="false"
                    src="https://www.liquanquan.top/assets/images/rem0.jpg"
                />
            </a-col>
            <!-- 内容 -->
            <a-col
                class="color-content col"
                :xs="24"
                :sm="24"
                :md="24"
                :lg="14"
                :xl="16"
            >
                <!-- title -->
                <span data-aos="fade-in" class="title color-title">{{
                    about.header.subtitle
                }}</span>
                <!-- 简介 -->
                <span data-aos="fade-in" class="brief typer black">
                    {{ about.content.name }}，
                    <vue-typer
                        :text="about.content.desc || ''"
                        :type-delay="200"
                        eraseStyle="select-all"
                    ></vue-typer>
                </span>
                <!-- 正文 -->
                <vue-markdown data-aos="fade-in">{{
                    about.content.md
                }}</vue-markdown>
                <!-- 关键词 -->
                <a-row
                    data-aos="fade-in"
                    class="keys-row"
                    type="flex"
                    align="top"
                >
                    <a-col
                        class="keys-col"
                        v-for="(value, name) in about.keys"
                        v-bind:key="name"
                        :xs="24"
                        :sm="24"
                        :md="12"
                        :lg="12"
                        :xl="12"
                    >
                        <span class="key">{{ name }}:</span>
                        <a
                            class="value"
                            v-if="isUrl(value)"
                            :href="value"
                            target="_blank"
                            >{{ value }}</a
                        >
                        <span v-else>{{ value }}</span>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </div>
</template>

<script lang=ts>
import { Vue, Component } from 'vue-property-decorator';
import { VueTyper } from 'vue-typer';
import VueMarkdown from 'vue-markdown';
import ModuleHeader from '@/components/AppModuleHeader/index.vue';
import ModuleSkeleton from '@/components/AppModuleSkeleton/index.vue';
@Component({
    components: {
        VueMarkdown,
        VueTyper,
        ModuleHeader,
        ModuleSkeleton
    }
})
export default class Home extends Vue {
    get about() {
        return this.$stores.userModel.userData?.modules[0]
    }
    mounted() {

    }
    isUrl(content: string): boolean {
        const strRegex =
            '^(((https|http|ftp|rtsp|mms):)?//)' +
            "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + // ftp的user@
            '(([0-9]{1,3}.){3}[0-9]{1,3}' + // IP形式的URL- 199.194.52.184
            '|' + // 允许IP和DOMAIN（域名）
            "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
            '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' + // 二级域名
            '[a-z]{2,6})' + // first level domain- .com or .museum
            '(:[0-9]{1,4})?' + // 端口- :80
            '((/?)|' + // a slash isn't required if there is no file name
            "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"
        const re = new RegExp(strRegex)
        return re.test(content)
    }
}
</script>

<style lang='less' scoped>
.about {
    // height: 100vh;
    .col {
        padding: 0 1rem;
    }

    .avatar {
        display: block;
        width: 10rem;
        border-radius: 4rem;
    }

    .title {
        letter-spacing: 5px;
        text-transform: uppercase;
    }
    /deep/.aos-init p{
        line-height: 28px;
    }
    .brief {
        display: block;
        margin: 1rem auto;
    }
    @media screen and (max-width: @screen-md-min) {
        .col {
            padding: 0;
            &.color-content {
                margin-top: 1.5rem;
            }
        }
    }

    .keys-row {
        margin: 1rem auto;

        .keys-col {
            margin: 0.5rem auto;
            word-break: break-all;
            padding-right: 1rem;

            .key {
                margin-right: 0.5rem;
                font-weight: bold;
            }

            .value {
                color: inherit;
                text-decoration: underline;
            }
        }
    }
}
</style>