<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-16 14:20:33
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-31 14:47:13
-->
<template>
    <div class="Blog content" id="Blog">
        <ModuleHeader
            :title="blog.header.title"
            :sub-title="blog.header.subtitle"
        />
        <!-- <ModuleSkeleton :display="loading" :number="2"/> -->
        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="blogList">
            <a-list-item
                data-aos="fade-in"
                slot="renderItem"
                key="item.title"
                slot-scope="item"
            >
                <img
                    slot="extra"
                    alt="logo"
                    :src="item.img"
                />
                <a-list-item-meta>
                    <a slot="title" :href="item.href">{{ item.title }}</a>
                </a-list-item-meta>
                <span class="author">——{{ item.name }}</span>
                <!-- <a-button type="primary" @click="show(item.id)">
                    查看
                </a-button>
                <a-button type="primary" @click="destory(item.id)">
                    删除
                </a-button> -->
            </a-list-item>
        </a-list>
        <a-modal v-model="visible" title="Basic Modal" @ok="update">
      <a-form-model
            :model="modelForm"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-model-item label="title" prop="title">
                <a-input v-model="modelForm.title" placeholder="你喜欢的一句话" />
            </a-form-model-item>
            <a-form-model-item label="name" prop="name">
                <a-input v-model="modelForm.name" />
            </a-form-model-item>
        </a-form-model>
    </a-modal>
        <a-form-model
            :model="form"
            ref="form"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-model-item label="content" prop="title">
                <a-input v-model="form.title" placeholder="留下你喜欢的一句话" />
            </a-form-model-item>
            <a-form-model-item label="author" prop="name">
                <a-input v-model="form.name" placeholder="你的名字" />
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit"> 留言 </a-button>
                <a-button style="margin-left: 10px" @click="cancel">
                    取消
                </a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script lang=ts>
import { Vue, Component } from 'vue-property-decorator';
import ModuleHeader from '@/components/AppModuleHeader/index.vue';
import ModuleSkeleton from '@/components/AppModuleSkeleton/index.vue';
import { FormModel } from 'ant-design-vue';
import axios from 'axios';
@Component({
    components: {
        ModuleHeader,
        ModuleSkeleton
    }
})
export default class Blog extends Vue {
    pagination ={
        // onChange: (page:any) => {
        //   console.log(page);
        // },
        pageSize: 3
        }
    img=''
    blogList = []
    visible = false
    updateId = 0
    labelCol = { span: 4 }
    wrapperCol = { span: 14 }
    form = {
        title: '',
        name: ''
    }
    modelForm = {
        title: '',
        name: ''
    }
    loading = true
    get blog() {
        return this.$stores.userModel.userData?.modules[2]
    }
    mounted() {
        this.blogIndex()
    }
    
    async blogIndex(){
        const res = await this.$module.user.blogIndex()
        this.blogList = res;
        // this.blogList.img = `https://www.liquanquan.top/assets/images/rem${x}.jpg`
    }

    async onSubmit() {
        let data = this.form
        const res = await this.$module.user.create(data);
        (this.$refs.form as FormModel).resetFields()
        this.blogIndex()
    }
    async show(id:number){
        this.updateId = id
        this.visible = true
        const res = await this.$module.user.show(id)
        let data = res.data.data
        this.modelForm.title = data.title;
        this.modelForm.name = data.name;
    }
    async destory(id: number) {
        const res = await this.$module.user.destory(id)
        this.blogIndex()
    }
    async update(){
        let data = this.modelForm
        // await axios.patch(`http://localhost:7002/update/${this.updateId}`,data).then(res=>{
        //     console.log(res)
        // })
        const res = await this.$module.user.update(this.updateId,data)
        this.blogIndex()
        this.visible = false
    }
    cancel() {
       (this.$refs.form as FormModel).resetFields()
    }
}
</script>

<style lang='less' scoped>
.blog {
    text-align: left;
}
img{
    width: 100px;
    height: 100px;
    border-radius: 50px;
}
.ant-list-item {
    text-align: center;
    /deep/.ant-list-item-main {
        display: flex;
        align-items: center;
        position: relative;
    }
    .author {
        position: absolute;
        bottom: 10%;
        right: 10%;
    }
}
</style>