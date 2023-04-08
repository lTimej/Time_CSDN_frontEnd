<template>
    <div class="sku-spec">
        <div class="sku-spec-item" @click="toSpecTabar">
            <span>选择  </span>
            <span class="spec">{{ init_label}}</span>
            <div class="sku-spec-arrow"><i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="sku-mail">
            <span>免邮费</span>
        </div>
        <div class="sku-server">
            <span>服务 </span>
            <span class="sku-server-item">72小时发货 | 7天无理由退货 | 延误必赔</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkuSpec",
        props:{
            sku_spec:{
                type: Object,
                default:function () {
                    return {}
                }
            },
            init_label:{
                type: String,
                default:"",
            }
        },
        components:{
            
        },
        data(){
            return{
                
            }
        },
        methods:{
            toSpecTabar(){
                this.$emit("toSpecTabar")
            }
        }
    
    }
</script>

<style scoped>
   .sku-spec{
        background-color: white;
        margin: 10px 0;
        padding: 10px 10px;
        z-index: 98;
    }
    .sku-spec .sku-spec-item,.sku-mail,.sku-server{
        margin: 10px 0;
        color: #999;
    }
    .sku-spec .sku-spec-item .spec{
        font-size: 16px;
        color: #333;
    }
    .sku-spec .sku-spec-item .sku-spec-arrow{
        /* display: inline-block; */
        float: right;
    }
    .sku-spec .sku-server .sku-server-item{
        color: #333;
    }
</style>