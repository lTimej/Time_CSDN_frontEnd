import {requests} from "../requests";

//获取当前用户聊天记录
export function getUserChatRecord(target_user_id,page,page_num) {
    return requests({
        url:'/v1/im/chat/records',
        method:'get',
        params:{
            target_user_id:target_user_id,
            page:page,
            page_num:page_num
        }
    })
}

//获取当前用户聊天列表
export function getUserChatList() {
    return requests({
        url:'/v1/im/user/list',
        method:'get',
    })
}

export  function uploadChatPicture(file) {
    return requests({
        url:'/v1/im/chat/upload/picture',
        method:'post',
        // headers:{
        //     'Content-Type':'multipart/form-data'
        // },
        data:file
    })
}

export  function getUserChatCount() {
    return requests({
        url:'/v1/im/chat/count',
        method:'get',
    })
}

