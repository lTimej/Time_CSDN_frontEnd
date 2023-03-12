import {requests} from "../requests";

//登录认证
export function auth(username,password) {
    return requests({
        url:'/v1/user/login/auth',
        method:'post',
        data:{
            mobile:username,
            sms_code:password
        }
    })
}
//登录
export function login(username,password) {
    return requests({
        url:'/v1/user/login',
        method:'post',
        data:{
            username:username,
            password:password
        }
    })
}
//刷新token
export function refresh_token(){
    return requests({
        url:'/v1/user/login/auth',
        method:'put',
        headers:{
            Authorization : "Bearer " + window.localStorage.getItem('refresh_token')
        }
    })
}
//获取短信验证码
export function get_code(mobile){
    return requests({
        url:'/v1/user/login/smscode/' + mobile,
        method:'get',
    })
}