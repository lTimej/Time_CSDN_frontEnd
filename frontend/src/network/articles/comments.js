import {requests} from "../requests";

//评论
export function userArticleComment(aid,cid,content) {
    return requests({
        url:'/v1/article/comment',
        method:'post',
        data:{
            article_id:aid,
            comment_id:cid,
            content:content
        }
    })
}
//查看部分评论
export function getuserArticleSectorComment(type,article_id,offset,limit) {
    return requests({
        url:'/v1/article/comment',
        method:'get',
        params:{
            type:type,
            article_id:article_id,
            offset:offset,
            limit:limit
        }
    })
}
//查看部分评论
export function getuserArticleCommentComment(type,source,limit=5) {
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