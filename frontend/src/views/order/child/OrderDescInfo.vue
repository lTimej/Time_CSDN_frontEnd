<template>
    <div class="order-item">
        <div class="order-list" v-for="spec in order.order_spec">
            <div class="order-msg">
                <i class="el-icon-chat-dot-square"></i>联系商家
            </div>
            <div class="order-info">
                <div class="order-info-img">
                    <img src="~assets/img/2.png">
                </div>
                <div class="order-info-item">
                    <div class="order-title">
                        <span>{{ spec.title }}</span>
                    </div>
                    <div class="order-spec">
                        <span>{{ spec.specs }}</span>
                    </div>
                </div>
                <div class="order-info-price">
                    <div class="order-price">
                        <span>￥{{ spec.price }}</span>
                    </div>
                    <div class="order-num">
                        <i class="el-icon-minus" ></i>
                        <input type="text" v-model="spec.count">
                        <i class="el-icon-plus"></i>
                    </div>
                </div>
            </div>
            <div class="order-other">
                <div class="order-other-item">
                    <span>商品应付金额 </span>
                    <div>￥{{ spec.price }}</div>
                </div>
                <div class="order-other-item">
                    <span>快递运费： </span>
                    <span> 包邮</span>
                    <div>￥10.00</div>
                </div>
                <div class="order-other-item">
                    <span>店铺合计 </span>
                    <span> （含运费）</span>
                    <div>￥{{ spec.price }}</div>
                </div>
                <div class="order-other-item">
                    <span>退货补贴 </span>
                    <div>
                        <span> 退货预计补贴8.00</span>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </div>
                <div class="order-other-item">
                    <span>延误必赔 </span>
                    <div>
                        <span> 商家赠送</span>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
    
    export default {
        name: "OrderDescInfo",
        components:{
            
        },
        props:{
            order:{
                type: Object,
                default: () => {}
            }
        },
        data(){
            return{
                num: 0,
            }
        },
        methods:{
           
        },
        computed:{
            
        },
        activated(){
            console.log("xixiixixi!!!!!!!!",this.order.address_id)
        }
    }
</script>

<style scoped>
    .order-item{
        /* height: 500px; */
        /* background-color: white; */
    }
    .order-item .order-list{
        margin-bottom: 10px;
        background-color: white;
    }
    .order-item .order-msg{
        margin-left: 5px;
    }
    .order-item .order-info{
        /* height: 100%; */
        display: flex;
    }
    .order-item .order-info .order-info-img{
        /* float: left; */
        
        width: 20%;
        height: 15vh;
        padding-left: 5px;
    }
    .order-item .order-info .order-info-img img{
        height: 100%;
        width: 100%;
        padding: 3px;
    }
    .order-item .order-info .order-info-item{
        /* float: left; */
        width: 60%;
        font-size: 13px;
        color: #333333;
        padding-left: 4px;
    }
    .order-item .order-info .order-info-item .order-title{
        font-weight: 600;
        font-size: 12px;
    }
    .order-item .order-info .order-info-item .order-spec{
        font-size: 12px;
        color: lightgray;
    }
    .order-item .order-info .order-info-price{
        width: 20%;
        /* float: left; */
        font-size: 14px;
    }
    .order-item .order-info .order-info-price .order-price{
        float: right;
        margin: 0 5px 5px 0;
        font-weight: 600;
    }
    .order-item .order-info .order-info-price .order-num{
        /* margin: 10px 10px 20px 10px; */
        border: 1px solid lightgray;
        /* border-radius: 25px 25px; */
        font-size: 13px;
        margin-right: 5px;
        float: right;
    }
    .order-item .order-info .order-info-price .order-num input{
        width: 16px;
        border: none;
        outline: medium;
        height: 15px;
        text-align: center;
    }
    .order-item .order-info .order-info-price .order-num i{
        padding: 2px;
    }
    .order-other{
        color: lightgray;
        padding: 5px 5px;
        font-size: 14px;
    }
    .order-other .order-other-item{
        margin:8px 0;
    }
    .order-other .order-other-item  div{
        display: inline-block;
        float: right;
        margin-right: 5px;
        color: #333333;
    }
    .order-other .order-other-item  div span{
        color: #333333;
    }
    .order-other .order-other-item  span{
        color: lightgray;
    }
    .order-other .order-other-item > span:first-child{
        color: #333333;
        margin-right: 5px;
    }
</style>