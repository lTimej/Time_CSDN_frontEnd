<template>
    <profile-sample class="profile-sample-all">
        <span slot="left">我的订单</span>
        <profile-sample-item>
            <i slot="icon" class="el-icon-notebook-2"></i>
            <span slot="text">全部</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-shopping-cart-full"></i>
            <span slot="text">待付款</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-chat-square"></i>
            <span slot="text">代发货</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-medal"></i>
            <span slot="text">待收货</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-chat-square"></i>
            <span slot="text">待评价</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-medal"></i>
            <span slot="text">售后</span>
        </profile-sample-item>
    </profile-sample>
</template>

<script>
    import ProfileSample from "components/contents/profile/ProfileSample";
    import ProfileSampleItem from "components/contents/profile/ProfileSampleItem";
    export default {
        name: "MyCurriculum",
        components:{
            ProfileSample,
            ProfileSampleItem
        }
    }
</script>

<style scoped>
    .self-define{
        margin: auto;
        color: #b4b4b4;
    }
</style>