export default {
    getToken(state){
        return state.token;
    },
    getRefreshToken(state){
        return state.refresh_token;
    },
    get_user_info(state){
        return state.user_individule;
    }
}