/*
 * @Descripttion:
 * @Author: taoman
 * @Date: 2021-02-02 16:52:42
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-24 16:56:37
 */
import request from "@/api/request";
// import { AxiosResponse } from "axios";
import { HitokotoInterface } from "../../interface/hitokoto/hitokoto-interface";

// export interface HitokotoApi {
//   showHitokoto: (c: string) => Promise<AxiosResponse<any>>;
// }
// export const hitokoto: HitokotoApi = {
//   async showHitokoto(c) {
//     return request.hitokoto.get("", { params: { c } });
//   }
// };

export class Hitokoto {
    async showHitokoto(params:string){
        return request.hitokoto.get<HitokotoInterface.HitokotoIndex[]>('',{params})
    }
}
