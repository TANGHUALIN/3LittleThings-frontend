import axios from "axios";
import { getToken, removeToken } from "./token";

const request = axios.create({
    baseURL: 'YOUR URL',
    timeout: 5000
});

request.interceptors.request.use(function (config) {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});


request.interceptors.response.use(function (response) {
    return response;
}, function (error) {
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

