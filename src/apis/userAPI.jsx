//ユーザに関するリクエスト
import { request } from "../utils";
export function verifyAPI(temptoken){
    return request({
        url: '/login',
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
export function loginAPI(formData){
    return request({
        url:'/login',
        method:'POST',
        data:formData
    })
}

export function findPasswordAPI(formData){
    return request({
        url:'/findPassword',
        method:'POST',
        data:formData
    })
}
export function changePasswordAPI(formData){
    return request({
        url:'/changePassword',
        method:'POST',
        data:formData
    })
}