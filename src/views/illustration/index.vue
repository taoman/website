<template>
  <div class="content" id="Illustration" v-if="experience">
        <ModuleHeader :title="experience.header.title" :sub-title="experience.header.subtitle"/>
        <a-timeline>
            <a-timeline-item data-aos="fade-in" v-for="card in experience.cards" v-bind:key="card.title + card.subtitle">
                <a-card class="experience-card" :bordered="true" style="width: 100%">
                    <template slot="title">
                        <h1 class="title">{{card.title}}</h1>
                        <span v-if="!!card.subtitle" class="sub-title">{{card.subtitle}}</span>
                    </template>
                    <vue-markdown>{{card.md}}</vue-markdown>
                </a-card>
            </a-timeline-item>
        </a-timeline>
    </div>
</template>

<script lang=ts>

import {Vue, Component,Watch} from 'vue-property-decorator';
import ModuleHeader from '@/components/AppModuleHeader/index.vue';
import VueMarkdown from 'vue-markdown';
@Component({
  components:{
    ModuleHeader,
    VueMarkdown
  }
})

export default class Illustration extends Vue {
  experience = []
  @Watch("$stores.userModel.userData")
    handData(newVal:any){
        this.experience = newVal[0].modules[1]
    }
  // get experience(){
  //   return this.$stores.userModel.userData[0]?.modules[1]
  // }
  mounted() {
    
  }
  
}

</script>

<style lang='less' scoped>
.content{
  height: 100vh;
  .experience-card {
        .title {
            width: 100%;
            font-size: 1rem;
            // overflow: scroll;
            margin: 0;
        }

        .sub-title {
            width: 100%;
            font-size: .5rem;
            display: block;
            margin-top: .5rem;
        }
    }
}
</style>