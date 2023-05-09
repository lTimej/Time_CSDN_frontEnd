<template>
    <div class="all-order">
        <div  v-for="(my_order,index) in my_orders" @click="toDesc(index)" class="myorder">
            <div class="order-status" v-if="my_order.pay_status == 1">
                <div class="status">待付款</div>
                <div class="time">
                    剩<span :class="['time-item' + '-' + index]">0</span>天
                    <span :class="['time-item' + '-' + index]">0</span>时
                    <span :class="['time-item' + '-' + index]">0</span>分
                    <span :class="['time-item' + '-' + index]">0</span>秒
                </div>
            </div>
            <div class="order-status" v-else-if="my_order.pay_status == 0">
                <div class="status">已取消</div>
            </div>
            <div class="order-status" v-else>
                <div class="status">已支付</div>
            </div>
            <div class="all-order-item" v-for="order in my_order.order_spec">
                <div class="order-info">
                <div class="order-info-img">
                    <img src="~assets/img/2.png">
                </div>
                <div class="order-info-item">
                    <div class="order-title">
                        <span>{{ order.title }}</span>
                    </div>
                    <div class="order-spec">
                        <span>{{ order.specs }}</span>
                    </div>
                </div>
                <div class="order-info-price">
                    <div class="order-price">
                        <span>￥{{ order.price }}</span>
                    </div>
                    <div class="order-num">
                        <span>x {{ order.count }}</span>
                    </div>
                </div>
            </div>
            </div>
            <div class="order-jiesuan">
                <div class="jiesuan-item">
                    <div class="jiesuan">
                        <span>包邮，总计：￥</span>
                        <span>168.0.0</span>
                    </div>
                    <div class="buy">
                        待付款
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {updateOrderStatus} from "network/order/order"
    export default {
        name: "OrderListTemp",
        props:{
            my_orders:{
                type: Array,
                default: () => []
            }
        },
        components:{
            
        },
        data(){
            return{
                num:0,
                timers: [],
            }
        },
        mounted(){
            for(let i = 0;i < this.my_orders.length;i++){
                if(this.my_orders[i].pay_status == 1){
                    this.timers.push(setInterval(this.show_time(i), 1000))
                }
            }
        },
        methods:{
            toDesc(index){
                this.$router.push({
                    "path": "/order/desc",
                    query:{
                        my_orders:this.my_orders[index],
                    }
                })
            },
            show_time(i){
                // for(let i = 0;i < this.my_orders.length;i++){
                    if(this.my_orders[i].pay_status == 1){
                        var cl = "." + "time-item" + "-" + i;
                        var spans = document.querySelectorAll(cl);
                        var order_cancel_time = this.my_orders[i].create_time
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
                            updateOrderStatus(this.my_orders[i].sn,0).then(res => {
                                if(res.status == 201){
                                    this.my_orders[i].pay_status = 0;
                                    clearInterval(this.timers[i])
                                    console.log("订单取消成功");
                                }
                            }).catch(err => {
                                console.log(err)
                            })
                            return;
                        }
                    }
                // }
            }
        },
        activated(){
            console.log(this.my_orders,"哈哈哈哈啊哈")
        }
    }
</script>

<style scoped>
   .all-order{
    /* margin: 0 0 0 0; */
   }
   .all-order .myorder{
    background-color: white;
    margin: 10px;
   }
   .all-order-item{
      margin: 6px;
   }
   .order-status{
      margin: 12px;
      height: 20px;
      /* position: relative; */
   }
   .order-status .status{
    float: left;
    /* display: inline-block; */
    color: #080808;
    font-size: 16px;
    font-weight: 600;
   }
   .order-status .time{
    float: right;
    /* display: inline-block; */
    color: red;
    font-size: 13px;
    font-weight: 500;
   }
   .all-order .order-msg{
        margin-left: 5px;
    }
    .all-order .order-info{
        display: flex;
    }
    .all-order .order-info .order-info-img{
        width: 20%;
        height: 15vh;
        padding: 5px;
    }
    .all-order .order-info .order-info-img img{
        height: 100%;
        padding: 3px;
    }
    .all-order .order-info .order-info-item{
        width: 60%;
        font-size: 13px;
        color: #333333;
    }
    .all-order .order-info .order-info-item .order-title{
        font-weight: 600;
        font-size: 12px;
    }
    .all-order .order-info .order-info-item .order-spec{
        font-size: 12px;
        color: lightgray;
    }
    .all-order .order-info .order-info-price{
        width: 20%;
        font-size: 14px;
    }
    .all-order .order-info .order-info-price .order-price{
        float: right;
        margin: 0 5px 5px 0;
        font-weight: 600;
    }
    .all-order .order-info .order-info-price .order-num{
        font-size: 12px;
        margin-right: 5px;
        float: right;
    }
    .order-jiesuan{
        height: 60px;
        margin: 10px;
    }
    .order-jiesuan .jiesuan-item{
        float: right;
    }
    .order-jiesuan .jiesuan{
        /* float: right; */
    }
    .order-jiesuan .buy{
        float: right;
        height: 20px;
        width: 60px;
        background-color: red;
        color: white;
        text-align: center;
        font-size: 13px;
        /* padding: 10px; */
        border-radius: 4px;

    }
</style>