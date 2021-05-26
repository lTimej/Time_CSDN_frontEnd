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
//文章浏览状态
export function getArticleStatus(aid,uid) {
    return requests({
        url:'/v1/article/status',
        method:'get',
        params:{
            aid:aid,
            uid:uid
        }
    })
}