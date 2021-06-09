export default{
    save_token(state,payloads){
        state.token = payloads
    },
    save_refresh_token(state,payloads){
      state.refresh_token = payloads
    },
    del_token(){
        window.localStorage.clear();
    },
    save_individule_info(state,payloads){
        state.user_individule = payloads
    },
    setPath(state,payloads){
        state.curr_path = payloads
    },
    save_all_channels(state,payloads){
        state.allChannels = payloads
    },
    save_default_channels(state,payloads){
        state.defaultChannels = payloads
    },
    save_user_channels(state,payloads){
        state.userChannels = payloads
    },
    save_all_article_detail(state,payloads){
        state.allArticleDetail = payloads
    },
    save_user_article_detail(state,payloads){
        state.userArticleDetail = payloads
    },
    save_focus_list(state,payloads){
        console.log(99999,payloads)
        state.focusList = payloads
    },
    save_fans_list(state,payloads){
        state.fansList = payloads
    },
    save_comment_list(state,payloads){
        state.comments = payloads
    }
}