<template>
    <profile-sample class="profile-sample-all">
        <span slot="left">我的内容库</span>
        <profile-sample-item>
            <i slot="icon" class="el-icon-video-play"></i>
            <span slot="text">我的课程</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-shopping-cart-full"></i>
            <span slot="text">付费专栏</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-notebook-1"></i>
            <span slot="text">电子书</span>
        </profile-sample-item>
    </profile-sample>
</template>

<script>
    import ProfileSample from "components/contents/profile/ProfileSample";
    import ProfileSampleItem from "components/contents/profile/ProfileSampleItem";
    export default {
        name: "ContentLibs",
        components:{
            ProfileSample,
            ProfileSampleItem
        }
    }
</script>

<style scoped>

</style>