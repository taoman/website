<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 14:20:33
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-19 11:53:13
-->
<template>
    <div class="Blog content" id="Blog">
        <ModuleHeader :title="blog.header.title" :sub-title="blog.header.subtitle"/>
        <ModuleSkeleton :display="loading" :number="2"/>
        <a-list item-layout="vertical" size="large" :data-source="listData">
            <div slot="footer"><b>ant design vue</b> footer part</div>
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
                {{ item.content }}
            </a-list-item>
        </a-list>
        </div>
</template>

<script lang=ts>
import { Vue, Component } from 'vue-property-decorator';
import ModuleHeader from '@/components/AppModuleHeader/index.vue';
import ModuleSkeleton from '@/components/AppModuleSkeleton/index.vue';
const listData:any = []
for (let i = 0; i < 3; i++) {
    listData.push({
        href: 'https://www.antdv.com/',
        title: `ant design vue part ${i}`,
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles.'
    })
}
@Component({
    components: {
        ModuleHeader,
        ModuleSkeleton
    }
})
export default class Blog extends Vue {
    listData = listData
    actions = [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' }
    ]
    get blog() {
        return this.$stores.userModel.userData[0]?.modules[2]
    }
    mounted() {
     console.log(this.blog);   
    }
}
</script>

<style lang='less' scoped>
.blog {
        text-align: left;
    }
</style>