/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-02-02 16:59:38
 * @LastEditors: taoman
 * @LastEditTime: 2021-02-03 11:34:13
 */
export namespace HitokotoInterface {
    export interface HitokotoIndex {
        data: HitokotoData[];
      }
    export interface HitokotoData {
        id: number;
        uuid: string;
        hitokoto: string;
        type: string;
        from: string;
        from_who: string;
        creator: string;
        creator_uid: number;
        reviewer: number;
        commit_from: string;
        created_at: string;
        length: number;
    }

}

