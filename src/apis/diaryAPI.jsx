//日記に関するリクエスト
import { request } from "../utils";
export function getDiaryAPI(){
    return request({
        url:'/diary',
        method:'GET',
    })
}
export function submitDiaryAPI(data){
    return request({
        url:'/submitDiary',
        method:'POST',
        data
    })
}