import {requests} from "../requests";

//获取city
export function getcity(pid) {
    return requests({
        url:'/v1/city/city',
        method:'get',
        params:{
            pid:pid,
        }
    })
}


