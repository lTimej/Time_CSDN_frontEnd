export default {
    SaveToken(context,payloads){
        context.commit('save_token',payloads)
    },
    DelToken(context){
        context.commit('del_token')
    },
    SaveIndividuleInfo(context,payloads){
        context.commit('save_individule_info',payloads)
    }
}