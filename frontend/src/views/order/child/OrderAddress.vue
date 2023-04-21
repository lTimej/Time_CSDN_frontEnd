<template>
    <div class="order-address">
        <div class="address-location">
            <i class="el-icon-location-outline"></i>
        </div>
        <div class="address-title-kong" v-if="address==null" @click="addAddr">
            <div class="address-info">请填写收获地址</div>
        </div>
        <div class="address-title" v-else @click="addAddr">
            <div class="address-info">{{address.receiver}} {{address.mobile}}</div>
            <div class="address-place">{{address.province}}{{address.city}}{{address.district}}{{address.place}}</div>
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
        props:{
            address:{
                type: Object,
                default: () => null
            }
        },
        data(){
            return{
                
            }
        },
        methods:{
            addAddr(){
                console.log("##########433333333")
                this.$emit("addAddr",true);
            }
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
    .order-address .address-title-kong{
        float: left;
        margin: 5px 10px;
        color: #333333;
        line-height: 10vh;
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