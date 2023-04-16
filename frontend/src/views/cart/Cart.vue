<template>
    <div class="cart">
        <nav-bar class="cart-nav">
            <div slot="center" class="cart-title">
                <span>购物车({{ cart_num }})</span>
            </div>
            <div slot="right" class="cart-msg">编辑 <i class="el-icon-chat-dot-square"></i></div>
        </nav-bar>
        <scroll class="content"
            ref="scroll"
        >
            <cart-list 
                @toShowSpec="toShowSpec" 
                @toAllSelect="toAllSelect" 
                :select_num="select_num"
                :carts="carts"
                :buy="buy"
            />
        </scroll>
       <cart-tabar 
       :allSelect="allSelect" 
       @toAllTick="toAllTick"
       :buy="buy"
       />
       <cart-spec v-show="isShowCartSpec" @shutTabar="shutTabar"/>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import CartList from "views/cart/child/CartList"
    import CartTabar from "views/cart/child/CartTabar"
    import CartSpec from "views/cart/child/CartSpec"
    import {getCart} from "network/shop/cart"
    export default {
        name: "Cart",
        components:{
            NavBar,
            Scroll,
            CartList,
            CartTabar,
            CartSpec,
        },
        data(){
            return{
                cart_num: 10,
                isShowCartSpec: false,
                allSelect: false,
                select_num: -1,
                carts: [],
                buy:{
                    total_price: 0,
                    select_num: 0,
                }
            }
        },
        methods:{
            toShowSpec(){
                // console.log(22222222)
                this.isShowCartSpec = true
            },
            shutTabar(){
                this.isShowCartSpec = false;
            },
            toAllSelect(flag){
                // console.log(flag,"!!!!!!!!!!!!")
                this.allSelect = flag
            },
            toAllTick(num,flag){
                this.select_num = num;
                this.allSelect = flag;
                if(flag){
                    for(var i = 0;i < this.carts.length;i++){
                        this.buy.total_price += Math.round(this.carts[i].count * this.carts[i].price * 100) / 100;
                    }
                    this.buy.select_num = this.carts.length;
                }else{
                    this.buy.total_price = 0;
                    this.buy.select_num  = 0;
                }
            },
            get_cart(){
                getCart().then(res =>{
                    if(res.status == "201"){
                        this.carts = res.data.data.carts;
                        console.log(this.carts,"********cart**********")
                    }
                    
                }).catch(err =>[
                    console.log(err)
                ])
            }
        },
        activated(){
            this.get_cart();
        }
    }
</script>

<style scoped>
     .cart-nav{
        position: fix;
        left: 0;
        right: 0;
        top: 0;
        font-size: 20px;
        color: #000000;
        height: 44px;
        border-bottom: solid 1px lightgray;
    }
    .cartnav .cart-title{
        font-size: 20px;
        color: rgb(163, 161, 161);
    }
    .content{
        position: absolute ;
        overflow: hidden;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 93px;
        /* text-align: center; */
        background-color: rgba(125,125,125,0.1)
    }
</style>