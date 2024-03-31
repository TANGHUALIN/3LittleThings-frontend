//ユーザに関するリクエスト
import { request } from "../utils";
export function verifyAPI(temptoken){
    return request({
        url: '/verify',
        method: 'GET',
        params: {
            token: temptoken // 将 token 参数作为查询参数添加到 URL 中
        }
    });
}
export function signupAPI(formData){
    return request({
        url:'/signup',
        method:'POST',
        data:formData
    })
}

export function getUidAPI(){
    return request(
        {
            url:'/newDiary',
            method:'GET',
        }
    )
}