//日記に関するリクエスト
import { request } from "../utils";
export function getDiaryAPI(formData){
    return request({
        url:'/',
        method:'POST',
        data:formData
    })
}
export function submitDiaryAPI(data){
    return request({
        url:'/submitDiary',
        method:'POST',
        data
    })
}