<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 14:20:33
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-04 10:34:41
-->
<template>
    <div class="Blog content" id="Blog">
        <ModuleHeader :title="blog.header.title" :sub-title="blog.header.subtitle"/>
        <!-- <ModuleSkeleton :display="loading" :number="2"/> -->
        <a-list item-layout="vertical" size="large" :data-source="listData">
            <a-list-item data-aos="fade-in" slot="renderItem" key="item.title" slot-scope="item">
                <img
                    slot="extra"
                    width="272"
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
                <a-list-item-meta :description="item.description">
                    <a slot="title" :href="item.href">{{ item.title }}</a>
                </a-list-item-meta>
                {{ item.author }}
            </a-list-item>
        </a-list>
        </div>
</template>

<script lang=ts>
import { Vue, Component } from 'vue-property-decorator';
import ModuleHeader from '@/components/AppModuleHeader/index.vue';
import ModuleSkeleton from '@/components/AppModuleSkeleton/index.vue';
import {HitokotoInterface} from "@/interface/hitokoto/hitokoto-interface";
@Component({
    components: {
        ModuleHeader,
        ModuleSkeleton
    }
})
export default class Blog extends Vue {
    listData = [
        {
            title:'远方到底有多远,银烛秋光冷画屏，轻罗小扇扑流萤。',
            author:'taoman'
        },
        {
            title:'心之所想，心之所向',
            author:'wenayi'
        }
    ]
    loading = true
    hotokotoList:HitokotoInterface.HitokotoData[] = []
    actions = [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' }
    ]
    get blog() {
        return this.$stores.userModel.userData[0]?.modules[2]
    }
    mounted() {
    }
    getHitokoto(){
        const res1 = this.$module.hitokoto.showHitokoto('c')
        const res = this.$api.hitokoto.showHitokoto('c')
    }
}
</script>

<style lang='less' scoped>
.blog {
        text-align: left;
    }
.ant-list-item{
    text-align: center;
    /deep/.ant-list-item-main{
        display: flex;
        align-items: center;
    }
}
</style>