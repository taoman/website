/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-04 11:30:41
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-05 16:13:19
 */
import {
    Module,
    Mutation,
    VuexModule,
    getModule,
    Action
  } from "vuex-module-decorators";
import store from "./index";
import {UserInterface} from "@/interface/user/user-interface"
import { $api } from "@/api";
  @Module({dynamic:true,store,name:"userStore"})
  export class UserStore extends VuexModule{
    userData:UserInterface.Index[] = []
    @Mutation
    STE_USER_DATA(data:UserInterface.Index[]){
        console.log(data);
        this.userData = data
    }
    @Action
    async getUserData(){
        const res = await $api.user.userIndex()
        this.STE_USER_DATA(res.data)
    }
  }
export const UserModel = getModule(UserStore)