export default {
    SaveToken(context,payloads){
        context.commit('save_token',payloads)
    },
    SaveRefreshToken(context,payloads){
        context.commit('save_refresh_token',payloads)
    },
    DelToken(context){
        context.commit('del_token')
    },
    SaveIndividuleInfo(context,payloads){
        context.commit('save_individule_info',payloads)
    },
    SetPath(context,payloads){
        context.commit('setPath',payloads)
    }
}