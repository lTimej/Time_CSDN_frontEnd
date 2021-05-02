import axios from "axios";

export function requests(config){
    //实例化对象
    const instance = axios.create({
        baseURL:'http://192.168.153.130:8081',
        timeout: 5000
    });

    //请求前调用
    instance.interceptors.request.use(config=>{
        return config
    },error => {
        console.log(error);
        return error;
    });

    //响应前被调用
    instance.interceptors.response.use(res=>{
        return res
    },error => {
        console.log(error);
        return error.response;
    })

    //发送请求
    return instance(config)
}