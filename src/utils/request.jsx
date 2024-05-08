import axios from "axios";
import { getToken, removeToken } from "./token";

const request = axios.create({
    baseURL: 'http://localhost:8080/3LittleThings',
    timeout: 5000
});

request.interceptors.request.use(function (config) {
    const token = getToken();
    if (token) {
        console.log("token in request interceptors", token);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 在拦截器中使用路由实例
// 通过参数传递
request.interceptors.response.use(function (response) {
    // 如果status code是2XX
    return response;
}, function (error) {
    // 如果status code不是2xx范围内
    // 对响应错误做处理
    console.dir(error);
    const statusCode = error.response.status;
    if (statusCode === 401) {
        removeToken()
        redirectToHomePage()
    }
    return Promise.reject(error)
});


function redirectToHomePage() {
    window.location.href = '/'
}

export { request };

