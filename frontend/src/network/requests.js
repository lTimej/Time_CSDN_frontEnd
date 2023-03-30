import axios from "axios";
import {refresh_token} from "./users/login";

export function requests(config){
    //实例化对象
    const instance = axios.create({
        baseURL:'http://172.20.16.20:8888',
        timeout: 5000
    });

    //请求前调用
    instance.interceptors.request.use(config=>{
        //请求前，将token加入请求头
        config.headers.Authorization = "Bearer " + window.localStorage.getItem('token');
        console.log("--------------请求前----------------",config);
        return config
    },error => {
        console.log(error);
        return error;
    });

    //响应前被调用
    instance.interceptors.response.use(res=>{
        //成功响应
        console.log(res,666666)
        return res
    },error => {
        //错误响应
        console.log(error,88888888)
        return error.response;

    });

    //发送请求
    return instance(config)
}