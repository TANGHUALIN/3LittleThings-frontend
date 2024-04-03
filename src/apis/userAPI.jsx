//ユーザに関するリクエスト
import { request } from "../utils";
export function verifyAPI(temptoken){
    return request({
        url: '/verify',
        method: 'GET',
        params: {
            token: temptoken
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
            url:'/uid',
            method:'GET',
        }
    )
}