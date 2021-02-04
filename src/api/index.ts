/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 13:14:48
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-04 10:41:15
 */
import { User} from "./user";
import { Hitokoto } from "./hitokoto";
class Module {
  constructor() {
    this.user = new User()
    this.hitokoto = new Hitokoto();
  }
  user:User;
  hitokoto: Hitokoto;
}

export const module = new Module()
export interface ApiModule extends Module{}

