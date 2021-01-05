/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-05 13:53:41
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-05 13:55:24
 */
import {UserModel,UserStore} from "./user-model";
export interface StoreType {
    userModel:UserStore;
  }
  export const stores:StoreType = {
    userModel:UserModel
  }