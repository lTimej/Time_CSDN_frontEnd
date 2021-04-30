<template>
    <profile-sample class="profile-sample-all">
        <span slot="left">我的内容库</span>
        <profile-sample-item>
            <i slot="icon" class="el-icon-notebook-2"></i>
            <span slot="text">极客日报</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-shopping-cart-full"></i>
            <span slot="text">付费专栏</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-chat-square"></i>
            <span slot="text">我的贴子</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-medal"></i>
            <span slot="text">勋章</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-present"></i>
            <span slot="text">抽奖记录</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-data-analysis"></i>
            <span slot="text">预约直播</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-document"></i>
            <span slot="text">订单</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-wind-power"></i>
            <span slot="text">任务中心</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-warning-outline"></i>
            <span slot="text">帮助反馈</span>
        </profile-sample-item>
    </profile-sample>
</template>

<script>
    import ProfileSample from "components/contents/profile/ProfileSample";
    import ProfileSampleItem from "components/contents/profile/ProfileSampleItem";
    export default {
        name: "MoreServe",
        components:{
            ProfileSample,
            ProfileSampleItem
        }
    }
</script>

<style scoped>

</style>