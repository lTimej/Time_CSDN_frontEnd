<template>
    <div class="all-order">
        <div class="all-order-item" v-for="i in [1,2,3,4,5,6,7]" @click="toDesc">
            <div class="order-info">
                <div class="order-info-img">
                    <img src="~assets/img/2.png">
                </div>
                <div class="order-info-item">
                    <div class="order-title">
                        <span>hahhaahhahaahahah</span>
                    </div>
                    <div class="order-spec">
                        <span>洪荒蓝绿</span>
                    </div>
                </div>
                <div class="order-info-price">
                    <div class="order-price">
                        <span>￥33.3</span>
                    </div>
                    <div class="order-num">
                        <span>x 10</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "AllOrder",
        components:{
            
        },
        data(){
            return{
                num:0,
            }
        },
        methods:{
            toDesc(){
                this.$router.push("/order/desc")
            }
        },
        activated(){
            
        }
    }
</script>

<style scoped>
   .all-order{
    margin: 10px 8px 0 8px;
   }
   .all-order-item{
      margin-top: 10px;
      background-color: white;
   }
   .all-order .order-msg{
        margin-left: 5px;
    }
    .all-order .order-info{
        /* height: 100%; */
        display: flex;
    }
    .all-order .order-info .order-info-img{
        width: 20%;
        height: 15vh;
        padding: 5px;
    }
    .all-order .order-info .order-info-img img{
        height: 100%;
        width: 100%;
        padding: 3px;
    }
    .all-order .order-info .order-info-item{
        /* float: left; */
        width: 60%;
        font-size: 13px;
        color: #333333;
        padding-left: 4px;
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
        /* float: left; */
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
</style>