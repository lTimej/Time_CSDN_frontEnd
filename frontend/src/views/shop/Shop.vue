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
        <nav-bar class="shop-item-nav-copy" v-show="nav_show">
            <div slot="left" :class="{'sort-show':sort=='zonghe'}" @click="toSort('zonghe')">综合</div>
            <div slot="center" :class="{'sort-show':sort=='sales'}" @click="toSort('sales')">销量</div>
            <div slot="right" :class="{'sort-show':sort=='newthing'}" @click="toSort('newthing')">新品</div>
        </nav-bar>
        <div class="shop-content">
            <scroll
                class="content1"
                ref="scroll"
            >
                <category 
                    :categorys="categorys" 
                    @toSpu="toSpu"
                />
            </scroll>
            <scroll
                class="content2"
                ref="scroll"
                @scroll="myscroll"
            >
                <shop-item 
                    :nav_show="nav_show" 
                    :sort="sort" 
                    @toSort="toSort"
                    :subCategorys="subCategorys"
                    :spus="spus"
                />
            </scroll>
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import Category from "views/shop/Category"
    import ShopItem from "views/shop/ShopItem"
    import {getProductCategory} from "network/shop/product"
    import {getProductSpu} from "network/shop/product"
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
                search:"",
                nav_show:false,
                sort:"zonghe",
                categorys:[],
                subCategorys:[],
                spus:[],
            }
        },
        methods:{
            myscroll(pos){
                if(pos.y < -310){
                    this.nav_show = true
                }else{
                    this.nav_show = false
                }
            },
            toSort(s){
                this.sort = s

            },
            getProductcategory(){
                console.log("获取商品分类")
                getProductCategory().then(res =>{
                    console.log(res,"222222222")
                    this.categorys = res.data.data.categorys
                }).catch(err =>{
                    console.log(err,"11111111")
                })
            },
            toSpu(index){
                console.log(this.categorys[index])
                this.subCategorys = this.categorys[index].subcategory
                getProductSpu(this.categorys[index].id).then(res =>{
                    console.log(res,"444444444")
                    this.spus = res.data.data.product_spus
                }).catch(err =>{
                    console.log(err,"3333333333")
                })
            }
        },
        created(){
            this.getProductcategory();
        },
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
        border-top: solid 1px gray;
        background-color: rgb(245, 242, 242);
    }
    .content2{
        margin-top: 20px;
        position: absolute;
        overflow: hidden;
        top: 49px;
        /* left: 100px; */
        right: 0;
        bottom: 49px;
        width: 80%;
        text-align: center;
    }
    .shop-cate{
        padding: 10px 0;
    }
    .shop-item-nav-copy{
        position: fixed;
        right: 0;
        left: 20%;
        top: 49px;
        bottom: 0;
        z-index: 9;
        text-align: center;
        border-top: solid 1px gray;
        border-bottom: solid 1px gray;
        background-color: white;
    }
    .shop-content{
        border-top: solid 1px gray;
        margin-top: 49px;
    }
    .sort-show{
        color: red;
    }
</style>