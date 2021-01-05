/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-01-04 13:14:48
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-04 16:04:08
 */
import {UserApi, user } from "./user";
interface UserType {
    user:UserApi
}
const $api:UserType = {
  user
};
export { $api,UserType };
