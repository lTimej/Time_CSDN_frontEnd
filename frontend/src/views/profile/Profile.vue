<template>
    <div class="profile">
        <nav-bar class="profile-nav">
            <img slot="left" src="~assets/img/tabbar/download.png">
            <img src="~assets/img/tabbar/icon-wap-toolbar-menu.png" slot="right" @click="account_setting">
        </nav-bar>
        <scroll
             class="content"
             ref="scroll"
            >
            <individule-home :individule_info="individuleInfo" />
            <collections />
            <creation-center />
            <content-libs />
            <my-curriculum />
            <more-serve />
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import IndividuleHome from "./children/IndividuleHome";
    import CreationCenter from "./children/CreationCenter";
    import ContentLibs from "./children/ContentLibs";
    import MyCurriculum from "./children/MyCurriculum";
    import MoreServe from "./children/MoreServe";

    import{userProfile} from "network/users/profile";
    import {refresh_token} from "network/users/login";

    import Collections from "components/contents/profile/Collections";
    import {mapActions, mapGetters} from 'vuex'

    import Scroll from "components/common/scroll/Scroll";
    export default {
        inject:['reload'],
        name: "Profile",
        data(){
            return{
                individuleInfo:{}
            }
        },
        components:{
            NavBar,
            IndividuleHome,
            Collections,
            CreationCenter,
            ContentLibs,
            MyCurriculum,
            MoreServe,
            Scroll
        },
        methods:{
            ...mapGetters(['get_user_info']),
            ...mapActions({
                SaveIndividuleInfo:'SaveIndividuleInfo',
                logout: 'DelToken',
                saveToken:'SaveToken',
                saveRefreshToken:'SaveRefreshToken'
            }),
            account_setting(){
                this.$router.push('/account/setting').catch(()=>{})
            },
            get_user_individule_info(){
                userProfile().then(res=>{
                    if (res.status===401){
                        refresh_token().then(ret=>{
                            if(ret.status===403){//refresh_token过期
                                this.logout();
                                this.$router.push('/login/phone')
                            }else if(ret.status===201){//刷新成功，保存新的token
                                window.localStorage.clear();
                                window.localStorage.setItem('token',ret.data.token);
                                window.localStorage.setItem('refresh_token',ret.data.refresh_token);
                                this.saveToken(ret.data.token);
                                this.saveRefreshToken(ret.data.refresh_token);
                                this.$router.replace('/profile')
                            }
                        })
                    }else if(res.status===201){
                        this.SaveIndividuleInfo(res.data);
                        this.individuleInfo = res.data
                    }
                })
            }
        },
        mounted() {

        },
        created() {


        },
        activated() {
            //页面打开一次，刷新一次

            this.get_user_individule_info();
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    .profile-nav{
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .profile{
        height: 100vh;
        position: relative;
        background-color: rgb(243, 243, 243);
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>