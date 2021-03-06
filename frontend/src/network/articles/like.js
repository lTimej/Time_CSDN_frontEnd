import {requests} from "../requests";
//点赞
export function userArticleLike(aid) {
    return requests({
        url:'/v1/article/likes',
        method:'post',
        data:{
            aid:aid
        }
    })
}
//取消点赞
export function cancelUserArticleLike(aid) {
    return requests({
        url:'/v1/article/likes',
        method:'delete',
        data:{
            aid:aid
        }
    })
}
//获取点赞人数点赞
export function articleLike(aid) {
    return requests({
        url:'/v1/article/likes',
        method:'get',
        params:{
            aid:aid
        }
    })
}
//评论点赞
export function commentLike(cid) {
    return requests({
        url:'/v1/comment/like',
        method:'post',
        data:{
            cid:cid
        }
    })
}
//评论点赞
export function commentDislike(cid) {
    return requests({
        url:'/v1/comment/like',
        method:'delete',
        data:{
            cid:cid
        }
    })
}