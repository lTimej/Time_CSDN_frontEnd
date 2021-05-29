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