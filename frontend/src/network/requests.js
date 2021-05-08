import axios from "axios";
import {refresh_token} from "./users/login";

export function requests(config){
    //实例化对象
    const instance = axios.create({
        baseURL:'http://192.168.153.132:8081',
        timeout: 5000
    });

    //请求前调用
    instance.interceptors.request.use(config=>{
        //请求前，将token加入请求头
        config.headers.Authorization = "Bearer " + window.localStorage.getItem('token');
        console.log(999999,config);
        return config
    },error => {
        console.log(error);
        return error;
    });

    //响应前被调用
    instance.interceptors.response.use(res=>{
        //成功响应
        return res
    },error => {
        //错误响应
        return error.response;

    });

    //发送请求
    return instance(config)
}