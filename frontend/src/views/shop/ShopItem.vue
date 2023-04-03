<template>
    <div class="shop-item">
        <div class="shop-sub">
            <div class="shop-sub-item">
                <img src="~assets/img/pikaqiu.gif">
                <div>9.9秒杀</div>
            </div>
            <div class="shop-sub-item">
                <img src="~assets/img/pikaqiu.gif">
                <div>9.9秒杀</div>
            </div>
            <div class="shop-sub-item">
                <img src="~assets/img/pikaqiu.gif">
                <div>9.9秒杀</div>
            </div>
            <div class="shop-sub-item">
                <img src="~assets/img/pikaqiu.gif">
                <div>9.9秒杀</div>
            </div>
            <div class="shop-sub-item">
                <img src="~assets/img/pikaqiu.gif">
                <div>9.9秒杀</div>
            </div>
            <div class="shop-sub-item">
                <img src="~assets/img/pikaqiu.gif">
                <div>9.9秒杀</div>
            </div>
            <div class="shop-sub-item">
                <img src="~assets/img/pikaqiu.gif">
                <div>9.9秒杀</div>
            </div>
        </div>
        <nav-bar class="shop-item-nav">
            <div slot="left">综合</div>
            <div slot="center">销量</div>
            <div slot="right">新品</div>
        </nav-bar>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
        <div>哈哈哈哈哈哈 </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "ShopItem",
        components:{
            NavBar,
        },
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>
    .shop-item{

    }
    .shop-item .shop-sub{
        display: flex;
        flex-wrap: wrap;
    }
    .shop-item .shop-sub-item{
        /* line-height: 80px; */
       padding-left: 5px;
    }
    .shop-item .shop-sub-item img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .shop-item-nav{
        border-top: solid 1px gray;
        border-bottom: solid 1px gray;
    }
</style>