import {requests} from "../requests";

//评论
export function userArticleComment(aid,content) {
    return requests({
        url:'/v1/article/comment',
        method:'post',
        data:{
            article_id:aid,
            content:content
        }
    })
}
//查看部分评论
export function getuserArticleSectorComment(type,source,limit=5) {
    return requests({
        url:'/v1/article/comment',
        method:'get',
        params:{
            type:type,
            source:source,
            limit:limit
        }
    })
}