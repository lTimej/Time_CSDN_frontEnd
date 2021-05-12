import {requests} from "../requests";

//登录认证
export function getChannelArticle(channel_id,page,page_num) {
    console.log(666,channel_id);
    return requests({
        url:'/v1/articles/' + channel_id,
        method:'get',
        params:{
            page:page,
            page_num:page_num
        }
    })
}