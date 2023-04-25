<template>
    <profile-sample class="profile-sample-all">
        <span slot="left" @click="orderList('all_order')">我的订单</span>
        <profile-sample-item>
            <i slot="icon" class="el-icon-notebook-2" @click="orderList('all_order')"></i>
            <span slot="text" @click="orderList('all_order')">全部</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-shopping-cart-full" @click="orderList('paying')"></i>
            <span slot="text" @click="orderList('paying')">待付款</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-chat-square" @click="orderList('sending')"></i>
            <span slot="text" @click="orderList('sending')">代发货</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-medal" @click="orderList('recving')"></i>
            <span slot="text" @click="orderList('recving')">待收货</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-chat-square" @click="orderList('comment')"></i>
            <span slot="text" @click="orderList('comment')">待评价</span>
        </profile-sample-item>
        <profile-sample-item>
            <i slot="icon" class="el-icon-medal" @click="orderList('saled')"></i>
            <span slot="text" @click="orderList('saled')">售后</span>
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
        },
        methods:{
            orderList(ty){
                console.log(ty,"-----")
                this.$router.push({
                    path:"/order/list",
                    query:{
                        ty: ty,
                    }
                })
            },
        }
    }
</script>

<style scoped>
    .self-define{
        margin: auto;
        color: #b4b4b4;
    }
</style>