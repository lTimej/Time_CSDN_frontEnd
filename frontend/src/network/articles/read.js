import {requests} from "../requests";
//阅读
export function userArticleRead(aid) {
    return requests({
        url:'/v1/article/reads',
        method:'post',
        data:{
            aid:aid
        }
    })
}