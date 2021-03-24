/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 15:12:32
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-24 15:28:06
 */
import request from "@/api/request";
import { UserInterface } from "../../interface/user/user-interface";

export class User{
  userIndex() {
    return request.env.get<UserInterface.ConfigIndex>("config");
  }
  blogIndex() {
    return request.env.get('user');
  }
}
