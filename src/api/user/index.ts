/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 15:12:32
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-07 10:25:54
 */
import request from "@/api/request";
import { AxiosResponse } from "axios";
import { UserInterface } from "../../interface/user/user-interface";
export interface UserApi {
        userIndex:()=> Promise<AxiosResponse<UserInterface.UserIndex>>

}
export const user = {
    async userIndex(){
        return request.get<UserInterface.UserIndex>("user")
    }
}
//更简单的写法 以后再改吧
// export class UserData{
//   userIndex() {
//     return request.get<UserInterface.UserIndex>("user");
//   }
// }
