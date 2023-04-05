<template>
    <div class="shop-item">
        <div class="shop-sub">
            <div class="shop-sub-item" v-for="(subCategory,index) in subCategorys" @click="toSpu(index)">
                <!-- <img src="~assets/img/pikaqiu.gif"> -->
                <img :src="subCategory.default_image">
                <div>{{ subCategory.name }}</div>
            </div>
            <!-- <div class="shop-sub-item">
                <img src="~assets/img/pikaqiu.gif">
                <div>9.9秒杀</div>
            </div> -->
            
        </div>
        <nav-bar class="shop-item-nav" v-show="!nav_show">
            <div slot="left" :class="{'sort-show':base_sort=='zonghe'}" @click="toSort('zonghe')">综合</div>
            <div slot="center" :class="{'sort-show':base_sort=='sales'}" @click="toSort('sales')">销量</div>
            <div slot="right" :class="{'sort-show':base_sort=='newthing'}" @click="toSort('newthing')">新品</div>
        </nav-bar>
        <div class="shop-spu">
            <div class="shop-spu-item" v-for="(spu,index) in spus" @click="toSku(index)">
                <div class="shop-img">
                    <img :src="spu.default_image">
                </div>
                <div class="shop-spu-info">
                    <div class="shop-spu-title">
                        <span>{{ spu.name }}</span>
                    </div>
                    <div class="shop-spu-spec">
                        <span class="spu-price">￥{{spu.price}}</span>
                        <div class="spu-collection">
                            <span class="spu-collection-num">{{spu.cfavs}}</span>
                            <i class="el-icon-star-off"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- <div class="shop-spu-item">
                <div class="shop-img">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="shop-spu-info">
                    <div class="shop-spu-title">
                        <span>衣架落地立式衣柜卧室专用</span>
                    </div>
                    <div class="shop-spu-spec">
                        <span class="spu-price">￥73.5</span>
                        <div class="spu-collection">
                            <span class="spu-collection-num">0</span>
                            <i class="el-icon-star-off"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="shop-spu-item">
                <div class="shop-img">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="shop-spu-info">
                    <div class="shop-spu-title">
                        <span>衣架落地立式衣柜卧室专用</span>
                    </div>
                    <div class="shop-spu-spec">
                        <span class="spu-price">￥73.5</span>
                        <div class="spu-collection">
                            <span class="spu-collection-num">0</span>
                            <i class="el-icon-star-off"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="shop-spu-item">
                <div class="shop-img">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="shop-spu-info">
                    <div class="shop-spu-title">
                        <span>衣架落地立式衣柜卧室专用</span>
                    </div>
                    <div class="shop-spu-spec">
                        <span class="spu-price">￥73.5</span>
                        <div class="spu-collection">
                            <span class="spu-collection-num">0</span>
                            <i class="el-icon-star-off"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="shop-spu-item">
                <div class="shop-img">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="shop-spu-info">
                    <div class="shop-spu-title">
                        <span>衣架落地立式衣柜卧室专用</span>
                    </div>
                    <div class="shop-spu-spec">
                        <span class="spu-price">￥73.5</span>
                        <div class="spu-collection">
                            <span class="spu-collection-num">0</span>
                            <i class="el-icon-star-off"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="shop-spu-item">
                <div class="shop-img">
                    <img src="~assets/img/my.jpg">
                </div>
                <div class="shop-spu-info">
                    <div class="shop-spu-title">
                        <span>衣架落地立式衣柜卧室专用</span>
                    </div>
                    <div class="shop-spu-spec">
                        <span class="spu-price">￥73.5</span>
                        <div class="spu-collection">
                            <span class="spu-collection-num">0</span>
                            <i class="el-icon-star-off"></i>
                        </div>
                        
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "ShopItem",
        components:{
            NavBar,
        },
        props:{
            nav_show:{
                type:Boolean,
                default:false
            },
            sort:{
                type:String,
                default:"zonghe"
            },
            subCategorys:{
                type: Array,
                default: []
            },
            spus:{
                type: Array,
                default: []
            }
        },
        data(){
            return{
                base_sort:this.sort
            }
        },
        methods:{
            toSort(s){
                this.$emit("toSort",s)
            },
            toSpu(index){
                console.log(this.subCategorys[index].id,"###22222222222222")
                this.$router.push({
                    path:'/spu',
                    query:{
                        category_id: this.subCategorys[index].id
                    }
                })
            },
            toSku(index){
                console.log(this.spus[index].spu_id)
            }
        },
        watch:{
            sort:{
                handler(newVal,oldVal){
                    this.base_sort = newVal;
                }
            },
            deep: true,
            immediate: true,
        }
    }
</script>

<style scoped>
    .shop-item{

    }
    .shop-item .shop-sub{
        display: flex;
        flex-wrap: wrap;
        display: -webkit-flex;
    }
    .shop-item .shop-sub-item{
        /* line-height: 80px; */
       padding-left: 8px;
    }
    .shop-item .shop-sub-item img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }
    .shop-item-nav{
        border-top: solid 1px gray;
        border-bottom: solid 1px gray;
    }
    .shop-spu{
        display: flex;
        flex-wrap: wrap;
    }
    .shop-spu .shop-spu-item{
        padding-left: 6px;
        padding-top: 6px;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }
    .shop-spu .shop-spu-item img{
        width: 90%;
        height: 180px;
    }
    .shop-spu-info{
        width: 140px;
        text-align: center;
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
    .sort-show{
        color: red;
    }
</style>