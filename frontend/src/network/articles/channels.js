import {requests} from "../requests";

//登录认证
export function allChannels() {
    return requests({
        url:'/v1/articles/channel',
        method:'get',
    })
}