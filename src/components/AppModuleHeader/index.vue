<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-07 10:44:30
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-13 16:40:30
-->
<template>
   <div class="heading">
        <a-row class="color-title"><a-col :span="24"><span>{{title}}</span></a-col></a-row>
        <a-row class="color-content"><a-col :span="24"><h2>{{subTitle}}</h2></a-col></a-row>
    </div>
</template>

<script lang=ts>

import {Vue, Component,Prop} from 'vue-property-decorator';

@Component({})

export default class ModuleHeader extends Vue {
    @Prop({
        type:String,
        required:true
    })
    title !:string;
    @Prop({
        type:String,
        required:true
    })
    subTitle !:string
}

</script>

<style lang='less' scoped>
.heading {
        border-left: 6px solid #E3872D;
        padding: .5em 0 0 1.5em;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 30px;

        span {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 400;
            letter-spacing: 5px;
        }

        h2 {
            font-weight: 500;
            font-size: 30px;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin: 0;
        }
    }
</style>