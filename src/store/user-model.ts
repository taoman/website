/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 11:30:41
 * @LastEditors: taoman
 * @LastEditTime: 2024-03-18 11:07:43
 */
import {
  Module,
  Mutation,
  VuexModule,
  getModule,
  Action
} from "vuex-module-decorators";
import store from "./index";
import { UserInterface } from "@/interface/user/user-interface";
import { HitokotoInterface } from "@/interface/hitokoto/hitokoto-interface";
import { module } from "@/api";
//基础数据
const BasisData: UserInterface.IndexData = {
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
    title: "Taoman",
    desc: ["北方汉子", "爱旅行的美食家", "原画爱好者"]
  },
  modules: [
    {
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
        name: "鄙人Taoman",
        desc: ["纯北方汉子", "人在长安"],
        md:
          "时常会怀疑人生，怀疑世界，但依旧热爱生活。\
        \n\
         始终对事物保持敬畏感\n\
         有过一年半载的创业经历，见过高山，路过湖海，到过荒漠\n\
         后辗转行至江南，兴趣使然，便入前端之行列\n\
         时间不断沉淀着每个人，当初的菜鸟现在也能独当一面\n\
         创业的经历也能使我更快速的融入团队\n\
         我心犹热爱生活，乐于发现新事物，涉猎新知，与人交流，挑战舒适之境，追求个人成长与进步\n\
         亦愿与他人分享所得知识与经验，共同成长\n\
         理想与现实都有，在现实中\n\
         成为一个能够影响他人、推动社会进步的人，那便是再好不过了"
      },
      keys: {
        主页: "https://liquanquan.top",
        vue3后台模板: "https://liquanquan.top/vue-admin"
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
          title: "翼支付",
          subtitle: "2023.11-至今",
          md:
            "<<u>前端</u>>\
          \n\
          \n百尺竿头，更进一步"
        },
        {
          title: "雷澜科技",
          subtitle: "2023.3-2023.10",
          md:
            "<<u>前端</u>>\
          \n\
          \n不断沉淀，独当一面"
        },
        {
          title: "为商云服",
          subtitle: "2020-2022",
          md:
            "<<u>前端</u>>\
          \n\
          \n路漫漫其修远兮，吾将上下而求索"
        },
        {
          title: "我爱飞翔教育",
          subtitle: "2018-2019",
          md:
            "<<u>创业小青年</u>>\
        \n\
        \n人之相知，贵在知心"
        },
        {
          title: "飞凡创新工作室",
          subtitle: "2017-2018",
          md:
            "<<u>享受DIY的乐趣</u>>\
        \n\
        \n指引我方向的一艘船"
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
        subtitle: "latest interactive"
      },
      blog: "https://segmentfault.com/blog/manerfan",
      rss: "https://segmentfault.com/feeds/blog/manerfan"
    }
  ]
};
@Module({ dynamic: true, store, name: "userStore" })
export class UserStore extends VuexModule {
  userData: UserInterface.IndexData | null = null;
  hitokotoData: HitokotoInterface.HitokotoData | null = null;
  @Mutation
  SET_USER_DATA(data: UserInterface.IndexData) {
    this.userData = data;
  }
  @Mutation
  SET_HITOKOTO_DATA(data: HitokotoInterface.HitokotoData) {
    this.hitokotoData = data;
  }
  @Action({ rawError: true })
  @Action
  async getUserData() {
    // const res =await module.user.userIndex()
    // let data = JSON.parse(res.data.data[0].value)
    this.SET_USER_DATA(BasisData);
  }
  @Action
  async showHotokoto() {
    const res = await module.hitokoto.showHitokoto();
    this.SET_HITOKOTO_DATA(res.data);
  }
}
export const UserModel = getModule(UserStore);
