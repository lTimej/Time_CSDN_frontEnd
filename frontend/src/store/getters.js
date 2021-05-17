export default {
    getToken(state){
        return state.token;
    },
    getRefreshToken(state){
        return state.refresh_token;
    },
    get_user_info(state){
        return state.user_individule;
    },
    get_curr_path(state){
        return state.curr_path?state.curr_path:'/my/dynamic'
    },
    get_all_channels(state){
        return state.allChannels?state.allChannels:[];
    },
    get_default_channels(state){
        return state.defaultChannels?state.defaultChannels:[];
    },
    get_user_channels(state){
        return state.userChannels ? state.userChannels:[];
    },
    get_all_article_detail(state){
        return state.allArticleDetail ? state.allArticleDetail:[]
    },
    get_user_article_detail(state){
        return state.userArticleDetail ? state.userArticleDetail:[]
    }
}