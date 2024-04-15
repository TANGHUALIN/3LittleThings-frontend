//日記に関するリクエスト
import { request } from "../utils";
export function getDiaryAPI(){
    return request({
        url:'/displayDiary',
        method:'GET',
    })
}

export function getEntryAddedAPI(formData){
    return request(
        {
            url:'/addDiary',
            method:'POST',
            data:formData
        }
    )
}