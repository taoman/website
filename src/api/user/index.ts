/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 15:12:32
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-31 14:48:25
 */
import request from "@/api/request";
import { UserInterface } from "../../interface/user/user-interface";

export class User {
  userIndex() {
    return request.env.get<UserInterface.ConfigIndex>("config");
  }
  async blogIndex() {
    // return request.env.get('user');
    const res = await request.env.get("user");
    let data = res.data.data.rows;
    let num = Math.random();
    num = num * 11;
    let x = Math.floor(num);
    data.forEach((res: any) => {
      res.img = `https://www.liquanquan.top/assets/images/rem${4}.jpg`;
    });
    return data;
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
