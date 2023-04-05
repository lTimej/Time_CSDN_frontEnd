<template>
    <div class="spu">
        <nav-bar class="spu-nav">
            <div slot="left" @click="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div slot="center">
                棒球帽
            </div>
            <div slot="right"><i class="el-icon-place"></i></div>
        </nav-bar>
        <div class="spu-nav-item">
            <div class="spu-sort" :class="{'sort-show':sort=='zonghe'}" @click="toSort('zonghe')">综合</div>
            <span class="shu"> | </span>
            <div class="spu-sort" :class="{'sort-show':sort=='sales'}" @click="toSort('sales')">销量</div>
            <span class="shu"> | </span>
            <div class="spu-sort" :class="{'sort-show':sort=='newthing'}" @click="toSort('newthing')">新品</div>
            <span class="shu"> | </span>
            <div class="spu-sort" :class="{'sort-show':sort=='price'}" @click="toSort('price')">价格</div>
        </div>
        <scroll
            class="content"
            ref="scroll"
        >
            <div class="spu-item">
                <div class="shop-spu-item" v-for="(spu,index) in spus">
                    <div class="shop-img">
                        <img :src="spu.default_image">
                    </div>
                    <div class="shop-spu-info">
                        <div class="shop-spu-title">
                            <span>{{ spu.name }}</span>
                        </div>
                        <div class="shop-spu-spec">
                            <span class="spu-price">￥{{ spu.price }}</span>
                            <div class="spu-collection">
                                <span class="spu-collection-num">{{ spu.cfavs }}</span>
                                <i class="el-icon-star-off"></i>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import {getProductSpu} from "network/shop/product"
    export default {
        name: "Spu",
        components:{
            NavBar,
            Scroll,
        },
        data(){
            return{
                sort:"zonghe",
                category_id:this.$route.query.category_id,
            }
        },
        methods:{
            back(){
              this.$router.back();
            },
            toSort(s){
                this.sort = s
            },
            get_sku(){
                console.log(this.category_id,"----------")
                getProductSpu(this.category_id).then(res =>{
                    console.log(res,"666666666")
                    this.spus = res.data.data.product_spus
                }).catch(err =>{
                    console.log(err,"3333333333")
                })
            }
        },
        activated(){
            this.get_sku()
        }
    }
</script>

<style scoped>
  .spu-nav{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        font-size: 20px;
        color: #000000;
        height: 49px;
    }
    .spu-nav-item{
        margin-top:49px;
        display: flex;
        text-align: center;
        border-top: solid 1px lightgray;
        height: 44px;
        line-height: 44px;
        width: 100%;
    }
    .sort-show{
        color: red;
    }
    .spu-sort{
        flex: 1;
    }
    .spu-nav-item .shu{
        color: lightgrey;
    }
    .content{
        position: absolute;
        overflow: hidden;
        top: 93px;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
    }
    .spu-item{
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        /* justify-content: space-around; */
    }
    .spu-item .shop-spu-item{
        width: 50%;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .spu-item .shop-spu-item img{
        width: 90%;
        height: 60vw;
        padding: 6px;
    }
    .shop-spu-info{
        text-align: center;
        margin: 0 20px;
    }
    .shop-spu-title{
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:1;
        -webkit-box-orient: vertical;
        width: 120px;
        overflow: hidden;
        font-size: 13px;
    }
    .shop-spu-spec{
        
    }
    .shop-spu-spec .spu-price{
        float: left;
        color: red;
        font-size: 18px;
    }
    .shop-spu-spec .spu-collection{
        float: right;
        padding-right: 3px;
    }
    .shop-spu-spec .spu-collection .spu-collection-num{
        padding: 3px;
    }
</style>