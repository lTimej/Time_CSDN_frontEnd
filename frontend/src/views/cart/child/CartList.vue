<template>
    <div class="cart-list">
        <div class="cart-shop" v-for="(cart,index) in carts">
            <div class="cart-tick"  @click="toRadioTick(index)">
                <i class="el-icon-close"></i>
            </div>
            <div class="cart-item">
                <div class="cart-img">
                    <img :src="cart.default_image">
                </div>
            </div>
            <div class="cart-right">
                <div class="cart-title">
                    <span>{{ cart.title }}</span>
                </div>
                <div class="cart-spec" >
                    <span @click="toShowSpec">颜色: 杏色;尺寸:可调节(56-58cm);<i class="el-icon-close"></i></span>
                </div>
                <div class="cart-price">
                    <div class="price">
                        <span>￥{{ cart.price }}</span>
                    </div>
                    <div class="cart-num">
                        <i class="el-icon-minus" @click="minusCart(index)"></i>
                        <input type="text" v-model="cart.count">
                        <i class="el-icon-plus" @click="addCart(index)"></i>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartList",
        components:{
        },
        props:{
            isShowCartSpec:{
                type: Boolean,
                default: false,
            },
            select_num:{
                type: Number,
                default: 0,
            },
            carts:{
                type: Array,
                default: [],
            },
            buy:{
                type: Object,
                default:function () {
                    return {
                        total_price:{
                            type: Number,
                            default: 0.0
                        },
                        select_num:{
                            type: Number,
                            default: 0,
                        }
                    }
                }
            }
        },
        data(){
            return{
                isRadioTick: -1,
                allSelect: 0,
                num: 0,
                total_price: 0,
            }
        },
        methods:{
            toRadioTick(index){
                // console.log(22222)
                // this.isRadioTick = index
                var arr = document.getElementsByClassName("cart-tick")
                if(arr[index].getAttribute('class').indexOf('cart-radio-tick') > -1){
                    arr[index].classList.remove("cart-radio-tick")
                    this.allSelect--;
                    this.buy.total_price = this.buy.total_price - this.carts[index].count * this.carts[index].price;
                    this.buy.total_price = Math.round(this.buy.total_price * 100) / 100;
                    this.buy.select_num--;
                    console.log(this.buy.total_price,"------------",typeof(this.buy.total_price))
                }else{
                    arr[index].classList.add("cart-radio-tick");
                    this.allSelect++;
                    this.buy.total_price = this.buy.total_price + this.carts[index].count * this.carts[index].price;
                    this.buy.total_price = Math.round(this.buy.total_price * 100) / 100;
                    this.buy.select_num++;
                    console.log(this.buy.total_price,"********",typeof(this.buy.total_price))
                }
                // console.log(this.allSelect,"选中了@@@@@@@@@@")
                if(this.allSelect == this.carts.length){
                    this.$emit("toAllSelect",true)
                }else{
                    this.$emit("toAllSelect",false)
                }
                console.log(this.total_price,"@@@@@@@")
            },
            toShowSpec(){
                this.$emit("toShowSpec")
            },
            addCart(index){
                this.carts[index].count++;
                var arr = document.getElementsByClassName("cart-tick")
                if(arr[index].getAttribute('class').indexOf('cart-radio-tick') > -1){
                    this.buy.total_price = Math.round((this.buy.total_price + this.carts[index].price) * 100) / 100;
                }
            },
            minusCart(index){
                if(this.carts[index].count > 0){
                    this.carts[index].count--;
                    var arr = document.getElementsByClassName("cart-tick")
                    if(arr[index].getAttribute('class').indexOf('cart-radio-tick') > -1){
                        this.buy.total_price = Math.round((this.buy.total_price - this.carts[index].price) * 100) / 100;
                    }
                }
            },
        },
        watch:{
            select_num:{
                handler(newValue,oldValue){
                    if(newValue == -1){
                        this.allSelect = 0
                    }else{
                        this.allSelect = this.carts.length
                    }
                    // console.log("我也变动了",newValue)
                },
                deep:true,
                immediate:true
            }
        },
        computed:{
            // total_price(){
            //     var arrs = document.getElementsByClassName("cart-tick")
            //     var i = 0;
            //     for(i;i < arrs.length;i++){
            //         if(arr[index].getAttribute('class').indexOf('cart-radio-tick') > -1){
            //             var p = this.buy.total_price - this.carts[index].count * this.carts[index].price;
            //             console.log(this.buy.total_price,"------------")
            //         }
            //     }
            // },
        },
    }
</script>

<style scoped>
    .cart-shop{
        /* width: 100%; */
        height: 100%;
        background-color: white;
        margin: 10px;
        border-radius: 2%;
        /* line-height: 100px; */
        height: 21vh;
    }
    .cart-shop .cart-tick{
        float: left;
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 1px solid lightgray;
        margin: 0 5px;
        top: 9vh;
        z-index: 1;
        line-height: 20px;
        color: white;
    }
    .cart-shop .cart-item{
        float: left;
        position: relative;
        
    }
    .cart-shop .cart-item .cart-img{
        height: 100%;
        /* float: left; */
    }
    .cart-shop .cart-item .cart-img img{
        width: 12vh;
        height: 18vh;
        margin: 10px 5px;
    }
    .cart-shop .cart-right{
        position: relative;
        /* float: left; */
        height: 100%;
        
    }
    .cart-shop .cart-right .cart-title{
        /* float: left; */
        font-size: 2vh;
        padding-top: 5px;
    }
    .cart-radio-tick{
        background-color: red;
        line-height: 20px;
    }
    .cart-shop .cart-right .cart-spec{
        font-size: 9px;
        color: lightgray;
        width: 100%;
        height: 20px;
    }
    .cart-shop .cart-right .cart-price{
        position: relative;
        margin-top: 11%;
    }
    .cart-shop .cart-right .cart-price .price{
        float: left;
        width: 10%;
        
    }
    .cart-shop .cart-right .cart-price .cart-num{
        float: right;
        /* width: 40%; */
        border: 1px solid lightgray;
        border-radius: 25px 25px;
        font-size: 13px;
        margin-right: 10px;
    }
    .cart-shop .cart-right .cart-price .cart-num input{
        width: 108px;
        border: none;
        outline: medium;
        height: 15px;
        width: 50px;
        text-align: center;
    }
    .cart-shop .cart-right .cart-price .cart-num i{
        padding: 5px;
    }
</style>