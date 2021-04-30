<template>
    <div class="profile-sample">
        <div class="profile-sample-title">
            <div class="left"><slot name="left"></slot></div>
            <div class="right"><slot name="right"></slot></div>
        </div>
        <div class="profile-sample-content">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProfileSample"
    }
</script>

<style scoped>
    .profile-sample{
        width: 95%;
        margin: 10px auto auto auto;
        background-color: #fff;
        border-radius: 5px;
    }
    .profile-sample-title{
        height: 39px;
        margin: 10px 10px 0 10px;
        padding: 20px 0 0 0;
    }
    .profile-sample-title .left{
        font-size: 20px;
        font-weight: 600;
        font-family: "Adobe 黑体 Std R";
        float: left;
    }
    .profile-sample-title .right{
        float: right;
        color: #b4b4b4;
    }
    .profile-sample-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding-bottom: 5px;
        text-align: center;
    }
</style>