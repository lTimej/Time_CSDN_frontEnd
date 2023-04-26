<template>
    <div class="order-desc">
        <nav-bar class="order-nav">
            <div slot="left" @click="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div slot="center">
                <span>订单详情</span>
            </div>
        </nav-bar>
        <scroll
            class="content"
            ref="scroll"
        >
            <div class="order-desc-status">
                <div class="desc-status">
                    <div><span>等待买家付款</span></div>
                    <div class="desc-time"><span>00小时56分05秒后自动取消订单</span></div>
                </div>
                <div class="desc-button">
                    <div class="desc-button-item">取消订单</div>
                </div>
            </div>
            <order-address />
            <order-desc-info />
            <order-desc-info />
            <order-desc-info />
        </scroll>
        <div class="order-tabar">
            <div class="order-price-title">
                <div>总价： </div>
            </div>
            <div class="order-price">
                <div>￥10</div>
            </div>
            <div class="order-collection">
            </div>
            <div class="order-num">
            </div>
            <div class="order-buy">
                <div><span>付款</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import OrderAddress from "views/order/child/OrderAddress"
    import OrderDescInfo from "views/order/child/OrderDescInfo"
    import Scroll from "components/common/scroll/Scroll";
    export default {
        name: "OrderDesc",
        components:{
            NavBar,
            OrderAddress,
            Scroll,
            OrderDescInfo,
        },
        data(){
            return{
                
            }
        },
        methods:{
            back(){
                this.$router.back();
            }
        },
        activated(){
            
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
    .order-desc{

    }
    .order-desc .order-desc-status{
        background-color: #ff468f;
        width: 100%;
        height: 3.22rem;
        color: #fff;
    }
    
    .order-desc .order-desc-status .desc-status{
        float: left;
        font-size: 14px;
        margin: 5px 15px;
    }
    .order-desc .order-desc-status .desc-button{
        float: right;
        margin: 10px 10px;
    } 
    .order-desc .order-desc-status .desc-status .desc-time{
        float: left;
        font-size: 12px;
    }
    .order-desc .order-desc-status .desc-button .desc-button-item{
        width: 100%;
        height: 100%;
        border: 1px solid white;
        padding: 3px 5px;
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
    .order-tabar{
        height: 49px;
        display: flex;
        position:fixed;
        bottom: 0;
        left:0;
        right:0;
        width: 100%;
        border-top: 1px solid lightgray;
        line-height: 49px;
    }
    .order-tabar i{
        font-size: 22px;
    }
    .order-price-title{
        /* flex:1; */
        width: 20%;
        text-align: center;
        background-color: white;
        font-size: 16px;
        padding: 0 0 5px 5px;
        /* line-height: 49px;  */
    }
    .order-price{
        /* flex:1; */
        width: 24%;
        /* text-align: center; */
        background-color: white;
        font-size: 18px;
        padding: 0 0;
        color: rgb(255, 68, 102);
        /* line-height: 49px;  */
    }
    .order-collection{
        /* flex:1; */
        width: 1%;
        text-align: center;
        background-color: white;
        font-size: 12px;
        padding: 3px 0;
    }
    .order-num{
        /* flex:1; */
        width: 26%;
        background-color: white;
        /* color: rgb(177, 175, 175); */
        text-align: center;
        font-size: 12px;
        /* line-height: 49px; */
    }
    .order-buy{
        /* flex:1; */
        width: 29%;
        background-image: linear-gradient(90deg, rgb(255, 87, 119), rgb(255, 70, 143));
        color: rgb(255, 255, 255);
        text-align: center;
        /* line-height: 49px; */
    }
</style>