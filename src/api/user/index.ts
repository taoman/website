/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 15:12:32
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-04 10:40:25
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
    return request.user.get<UserInterface.UserIndex>("user");
  }
}
