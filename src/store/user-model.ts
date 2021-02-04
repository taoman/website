/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-04 11:30:41
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-04 10:40:52
 */
import {
    Module,
    Mutation,
    VuexModule,
    getModule,
    Action
  } from "vuex-module-decorators";
import store from "./index";
import {UserInterface} from "@/interface/user/user-interface";
import {HitokotoInterface} from "@/interface/hitokoto/hitokoto-interface"
import { module } from "@/api";
  @Module({dynamic:true,store,name:"userStore"})
  export class UserStore extends VuexModule{
    userData:UserInterface.IndexData[] = []
    hitokotoData:HitokotoInterface.HitokotoIndex[] = []
    @Mutation
    STE_USER_DATA(data:UserInterface.IndexData[]){
        this.userData = data
    }
    @Mutation
    SET_HITOKOTO_DATA(data:HitokotoInterface.HitokotoIndex[]){
      this.hitokotoData = data
    }
    @Action({ rawError: true })
    @Action
    async getUserData(){
        const res =await module.user.userIndex()
        this.STE_USER_DATA(res.data.data)
    }
    @Action
    async showHotokoto(){
      const res = await module.hitokoto.showHitokoto('c')
      console.log(res.data)
      this.SET_HITOKOTO_DATA(res.data)
    }
  }
export const UserModel = getModule(UserStore)