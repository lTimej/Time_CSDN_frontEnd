<template>
    <div class="profile-sample-item">
        <div class="icon"><slot name="icon"></slot></div>
        <div class="text"><slot name="text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "ProfileSampleItem"
    }
</script>

<style scoped>
    .profile-sample-item{
        width: 25%;
        margin: 10px 0;

    }
    .profile-sample-item .icon{
        font-size: 25px;
    }
    .profile-sample-item .text{
        font-size: 16px;
    }
</style>