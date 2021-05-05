import {requests} from "../requests";

//登录认证
export function auth(username,password) {
    return requests({
        url:'/v1/login/auth',
        method:'post',
        data:{
            mobile:username,
            sms_code:password
        }
    })
}
//刷新token
export function refresh_token(){
    return requests({
        url:'/v1/login/auth',
        method:'put',
        headers:{
            Authorization : "Bearer " + window.localStorage.getItem('refresh_token')
        }
    })
}
//获取短信验证码
export function get_code(mobile){
    return requests({
        url:'/v1/login/smscode/' + mobile,
        method:'get',
    })
}