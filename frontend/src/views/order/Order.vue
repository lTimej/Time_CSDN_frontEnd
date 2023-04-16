<template>
    <div class="order">
        <nav-bar class="order-nav">
            <div slot="left" @click="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div slot="center">
                <span>确定订单</span>
            </div>
            <div slot="right"><i class="el-icon-shopping-cart-2"></i></div>
        </nav-bar>
        <scroll
            class="content"
            ref="scroll"
        >
            <order-address />
            <order-info />
        </scroll>
        <order-tabar />
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import OrderTabar from "views/order/child/OrderTabar"
    import OrderAddress from "views/order/child/OrderAddress"
    import Scroll from "components/common/scroll/Scroll";
    import OrderInfo from "views/order/child/OrderInfo"
    export default {
        name: "Order",
        components:{
            NavBar,
            OrderTabar,
            OrderAddress,
            Scroll,
            OrderInfo,
        },
        data(){
            return{
                
            }
        },
        methods:{
            back(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .order-nav{
        position: fix;
        left: 0;
        right: 0;
        /* top: 0; */
        font-size: 20px;
        color: #000000;
        height: 44px;
        border-bottom: solid 1px lightgray;
    }
    .content{
        position: absolute;
        overflow: hidden;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
        background-color: rgba(125,125,125,0.1)
        /* text-align: center; */
    }
</style>