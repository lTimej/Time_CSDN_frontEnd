<template>
    <div class="sku-base-info" :class="{'to-gray':isShowSpecTabar==true}">
        <div class="sku-base-price">
            <div class="price-left">
                <span>￥</span>
                <span class="price">{{ sku_desc.price }}</span>
                <div class="discount"><span>7折</span></div>
            </div>
            <div class="price-right">
                <span>已售6</span>
            </div>
        </div>
        <div class="sku-base-title">
            <span>{{ sku_desc.title }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkuBaseInfo",
        props:{
            sku_desc:{
                type: Object,
                default:function () {
                    return {}
                }
            },
            isShowSpecTabar:{
                type: Boolean,
                default: false
            }
        },
        components:{
            
        },
        data(){
            return{
                
            }
        },
    
    }
</script>

<style scoped>
   .sku-base-info{
        /* height: 49px; */
        height: 100px;
        background-color: white;
        padding: 0 10px;
        line-height: normal;
    }
    .to-gray{
        background-color: rgba(125, 125, 125, 0.01);
    }
    .sku-base-info .sku-base-price{
        /* margin-top: 10px;
        padding-top: 5px; */
        /* border-top: 1px solid lightgray; */
    }
    .sku-base-info .sku-base-price .price-left{
        float: left;
        font-size: .48rem;
        color: #333;
        font-weight: bolder;
    }
    .sku-base-info .sku-base-price .price-left .price{
        font-size: 24px;
    }
    .sku-base-info .sku-base-price .price-left .discount{
        display: inline-block;
        background-color: rgb(255, 236, 239);
        color: rgb(255, 68, 102);
        text-align: center;
    }
    .sku-base-info .sku-base-price .price-right{
        float: right;
        font-size: 16px;
        color: black;
    }
    .sku-base-title{
        float: left;
        width: 80%;
        font-weight: 400;
        color: black;
    }
</style>