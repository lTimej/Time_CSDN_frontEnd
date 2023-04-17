import axios from "axios";
import {refresh_token} from "./users/login";
import cookies from "vue-cookies";
export function requests(config){
    //实例化对象
    const instance = axios.create({
        baseURL:'http://172.20.16.20:8891',
        timeout: 5000,
        withCredentials: true,
    });

    //请求前调用
    instance.interceptors.request.use(config=>{
        //请求前，将token加入请求头
        config.headers.Authorization = "Bearer " + window.localStorage.getItem('token');
        //config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkI…4ODJ9.iNBJpkoribKS72gu6Ec_14Jsea8EsIpfm9JfOoMI00g"
        console.log("--------------请求前----------------",config,"**********");
        // var c = cookies.get("Set-Cookie")
        // console.log("黑黑黑黑黑黑",c,"哈哈哈哈啊哈")
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