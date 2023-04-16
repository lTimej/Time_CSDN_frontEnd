<template>
    <div class="order-address">
        <div class="address-location">
            <i class="el-icon-shopping-cart-2"></i>
        </div>
        <div class="address-title">
            <div class="address-info">六七元 19971251761</div>
            <div class="address-place">北京市北京市丰台区五楼</div>
        </div>
        <div class="address-item">
            <i class="el-icon-arrow-right"></i>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: "OrderAddress",
        components:{
            
        },
        data(){
            return{
                
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
    .order-address{
        height: 12vh;
        background-color: white;
        margin-bottom: 10px;
    }
    .order-address .address-location{
        float: left;
        font-size: 24px;
        margin: 3px 10px;
        line-height: 10vh;
    }
    .order-address .address-title{
        float: left;
        margin: 5px 10px;
        color: #333333;
        line-height: 5vh;
    }
    .order-address .address-title .address-info{
        font-weight: 600;
        font-size: 18px;
    }
    .order-address .address-item{
        float: right;
        font-size: 24px;
        line-height: 10vh;
        margin-right: 10px;
    }
</style>