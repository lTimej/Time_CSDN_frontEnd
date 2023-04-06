<template>
    <div class="sku-spec-tabar">

    </div>
</template>

<script>
    export default {
        name: "SkuSpecTabar",
        props:{
            sku_spec:{
                type: Object,
                default:{}
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
   .sku-spec-tabar{
        position: fixed;
        left:0;
        right:0;
        bottom: 0;
        height: 200px;
        z-index: 999;
        background-color: red;
    }
</style>