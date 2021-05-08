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
    }
}