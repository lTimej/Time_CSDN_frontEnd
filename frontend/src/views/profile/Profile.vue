<template>
    <div class="profile">
        <nav-bar class="profile-nav">
            <img slot="left" src="~assets/img/tabbar/download.png">
            <img src="~assets/img/tabbar/icon-wap-toolbar-menu.png" slot="right" @click="account_setting">
        </nav-bar>
        <scroll
             class="content"
            >
            <individule-home />
            <collections />
            <creation-center />
            <content-libs />
            <my-curriculum />
            <more-serve />
            <div>{{get_user_info}}</div>
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

    import Collections from "components/contents/profile/Collections";
    import {mapGetters} from 'vuex'

    import Scroll from "components/common/scroll/Scroll";
    export default {

        name: "Profile",
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
            account_setting(){
                this.$router.push('/account/setting').catch(()=>{})
            }
        },
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