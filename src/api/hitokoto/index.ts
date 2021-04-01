/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-02-02 16:52:42
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-25 10:55:08
 */
import request from "@/api/request";
// import { AxiosResponse } from "axios";
import { HitokotoInterface } from "../../interface/hitokoto/hitokoto-interface";

export class Hitokoto {
    async showHitokoto(data?:HitokotoInterface.IndexParameter){
        return request.hitokoto.get<HitokotoInterface.HitokotoData>('',{data})
    }
}
