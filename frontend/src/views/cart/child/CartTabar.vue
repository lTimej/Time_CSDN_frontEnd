<template>
    <div class="cart-tabar">
        <div class="left">
            <div class="cart-radio" :class="{'cart-radio-tick':isAllTick}" @click="toAllTick"> 
                <i class="el-icon-close"></i>
            </div>
        </div>
        <div class="left">
            <span class="cart-choose">全选 ({{ buy.select_num }})</span>
        </div>
        <div class="right">
            <span>
                ￥{{ buy.total_price }}
            </span>
            <div class="cart-to-buy" @click="toOrder">结算</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartTabar",
        components:{
        },
        props:{
            allSelect:{
                type: Boolean,
                default: false,
            },
            buy:{
                type: Object,
                default:function () {
                    return {
                        total_price:{
                            type: Number,
                            default: 0,
                        },
                        select_num:{
                            type: Number,
                            default: 0,
                        }
                    }
                }
            },
            carts:{
                type: Array,
                default: []
            },
            orders:{
                type: Array,
                default: () => []
            }
        },
        data(){
            return{
                cart_num: 10,
                isAllTick: -1,
                // orders: []
            }
        },
        methods:{
            toAllTick(){
                // console.log(11111)
                var arr = document.getElementsByClassName("cart-tick")
                let choose_num = 0;
                for (let i = 0; i < arr.length; i++) {
                    if(arr[i].getAttribute('class').indexOf('cart-radio-tick') > -1){
                        choose_num++;
                    }else{
                        choose_num--;
                    }
                }
                // console.log(choose_num,"哈哈哈哈哈哈哈")
                if(choose_num == arr.length){

                    for (let i = 0; i < arr.length; i++) {
                        arr[i].classList.remove("cart-radio-tick")
                    }
                    this.isAllTick = false;
                    this.$emit("toAllTick",-1,false)
                    for(i;i< this.orders.length;i++){
                        this.orders.pop();
                    }
                    // this.orders = [];
                }else{
                    for (let i = 0; i < arr.length; i++) {
                        if(arr[i].getAttribute('class').indexOf('cart-radio-tick') <=-1){
                            arr[i].classList.add("cart-radio-tick")
                        }
                    }
                    this.isAllTick = true;
                    this.$emit("toAllTick",choose_num,true);
                    var i = 0;
                    for(i;i< this.orders.length;i++){
                        this.orders.pop();
                    }
                    for(i=0;i<this.carts.length;i++){
                        this.orders.push(this.carts[i]);
                    }
                    // this.orders = this.carts;
                }
            },
            toOrder(){
                if(this.orders.length == 0){
                    this.$toast.show("商品不能为空",5000);
                    return;
                }
                this.$router.push({
                    path:'/order',
                    query:{
                        orders:this.orders,
                        total_price: this.buy.total_price,
                        total_num: this.buy.select_num,
                    }
                })
            }
        },
        watch:{
            allSelect:{
                handler(newValue,oldValue){
                    // console.log("变动了",newValue)
                    this.isAllTick = newValue
                },
                deep:true,
                immediate:true
            },
            // "buy.orders":{
            //     handler(newValue,oldValue){
            //         this.orders = newValue
            //     },
            //     deep:true,
            //     immediate:true
            // },
        },
        computed:{
            // order(){
            //     if(this.isAllTick){
            //         console.log(8888888888)
            //         return this.carts;
            //     }else if(!this.isAllTick){
            //         console.log(999999999)
            //         return []
            //     }else{
            //         console.log(100000000)
            //         return this.orders;
            //     }
            // }
        }
    }
</script>

<style scoped>
    .cart-tabar{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 49px;
        font-size: 20px;
        color: #000000;
        height: 44px;
        border-bottom: solid 1px lightgray;
        border-top: solid 1px lightgray;
        /* line-height: 44px; */
    }
    .cart-tabar .left{
        float: left;
        margin-left: 10px;
    }
    .cart-tabar .left .cart-radio{
        /* font-size: 18px; */
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 1px solid lightgray;
        margin-top: 10px;
        line-height: 20px;
        color: white;
    }
    .cart-radio-tick{
        /* font-size: 18px; */
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: red;
        margin-top: 8px;
        line-height: 20px;
        color: white;
        z-index: 2;
    }
    .cart-tabar .left .cart-choose{
        display: inline-block;
        margin-top: 5px;
    }
    .cart-tabar .right{
        float: right;
    }
    .cart-tabar .right .cart-to-buy{
        display: inline-block;
        background-color: red;
        color: white;
        padding: 5px 15px;
        border-radius: 120px;
        font-size: 18px;
        /* margin-bottom: 10px; */
        margin-right: 10px;
        margin-top: 8px;
        margin-bottom: 8px;
        padding-bottom: 0px;
        padding-top: 0px;
    }
</style>