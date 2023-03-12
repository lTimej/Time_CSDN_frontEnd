import {requests} from "../requests";

//所有频道
export function allChannels() {
    return requests({
        url:'/v1/channel/articles/channel',
        method:'get',
    })
}
//默认频道
export function defaultChannels() {
    return requests({
        url:'/v1/channel/default/channel',
        method:'get',
    })
}

//获取用户频道
export function UserChannel() {
    return requests({
        url:'/v1/channel/user/channel',
        method:'get',
    })
}
//添加用户频道
export function addUserChannel(id,channel_name) {
    return requests({
        url:'/v1/channel/user/channel',
        method:'post',
        data:{
            channel_id:id,
            channel_name:channel_name
        }
    })
}

//修改用户频道
export function updateUserChannel(id) {
    return requests({
        url:'/v1/channel/user/channel',
        method:'patch',
        data:{
            channel_id:id,
        }
    })
}