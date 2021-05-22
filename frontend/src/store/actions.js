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
    },
    SaveAllChannels(context,payloads){
        context.commit('save_all_channels',payloads)
    },
    SaveDefaultChannels(context,payloads){
        context.commit('save_default_channels',payloads)
    },
    SaveUserChannels(context,payloads){
        context.commit('save_user_channels',payloads)
    },
    SaveAllArticleDetail(context,payloads){
        context.commit('save_all_article_detail',payloads)
    },
    SaveUserArticleDetail(context,payloads){
        context.commit('save_user_article_detail',payloads)
    },
    SaveFocusList(context,payloads) {
        console.log(888888,payloads)
        context.commit("save_focus_list", payloads)
    },
    SaveFansList(context,payloads) {
        context.commit("save_fans_list", payloads)
    },
}