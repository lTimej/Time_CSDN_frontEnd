<template>
    <profile-sample class="profile-sample-all">
        <span slot="left">课程</span>
        <profile-sample-item class="self-define">
            <span slot="text">空空如也...</span>
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