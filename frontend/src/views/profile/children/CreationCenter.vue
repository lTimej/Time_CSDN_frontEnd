<template>
    <profile-sample class="profile-sample-all">
        <span slot="left">创作中心</span>
        <span slot="right">进入<i class="el-icon-arrow-right"></i></span>
        <profile-sample-item>
            <i slot="icon" class="el-icon-s-opportunity"></i>
            <span slot="text">我的创作</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-data-line"></i>
            <span slot="text">数据观星</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-picture-outline-round"></i>
            <span slot="text">收益</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-office-building"></i>
            <span slot="text">我的小店</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-upload2"></i>
            <span slot="text">上传文件</span>
        </profile-sample-item>
    </profile-sample>
</template>

<script>
    import ProfileSample from "components/contents/profile/ProfileSample";
    import ProfileSampleItem from "components/contents/profile/ProfileSampleItem";
    export default {
        name: "CreationCenter",
        components:{
            ProfileSample,
            ProfileSampleItem
        }
    }
</script>

<style scoped>
    .profile-sample-all{

    }
</style>