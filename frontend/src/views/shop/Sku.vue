<template>
    <div class="sku" >
        <div class="sku-label">
            <div class="sku-to-home">
                <i class="el-icon-house"></i>
            </div>
            <div class="sku-to-cart">
                <i class="el-icon-shopping-cart-2"></i>
            </div>
        </div>
        <transition
            @before-enter="beforeEnter"
            @enter="Enter"
            @after-enter="afterEnter"
        >
            <div v-if="showBall" class="ball"></div>
        </transition>
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
            beforeEnter(el,done){
                console.log(el,"*******")
                // let elContent = document.querySelector(".sku-to-cart").getBoundingClientRect()
                // let x = elContent.y
                // console.log("进入动画之前",x)
                // el.offsetHeight;
                el.style.transform="translate(0,0)"
                // el.style.top = "0"
                // el.style.left = "0"

            },
            Enter(el,done){
                let elContent = document.querySelector(".sku-to-cart").getBoundingClientRect()
                let x = elContent.top
                let y = elContent.left
                var test = `translate(210px,${-485}px)`
                console.log(test,"----hhhhh")
                el.offsetHeight;
                // el.style.transform = "translate(0,0)"
                el.style.top = `${x}px`
                el.style.left = `${y}px`
                // el.style.transition = " left 0s ,top 0s ease-in-out";
                el.style.transition = " all 3s ease-in-out";
                // setTimeout(()=>{
                //     el.style.transition = " left 1s linear,top 1s ease-in-out";
                // },20)
                el.addEventListener("transilated",done);
                done();
            },
            afterEnter(){
                console.log("动画进入后");
                // this.showBall = !this.showBall;
            },
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
        top: 80px;
        right:60px;
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
    .ball{
        position: absolute;
        left: 20%;
        right: 0;
        bottom: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        z-index: 1000;
    }
</style>