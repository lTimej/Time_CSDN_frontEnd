<template>
    <div class="shop">
        <nav-bar class="shop-nav">
            <div slot="left" class="shop-left">
                <i class="el-icon-circle-plus"></i>
            </div>
            <div slot="center" class="shop-center">
                <el-input
                    placeholder="草帽"
                    prefix-icon="el-icon-search"
                    v-model="search">
                </el-input>
            </div>
            <div slot="right" class="shop-right">
                <i class="el-icon-circle-plus"></i>
            </div>
        </nav-bar>
        <scroll
            class="content1"
            ref="scroll"
        >
            <category></category>
        </scroll>
        <scroll
            class="content2"
            ref="scroll"
        >
            <shop-item></shop-item>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import Category from "views/shop/Category"
    import ShopItem from "views/shop/ShopItem"
    export default {
        name: "Shop",
        components:{
            NavBar,
            Scroll,
            Category,
            ShopItem,
        },
        data(){
            return{
                search:""
            }
        }
    }
</script>

<style scoped>
    .shop-nav{

        position: fixed;
        height: 49px;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .shop-nav .shop-left{
        width: 10%;

        text-align: center;
        line-height: 49px;
        font-size: 24px;
        margin: 0 10px;
    }
    .shop-nav .shop-center{
        text-align: center;
        line-height: 49px;
    }
    .shop-nav .shop-right{
        width: 10%;

        text-align: center;
        font-size: 24px;
        line-height: 49px;
        margin: 0 10px;
    }
    .content1{
        padding-top: 20px;
        position: absolute;
        overflow: hidden;
        top: 49px;
        left: 0;
        right: 0;
        bottom: 49px;
        width: 20%;
        text-align: center;
        background-color: rgb(245, 242, 242);
    }
    .content2{
        margin-top: 20px;
        position: absolute;
        overflow: hidden;
        top: 49px;
        left: 100px;
        right: 0;
        bottom: 49px;
        width: 70%;
        text-align: center;
    }
    .shop-cate{
        padding: 10px 0;
    }
</style>