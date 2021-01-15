/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 13:14:48
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-11 10:29:27
 */
import { UserApi,user } from "./user";
interface UserType {
    user:UserApi
}
const $api:UserType = {
  user
};
export { $api,UserApi };