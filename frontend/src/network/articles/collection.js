import {requests} from "../requests";

//收藏
export function userArticleCollection(aid) {
    return requests({
        url:'/v1/article/collection',
        method:'post',
        data:{
            aid:aid
        }
    })
}
//获取当前用户收藏文章
export function getUserArticleCollection(page,page_num) {
    return requests({
        url:'/v1/article/collection',
        method:'get',
        params:{
            page:page,
            page_num:page_num
        }
    })
}
//取消收藏
export function cancelUserArticleCollection(aid) {
    return requests({
        url:'/v1/article/collection',
        method:'delete',
        data:{
            aid:aid
        }
    })
}