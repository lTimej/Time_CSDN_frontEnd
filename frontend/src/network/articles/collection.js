import {requests} from "../requests";

//获取当前用户关注
export function userArticleCollection(aid) {
    return requests({
        url:'/v1/article/collection',
        method:'post',
        data:{
            aid:aid
        }
    })
}