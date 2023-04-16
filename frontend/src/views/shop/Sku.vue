<template>
    <div class="sku" >
        <div class="sku-label">
            <div class="sku-to-home">
                <i class="el-icon-house"></i>
            </div>
            <div class="sku-to-cart" @click="toCart">
                <i class="el-icon-shopping-cart-2"></i>
                <div class="cart-num" v-show="cart_num != 0">
                    <span>{{ cart_num }}</span>
                </div>
            </div>
        </div>
        <div class="sku-back" @click="back">
            <i class="el-icon-arrow-left" style="font-size: 32px;color: #333;"></i>
        </div>
        <scroll style="bottom: 49px"
            ref="scroll"
            :class="{'content-gray':isShowSpecTabar==true,'content':isShowSpecTabar==false}"
        >
            <div  @click="cancelSpecTabar"> 
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
                <sku-base-info :sku_desc="sku_desc" :isShowSpecTabar="isShowSpecTabar"/>
            </div>
            <sku-spec 
                :sku_spec="sku_spec" 
                :Ilabel="Ilabel" 
                @toSpecTabar="toSpecTabar"

            />
        </scroll>
        <sku-spec-tabar 
            v-show="isShowSpecTabar" 
            @shutTabar="shutTabar" 
            :sku_spec="sku_spec"
            :price="sku_desc.price"
            :Ilabel="Ilabel"
            @changeLabel="changeLabel"
            @getcartlocation="getcartlocation"
            @toShowBall="toShowBall"
        />
        <sku-nav @toSpecTabar="toSpecTabar"/>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import Swiper from "components/contents/swipper/Swiper"
    import SwiperSlide from "components/contents/swipper/SwiperSlide"
    import {getSkuBySpuId} from "network/shop/product"
    import {getCart} from "network/shop/cart"
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
                isShowSkuNav:false,
                // init_label:"",
                Ilabel:"",
                showBall:false,
                cart_num:0,
            }
        },
        methods:{
            get_sku_by_spu_id(){
                getSkuBySpuId(this.spu_id).then(res => {
                    this.sku_desc = res.data.data
                    this.sku_spec = this.sku_desc.sku_spec
                    this.Ilabel = this.sku_spec.label
                }).catch(err =>{
                    console.log(err)
                })
                getCart().then(res =>{
                    console.log(res)
                }).catch(err =>{
                    console.log(err)
                })
            },
            cancelSpecTabar(){
                if(this.isShowSpecTabar){
                    this.isShowSpecTabar = false;
                }
            },
            toSpecTabar(){
                this.isShowSpecTabar = true
            },
            shutTabar(){
                this.showBall = true;
                this.isShowSpecTabar = false;
            },
            changeLabel(l){
                this.Ilabel = l
            },
            getcartlocation(){
                let elContent = document.querySelector(".sku-to-cart").getBoundingClientRect()
                let x = elContent.y
                console.log("购物车的位置",x)
            },
            toShowBall(){
                // this.showBall = true
            },
            back(){
                this.$router.back()
            },
            toCart(){
                this.$router.push("/cart")
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
        height: 100%;
    }
    .sku-label{
        position: absolute;
        top: 10%;
        right:12%;
        font-size: 24px;
        text-align: center;
        z-index: 99;
    }
    .sku-label .sku-to-home{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: darkgray;
        margin-bottom: 8px;
        color: white;
        line-height: 40px;
    }
    .sku-label .sku-to-cart{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: darkgray;
        color: white;
        line-height: 40px;
    }
  
    .content{
        position: absolute ;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 49px;
        /* text-align: center; */
        background-color: rgba(125,125,125,0.1)
    }
    .content-gray{
        filter:progid:DXImageTransform.Microsoft.BasicImage(graysale=1);
        -webkit-filter: grayscale(50%); 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        width: 100%;
        height: 100%;
    }
    .sku-to-cart .cart-num{
        position: relative;
        left: 24px;
        bottom: 40px;
        background-color: red;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        font-size: 16px;
        text-align: center;
        line-height: 20px;
    }
    .sku .sku-back{
        position: fixed;
        z-index: 1;
        top: 5px;
        left: 20px;
    }
</style>