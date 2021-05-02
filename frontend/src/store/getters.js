export default {
    getToken(state){
        return state.token;
    },
    delToken(state){
        state.token = "";
        window.localStorage.clear();
    }
}