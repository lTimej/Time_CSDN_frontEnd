<template>
    <div class="profile">
        <nav-bar class="profile-nav">
            <img slot="left" src="~assets/img/tabbar/download.png">
            <img src="~assets/img/tabbar/icon-wap-toolbar-menu.png" slot="right">
        </nav-bar>
        <individule-home />
        <collections />
        <creation-center />
        <content-libs />
        <my-curriculum />
        <more-serve />
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
    export default {
        name: "Profile",
        components:{
            NavBar,
            IndividuleHome,
            Collections,
            CreationCenter,
            ContentLibs,
            MyCurriculum,
            MoreServe
        }
    }
</script>

<style scoped>

    .profile{
        top: 44px;
        bottom: 49px;
        height: 100vh;
        position: absolute;
        background-color: rgb(243, 243, 243);
    }
</style>