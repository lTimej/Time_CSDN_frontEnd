import {requests} from "../requests";

//获取当前用户关注
export function userFocus(page,page_num) {
    return requests({
        url:'/v1/user/focus',
        method:'get',
        params:{
            page:page,
            page_num:page_num
        }
    })
}
//获取当前用户粉丝
export function userFans(page,page_num) {
    return requests({
        url:'/v1/user/fans',
        method:'get',
        params:{
            page:page,
            page_num:page_num
        }
    })
}
//获取当前用户关注
export function focusUser(target) {
    return requests({
        url:'/v1/user/focus',
        method:'post',
        data:{
            target:target
        }
    })
}