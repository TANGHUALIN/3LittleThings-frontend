import axios from "axios";
import { getToken } from "./token";

const request = axios.create({
    baseURL: 'http://localhost:8080/3LittleThings',
    timeout: 5000
});

request.interceptors.request.use(function (config) {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // 注意这里使用了反引号 `` 而不是单引号 ''
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
//レスポンスがクライアントに戻る前に、レスポンスを処理する
request.interceptors.response.use(function (response) {
    //もしstatus codeが2XX
    return response;
}, function (error) {
    //もしstatus codeが2xxの範囲を超えると
    //レスポンスエラーに対して何をする
    //401時に、token無効
    console.dir(error)
    const statusCode=error.response.status
    if(statusCode===401){
        removeToken()
        router.navigate('/')
        window.location.reload()
    }else if(statusCode===404){
        router.navigate('/notfound')
        window.location.reload()
    }
    return Promise.reject(error)
});


export { request };
