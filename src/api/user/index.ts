/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 15:12:32
 * @LastEditors: taoman
 * @LastEditTime: 2021-04-01 10:45:58
 */
import request from "@/api/request";
import { UserInterface } from "../../interface/user/user-interface";

export class User {
  userIndex() {
    return request.env.get<UserInterface.ConfigIndex>("config");
  }
  async blogIndex() {
    return request.env.get('user');
  }
  create(data: UserInterface.CreateParameter) {
    return request.env.post("create", data);
  }
  show(id: number) {
    return request.env.get(`show/${id}`);
  }
  update(id: number, data: UserInterface.CreateParameter) {
    return request.env.patch(`update/${id}`, data);
  }
  destory(id: number) {
    return request.env.delete(`destory/${id}`);
  }
}
