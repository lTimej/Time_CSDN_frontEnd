<template>
    <div class="sku">
        <scroll
            class="content"
            ref="scroll"
        >
            <swiper>
                <img src="~assets/img/my.jpg" alt="图片1" />
            </swiper>
        </scroll>
        <div class="sku-nav">
            <div class="sku-shopper">
                <i class="el-icon-potato-strips"></i>
                <div>店铺</div>
            </div>
            <div class="sku-kefu">
                <i class="el-icon-chat-dot-round"></i>
                <div>客服</div>
            </div>
            <div class="sku-collection">
                <i class="el-icon-star-off"></i>
                <div>收藏</div>
            </div>
            <div class="sku-cart">
                <span>加入购物车</span>
            </div>
            <div class="sku-buy">
                <span>立即购买</span>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import Swiper from "components/contents/swipper/Swiper"
    export default {
        name: "Sku",
        components:{
            NavBar,
            Scroll,
            Swiper,
            // SwiperSlide,
        },
        data(){
            return{
                
            }
        },
        methods:{
            // onSwiper(swiper) {
            //     console.log("111", swiper);
            // },
            // onSlideChange() {
            //     console.log('slide change');
            // },
            // onSlidePrevTransitionEnd(){
            //     console.log("向前滚动结束了")
            // },
            // onSlideNextTransitionEnd(){
            //     console.log("向后滚动结束了")
            // },

        },
        activated(){
            
        }
    }
</script>

<style scoped>
  .sku-nav{
        height: 49px;
        display: flex;
        position:fixed;
        bottom: 0;
        left:0;
        right:0;
        width: 100%;
        
    }
    .sku-nav i{
        font-size: 22px;
    }
    .sku-shopper{
        /* flex:1; */
        width: 14%;
        text-align: center;
        background-color: white;
        border-top: 1px solid lightgray;
        border-right: 1px solid lightgray;
        font-size: 12px;
        padding: 3px 0;
    }
    .sku-kefu{
        /* flex:1; */
        width: 14%;
        text-align: center;
        background-color: white;
        border-top: 1px solid lightgray;
        border-right: 1px solid lightgray;
        font-size: 12px;
        padding: 3px 0;
        color: rgb(255, 68, 102);
    }
    .sku-collection{
        /* flex:1; */
        width: 14%;
        text-align: center;
        background-color: white;
        border-top: 1px solid lightgray;
        border-right: 1px solid lightgray;
        font-size: 12px;
        padding: 3px 0;
    }
    .sku-cart{
        /* flex:1; */
        width: 29%;
        background-color: rgb(255, 236, 239);
        color: rgb(255, 68, 102);
        text-align: center;
        line-height: 49px;
    }
    .sku-buy{
        /* flex:1; */
        width: 29%;
        background-image: linear-gradient(90deg, rgb(255, 87, 119), rgb(255, 70, 143));
        color: rgb(255, 255, 255);
        text-align: center;
        line-height: 49px;
    }
    .content{
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 49;
        text-align: center;
    }
    
</style>