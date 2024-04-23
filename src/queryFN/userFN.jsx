import { loginAPI,verifyAPI } from "../apis/userAPI";

export async function fetchTokenWhenLogin(value){
    const res =await loginAPI(value) 
    return res.data;
}
export async function fetchTokenWhenVerify(temptoken){
    const res =await verifyAPI(temptoken) 
    return res.data;
}



