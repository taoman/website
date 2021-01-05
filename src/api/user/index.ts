/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-04 15:12:32
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-05 16:09:48
 */
import request from "@/api/request";
import { AxiosResponse } from "axios";
import {UserInterface} from '../../interface/user/user-interface';
export interface UserApi {
        userIndex:()=> Promise<AxiosResponse<UserInterface.Index[]>>
        
}
export const user = {
    async userIndex(){
        return request.get<UserInterface.Index>("user")
    }
} 