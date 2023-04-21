<template>
    <div class="order-tabar">
        <div class="order-price-title">
            <div>总价： </div>
        </div>
        <div class="order-price">
            <div>￥{{ 185.34 }}</div>
        </div>
        <div class="order-collection">
            <!-- <i class="el-icon-star-off"></i>
            <div>收藏</div> -->
        </div>
        <div class="order-num">
            <span>共3件商品</span>
        </div>
        <div class="order-buy" @click="toOrder">
            <span>提交订单</span>
        </div>
    </div>
</template>

<script>
    import {addOrder} from "network/order/order"
    export default {
        name: "orderNav",
        props:{
            orders:{
                type: Array,
                default: () => []
            },
            total_price:{
                type: Number,
                default: 0,
            },
            total_num:{
                type: Number,
                default: 0,
            },
            address: {
                type: Object,
                default: () => {}
            }
        },
        components:{
            
        },
        data(){
            return{
                
            }
        },
        methods:{
            toOrder(){
                let sku = []
                for(let i = 0;i < this.orders.length;i++){
                    var spec_id = ""
                    var specs = ""
                    for(let j = 0;j < this.orders[i].spec_label.length;j++){
                        spec_id += this.orders[i].spec_label[j].spec_id + ",";
                        specs += this.orders[i].spec_label[j].label + ":" + this.orders[i].spec_label[j].name + " ";
                    }
                    spec_id = spec_id.slice(0,spec_id.length-1);
                    sku.push({
                        "sku_id": this.orders[i].sku_id,
                        "spec_id": spec_id,
                        "specs": specs,
                        "count": this.orders[i].count,
                    })
                }
                // console.log(sku,"%%%%^^^^^^^^^^^^^^^^sku======",parseInt(this.total_num),parseFloat(this.total_price),this.address.address_id)
                addOrder(parseInt(this.total_num),parseFloat(this.total_price),this.address.address_id,sku).then(res => {
                    console.log("提交订单成功!!!!!!!!")
                })
                // console.log(this.total_num,this.total_price,"提交订单！！！！！！！！",this.address.address_id,this.orders[0]);
            }
        }
    
    }
</script>

<style scoped>
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
        /* background-color: rgb(255, 236, 239); */
        color: rgb(177, 175, 175);
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