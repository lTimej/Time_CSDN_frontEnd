import {requests} from "../requests";

//评论
export function userArticleComment(aid,cid,content) {
    console.log(3333333,cid);
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