/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-04 11:30:41
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-22 17:02:55
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
//基础数据
const BasisData ={
  title: "taoman",
  social: {
    github: "https://github.com/taoman"
  },
  banner: {
    anchor: {
      id: "banner",
      icon: "home",
      name: "首页"
    },
    title: "taoman",
    desc: [
      "北方汉子",
      "爱旅行的美食家",
      "原画爱好者"
    ]
  },
  modules: [{
      display: true,
      anchor: {
        id: "about",
        icon: "user",
        name: "关于"
      },
      header: {
        title: "information",
        subtitle: "about me"
      },
      content: {
        name: "岳阳楼记",
        desc: [
          "落霞与孤鹜齐飞",
          "秋水共长天一色"
        ],
        md: "鄙人taoman，纯北方汉子"
      },
      keys: {
        "主页": "http://liquanquan.top",
        "博客": "http://liquanquan.top"
      }
    },
    {
      display: true,
      anchor: {
        id: "experience",
        icon: "idcard",
        name: "经历"
      },
      header: {
        title: "experience",
        subtitle: "my experience"
      },
      cards: [
        {
        title: "我爱飞翔教育科技有限公司",
        subtitle: "2018-2019",
        md: "<<u>创业小青年</u>>\
        \n\
        \n路漫漫其修远兮，吾将上下而求索"
      },
      {
        title: "海航科技有限公司",
        subtitle: "2016-12 至 2018-08",
        md: "<!--**<u>飞机维修工程师</u>**-->\
        \n\
        \n海航是将我引向'互联网'的一艘船\
        "
      }
      ]
    },
    {
      display: true,
      anchor: {
        id: "blog",
        icon: "profile",
        name: "博客"
      },
      header: {
        title: "blog",
        subtitle: "latest blog"
      },
      blog: "https://segmentfault.com/blog/manerfan",
      rss: "https://segmentfault.com/feeds/blog/manerfan"
    }
  ]
}
  @Module({dynamic:true,store,name:"userStore"})
  
  export class UserStore extends VuexModule{
    userData:UserInterface.IndexData | null = null
    hitokotoData:HitokotoInterface.HitokotoIndex[] = []
    @Mutation
    SET_USER_DATA(data:UserInterface.IndexData){
        this.userData = data
    }
    @Mutation
    SET_HITOKOTO_DATA(data:HitokotoInterface.HitokotoIndex[]){
      this.hitokotoData = data
    }
    @Action({ rawError: true })
    @Action
    async getUserData(){
        // const res =await module.user.userIndex()
        // let data = JSON.parse(res.data.data[0].value)
          this.SET_USER_DATA(BasisData)
        
    }
    @Action
    async showHotokoto(){
      const res = await module.hitokoto.showHitokoto('c')
      this.SET_HITOKOTO_DATA(res.data)
    }
  }
export const UserModel = getModule(UserStore)