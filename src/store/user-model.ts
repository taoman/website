/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 11:30:41
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-24 16:30:01
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
    title: "taoman",
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
        desc: ["纯北方汉子", "暂居江南"],
        md:
          "非科班出身的前端菜鸟一枚，时常会自闭到怀疑人生，怀疑世界，但依旧热爱生活。\
        \n\
         始终对事情事物保持敬畏感\n\
         对感兴趣的东西充满好奇心，已然走在了向二次元进阶的道路上。\n\
         一直以来就想拥有自己的一个网站，脑海中浮现着无数的想法，起初也想和大多数程序员一样做一个博客网站。\n\
         但后面否定了这个想法，因为生活中我们经历过却不复重现的事情太多了。\n\
         所以还是打算做一个生活类的网站，留住一些美好的，自己喜欢的东西，提供一个给我们能稍作休憩的空间。\n\
         所以开始上手并搭建了一个比较简单的静态页面和一些简单的交互操作。\n\
         这也让我接触上手了一下网站的发布流程，包括域名、云服务器nginx的一些配置。\n\
         当然，这也可以说是练练手，为以后的版本做准备。"
      },
      keys: {
        主页: "https://liquanquan.top",
        博客: "https://liquanquan.top"
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
          title: "为商云服",
          subtitle: "2020-至今",
          md:
            "<<u>前端</u>>\
          \n\
          \n路漫漫其修远兮，吾将上下而求索"
        },
        {
          title: "我爱飞翔教育科技有限公司",
          subtitle: "2018-2019",
          md:
            "<<u>创业小青年</u>>\
        \n\
        \n路漫漫其修远兮，吾将上下而求索"
        },
        {
          title: "飞凡创新工作室",
          subtitle: "2017-2018",
          md:
            "<<u>乐趣在于航模</u>>\
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
  hitokotoData: HitokotoInterface.HitokotoIndex[] = [];
  @Mutation
  SET_USER_DATA(data: UserInterface.IndexData) {
    this.userData = data;
  }
  @Mutation
  SET_HITOKOTO_DATA(data: HitokotoInterface.HitokotoIndex[]) {
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
    const res = await module.hitokoto.showHitokoto("c");
    this.SET_HITOKOTO_DATA(res.data);
  }
}
export const UserModel = getModule(UserStore);
