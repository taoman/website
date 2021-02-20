/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 15:12:32
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-20 14:28:43
 */
import request from "@/api/request";
import { UserInterface } from "../../interface/user/user-interface";
// export interface UserApi {
//   userIndex: () => Promise<AxiosResponse<UserInterface.UserIndex>>;
// }
// export const user:UserApi = {
//   async userIndex() {
//     return request.user.get<UserInterface.UserIndex>("user");
//   }
// };

export class User{
  userIndex() {
    // return request.user.get<UserInterface.UserIndex>("user");
    return request.env.get<UserInterface.ConfigIndex>("config");
  }
  blogIndex() {
    return request.env.get('user');
  }
}
