import {requests} from "../requests";

//登录认证
export function userProfile() {
    return requests({
        url:'/v1/curr/user',
        method:'get'
    })
}