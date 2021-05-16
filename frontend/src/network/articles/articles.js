import {requests} from "../requests";

//每个频道的文章
export function getChannelArticle(channel_id,page,page_num) {
    return requests({
        url:'/v1/articles/' + channel_id,
        method:'get',
        params:{
            page:page,
            page_num:page_num
        }
    })
}
//每个用户的文章
export function getUserArticle(page,page_num) {
    return requests({
        url:'/v1/user/articles',
        method:'get',
        params:{
            page:page,
            page_num:page_num
        }
    })
}