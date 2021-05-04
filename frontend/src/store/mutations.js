export default{
    save_token(state,payloads){
        state.token = payloads
    },
    del_token(state){
        window.localStorage.removeItem('token')
        state.token = ""
    },
    save_individule_info(state,payloads){
        state.user_individule = payloads
    }
}