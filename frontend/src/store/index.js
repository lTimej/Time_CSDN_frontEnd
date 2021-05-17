import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        token:window.localStorage.getItem('token')?window.localStorage.getItem('token'):"",
        refresh_token:window.localStorage.getItem('refresh_token')?window.localStorage.getItem('refresh_token'):"",
        user_individule:"",
        allChannels:[],
        defaultChannel:[],
        userArticleDetail:[],
        allArticleDetail:[],
    },
    mutations:mutations,
    actions:actions,
    getters:getters
});

export default store