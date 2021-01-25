/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-04 11:30:41
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-19 11:34:39
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
    userData:UserInterface.IndexData[] = []
    @Mutation
    STE_USER_DATA(data:UserInterface.IndexData[]){
        this.userData = data
    }
    @Action({ rawError: true })
    @Action
    async getUserData(){
        const res = await $api.user.userIndex()
        
        this.STE_USER_DATA(res.data.data)
    }
  }
export const UserModel = getModule(UserStore)