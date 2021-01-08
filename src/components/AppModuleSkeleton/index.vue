<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-08 15:47:01
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-08 16:46:40
-->
<template>
  <div class="skeleton" v-if="display">
        <a-skeleton v-for="num in seq" v-bind:key="num" data-aos="fade-in" active avatar :paragraph="{rows: 3}"/>
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
    display !: boolean
    get seq(){
        return _.times((this as any).number);
    }
}

</script>

<style lang='less' scoped></style>