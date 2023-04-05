<template>
    <div class="cate">
        <div class="shop-cate" v-for="(category,index) in categorys" @click="toSpu(index)">
            <span>{{ category.name }}</span>
        </div>
        <!-- <div class="shop-cate">
            <span>裙子</span>
        </div>
        <div class="shop-cate">
            <span>内衣</span>
        </div>
        <div class="shop-cate">
            <span>女鞋</span>
        </div>
        <div class="shop-cate">
            <span>男友</span>
        </div>
        <div class="shop-cate">
            <span>包包</span>
        </div>
        <div class="shop-cate">
            <span>运动</span>
        </div>
        <div class="shop-cate">
            <span>配饰</span>
        </div>
        <div class="shop-cate">
            <span>美妆</span>
        </div>
        <div class="shop-cate">
            <span>个护</span>
        </div>
        <div class="shop-cate">
            <span>家居</span>
        </div>
        <div class="shop-cate">
            <span>百货</span>
        </div>
        <div class="shop-cate">
            <span>母婴</span>
        </div>
        <div class="shop-cate">
            <span>食品</span>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: "Category",
        components:{
            
        },
        props:{
            categorys:{
                type: Array,
                default:[],
            }
        },
        data(){
            return{
                
            }
        },
        methods:{
            toSpu(index){
                this.$emit("toSpu",index)
            }
        }
    }
</script>

<style scoped>
    .shop-cate{
        padding: 10px 0;
    }
</style>