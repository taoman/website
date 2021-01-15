<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-08 15:47:01
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-13 16:37:17
-->
<template>
  <div class="skeleton" v-if="display">
        <a-skeleton v-for="(num,key) in seq" :key="key" data-aos="fade-in" active avatar :paragraph="{rows: 3}"/>
    </div>
</template>

<script lang=ts>

import {Vue, Component,Prop} from 'vue-property-decorator';
import _ from "lodash"
@Component({})

export default class ModuleSkeleton extends Vue {
    @Prop({
        type:Boolean,
        default:()=>false
    })
    display !: boolean;
    @Prop({
        type:Number,
        default:()=>0
    })
    number !: number;
    get seq(){
        return _.times((this as any).number);
    }
    mounted() {
    }
}

</script>

<style lang='less' scoped></style>