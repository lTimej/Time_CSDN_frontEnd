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
            <div class="order-desc-status" v-if="order.pay_status == 1">
                <div class="desc-status">
                    <div><span>等待买家付款</span></div>
                    <div class="desc-time">
                        <span class="time-item">0</span>天
                        <span class="time-item">0</span>时
                        <span class="time-item">0</span>分
                        <span class="time-item">0</span>秒后自动取消订单
                    </div>
                </div>
                <div class="desc-button" @click="cancel_order">
                    <div class="desc-button-item">取消订单</div>
                </div>
            </div>
            <div class="order-desc-status" v-else-if="order.pay_status == 0">
                <div class="desc-button">
                    <div><span>订单已取消</span></div>
                </div>
            </div>
            <div class="order-desc-status" v-else>
                <div class="desc-button">
                    <div><span>已付款</span></div>
                </div>
            </div>
            <order-address :address="address"/>
            <order-desc-info :order="order"/>
        </scroll>
        <div class="order-tabar">
            <div class="order-price-title">
                <div>总价： </div>
            </div>
            <div class="order-price">
                <div>￥{{ order.total_price }}</div>
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
    import {getOrderAddress} from "network/order/order";
    import {updateOrderStatus} from "network/order/order"
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
                order: {},
                address: {}
            }
        },
        methods:{
            back(){
                this.$router.back();
            },
            get_address(){
                console.log("获取订单地址")
                getOrderAddress(this.order.address_id).then(res =>{
                    if (res.status == 201){
                        console.log(res.data.data);
                        this.address = res.data.data.user_address;
                        console.log(this.address,"获取订单地址成功")
                    }
                })
            },
            cancel_order(){
                updateOrderStatus(order.sn,0).then(res => {
                    console.log(res.data.data)
                })
            },
            show_time(){
                var spans = document.querySelectorAll('.time-item');
                var order_cancel_time = this.order.create_time
                var endTime = new Date(order_cancel_time).getTime();
                var newTime = new Date().getTime();
                var diffTime = (endTime - newTime) / 1000;
                var day = parseInt(diffTime / 60 / 60 / 24);
                var honur = parseInt(diffTime / 60 / 60 % 24);
                var min = parseInt(diffTime / 60 % 60);
                var sen = parseInt(diffTime % 60);
                spans[0].innerText = day;
                spans[1].innerText = honur;
                spans[2].innerText = min;
                spans[3].innerText = sen;
                if(diffTime <= 0){
                    console.log(diffTime,"!!!!!!!!!!!")
                    this.cancel_order();
                    diffTime = -1;
                }
            }
        },
        activated(){
            this.order = this.$route.query.my_orders;
            console.log(this.order,"******************")
            this.get_address();
            let timer = null;
            if(this.order.pay_status == 1){
                timer = setInterval(this.show_time, 1000)
            }else{
                clearInterval(timer)
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