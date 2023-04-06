<template>
    <div class="sku">
        <div class="sku-label">
            <div class="sku-to-home">
                <i class="el-icon-house"></i>
            </div>
            <div class="sku-to-cart">
                <i class="el-icon-shopping-cart-2"></i>
            </div>
        </div>

        <scroll style="bottom: 49px"
            class="content"
            ref="scroll"
        >
            <swiper>
                <!-- <swiper-slide v-for="(swiper_image,_) in sku_desc.swiper_images" :key="index">
                    <img :src="swiper_image" alt="图片1" />
                </swiper-slide> -->
                <swiper-slide>
                    <img src="~assets/img/2.png" alt="图片2" />
                </swiper-slide>
                <swiper-slide>
                    <img src="~assets/img/3.png" alt="图片2" />
                </swiper-slide>
            </swiper>
            <sku-base-info :sku_desc="sku_desc" />
            <sku-spec :sku_spec="sku_spec" @toSpecTabar="toSpecTabar"/>
        </scroll>
        <sku-spec-tabar v-show="isShowSpecTabar"/>
        <sku-nav />
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import Swiper from "components/contents/swipper/Swiper"
    import SwiperSlide from "components/contents/swipper/SwiperSlide"
    import {getSkuBySpuId} from "network/shop/product"
    import SkuBaseInfo from "views/shop/child/SkuBaseInfo"
    import SkuSpec from "views/shop/child/SkuSpec"
    import SkuSpecTabar from "views/shop/child/SkuSpecTabar"
    import SkuNav from "views/shop/child/SkuNav"
    export default {
        name: "Sku",
        components:{
            NavBar,
            Scroll,
            Swiper,
            SwiperSlide,
            SkuBaseInfo,
            SkuSpec,
            SkuSpecTabar,
            SkuNav,
        },
        data(){
            return{
                spu_id: this.$route.query.spu_id,
                sku_desc:{},
                sku_spec:{},
                isShowSpecTabar:false,
            }
        },
        methods:{
            get_sku_by_spu_id(){
                getSkuBySpuId(this.spu_id).then(res => {
                    console.log(res,"==============")
                    this.sku_desc = res.data.data
                    this.sku_spec = this.sku_desc.sku_spec
                }).catch(err =>{
                    console.log(err)
                })
            },
            toSpecTabar(){
                this.isShowSpecTabar = !this.isShowSpecTabar
            }
        },
        activated(){
            // this.spu_id = this.$route.query.spu_id
            this.get_sku_by_spu_id()
        }
    }
</script>

<style scoped>
    .sku{
        background-color: lightgray;
    }
    .sku-label{
        position: fixed;
        top: 100px;
        right:60px;
        font-size: 18px;
        text-align: center;
        z-index: 99;
    }
    .sku-label .sku-to-home{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: darkgray;
        margin-bottom: 8px;
    }
    .sku-label .sku-to-cart{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: darkgray;
    }
  
    .content{
        position: absolute ;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 49 !important;
        /* text-align: center; */
        background-color: rgba(125,125,125,0.1)
    }
    
    
    
</style>