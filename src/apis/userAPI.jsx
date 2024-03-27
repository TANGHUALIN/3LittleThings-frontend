//ユーザに関するリクエスト
import { request } from "../utils";
export function loginAPI(formData){
    return request({
        url:'/login',
        method:'POST',
        data:formData
    })
}
export function signupAPI(formData){
    return request({
        url:'/signup',
        method:'POST',
        data:formData
    })
}

export function getUidAndDiaryAPI(){
    return request(
        {
            url:'/newDiary',
            method:'GET',
        }
    )
}