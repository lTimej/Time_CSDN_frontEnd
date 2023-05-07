<template>
    <div>
        <nav-bar class="order-list-nav">
            <div slot="left" @click="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div slot="center">
                <span>订单列表</span>
            </div>
            <div slot="right"><i class="el-icon-shopping-cart-2"></i></div>
        </nav-bar>
        <div class="order-search">
            <el-input
                placeholder="推荐内容"
                prefix-icon="el-icon-search"
                v-model="search">
            </el-input>
        </div>
        <tab-control>
            <tab-control-item class="order-list-title" :class="{'isActive':order_type=='all_order'}"  @changeRouter="changeRouter('all_order')">
                <div slot="title">全部</div>
                <div slot="active_icon" class="heng" v-show="order_type=='all_order'"></div>
            </tab-control-item>
            <tab-control-item class="order-list-title" :class="{'isActive':order_type=='paying'}"  @changeRouter="changeRouter('paying')">
                <div slot="title">待付款</div>
                <div slot="active_icon" class="heng" v-show="order_type=='paying'"></div>
            </tab-control-item>
            <tab-control-item class="order-list-title" :class="{'isActive':order_type=='sending'}"  @changeRouter="changeRouter('sending')">
                <div slot="title">代发货</div>
                <div slot="active_icon" class="heng" v-show="order_type=='sending'"></div>
            </tab-control-item >
            <tab-control-item class="order-list-title" :class="{'isActive':order_type=='recving'}" @changeRouter="changeRouter('recving')">
                <div slot="title">待收货</div>
                <div slot="active_icon" class="heng" v-show="order_type=='recving'"></div>
            </tab-control-item>
            <tab-control-item class="order-list-title" :class="{'isActive':order_type=='comment'}"  @changeRouter="changeRouter('comment')">
                <div slot="title">待评价</div>
                <div slot="active_icon" class="heng" v-show="order_type=='comment'"></div>
            </tab-control-item>
            <tab-control-item class="order-list-title" :class="{'isActive':order_type=='saled'}"  @changeRouter="changeRouter('saled')">
                <div slot="title">售后</div>
                <div slot="active_icon" class="heng" v-show="order_type=='saled'"></div>
            </tab-control-item>
        </tab-control>
        <scroll
            class="content"
            ref="scroll"
        >
            <all-order v-show="order_type=='all_order'" :my_orders="my_orders"/>
            <paying v-show="order_type=='paying'" :my_orders="my_orders"/>
            <sending v-show="order_type=='sending'" :my_orders="my_orders"/>
            <recving v-show="order_type=='recving'" :my_orders="my_orders"/>
            <comment v-show="order_type=='comment'" :my_orders="my_orders"/>
            <saled v-show="order_type=='saled'" :my_orders="my_orders"/>
        </scroll>
        
    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import NavBar from "components/common/navbar/NavBar";
    import TabControl from "components/common/tabControl/TabControl";
    import TabControlItem from "components/common/tabControl/TabControlItem";
    import AllOrder from "views/order/orderList/AllOrder"
    import Comment from "views/order/orderList/Comment"
    import Paying from "views/order/orderList/Paying"
    import Recving from "views/order/orderList/Recving"
    import Saled from "views/order/orderList/Saled"
    import Sending from "views/order/orderList/Sending"
    import {getOrder} from "network/order/order"
    export default {
        name: "OrderList",
        data(){
            return{
                currIndex:1,
                order_type: "",
                search: "",
                my_orders: [],
            }

        },
        components:{
            TabControl,
            TabControlItem,
            NavBar,
            AllOrder,
            Comment,
            Paying,
            Recving,
            Saled,
            Sending,
            Scroll,
        },
        methods:{
            changeRouter(type){
                this.order_type = type;
                // this.$emit('changeRouter',index)
                if(this.order_type == "all_order"){
                    this.get_order(0);
                }else if(this.order_type == "paying"){
                    this.get_order(1);
                }else if(this.order_type == "sending"){
                    this.get_order(2);
                }else if(this.order_type == "recving"){
                    this.get_order(3);
                }else if(this.order_type == "comment"){
                    this.get_order(4);
                }else if(this.order_type == "saled"){
                    this.get_order(5);
                }
            },
            back(){
                this.$router.back();
            },
            get_order(pay_status){
                getOrder(pay_status).then(res =>{
                    console.log(res.data.data);
                    this.my_orders = res.data.data.order_info;
                }).catch(err =>{
                    console.log(err)
                })
            }
        },
        activated(){
            this.order_type = this.$route.query.ty;
            console.log(this.order_type,"==========")
            if(this.order_type == "all_order"){
                this.get_order(0);
            }else if(this.order_type == "paying"){
                this.get_order(1);
            }else if(this.order_type == "sending"){
                this.get_order(2);
            }else if(this.order_type == "recving"){
                this.get_order(3);
            }else if(this.order_type == "comment"){
                this.get_order(4);
            }else if(this.order_type == "saled"){
                this.get_order(5);
            }

        }
    }
</script>

<style scoped>
    .heng{
        border: 1px solid #f38282;
        margin: 0 12px;
        text-align: center;
    }
    .order-list-title{
        font-size: 15px;
    }
    .isActive{
        font-size: 15px;
        color: #333;
        font-weight: 600
    }
    .order-list-nav{
        position: fix;
        left: 0;
        right: 0;
        /* top: 0; */
        font-size: 20px;
        color: #000000;
        height: 44px;
        border-bottom: solid 1px lightgray;
    }
    .order-search{
        border-bottom: 1px solid lightgray;
    }
    .order-search >>> .el-input{
        padding: 10px;
        color: #606266;
        font-size: 14px;
        
    }
    .order-search .el-input__inner{
        color: #999;
        background-color: #efefef;
        text-align: center;
    }
    .content{
        position: absolute;
        overflow: hidden;
        top: 168px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(125,125,125,0.1)
        /* text-align: center; */
    }
</style>