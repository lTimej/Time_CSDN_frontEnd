import {requests} from "../requests";

//获取当前用户关注
export function userSearch(keyword,page,page_num) {
    return requests({
        url:'/v1/user/search',
        method:'get',
        params:{
            keyword:keyword,
            page:page,
            page_num:page_num
        }
    })
}
//用户搜索历史
export function userSearchHistory() {
    return requests({
        url:'/v1/search/history',
        method:'get'
    })
}
//清除用户搜索历史
export function clearUserSearchHistory() {
    return requests({
        url:'/v1/search/history',
        method:'delete'
    })
}
//搜索建议
export function searchSuggest(keyword) {
    return requests({
        url:'/v1/search/suggest',
        method:'get',
        params:{
            keyword:keyword
        }
    })
}