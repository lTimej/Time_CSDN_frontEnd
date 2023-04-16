<template>
    <div class="cart-spec-item">
        <div class="spec-title">
            <div :class="{'spec-img':isExpand==false,'is-expand':isExpand==true}">
                <img src="~assets/img/2.png">
            </div>
            <div class="title">
                <div class="spec-title-price"><span>￥49.9</span></div>
                <div class="spec-title-stock"><span>库存： 100</span></div>
                <div class="spec-title-size"><span>请选择 红色</span></div>
            </div>
            <div class="spec-title-back" @click="shutTabar">
                <i class="el-icon-close"></i>
            </div>
        </div>
        <div class="spec-item">
            <div class="spec-item-cats">
                <div class="spec-item-title mya">
                    <span>颜色</span>
                </div>
                <div class="spec-item-value">
                    <div class="spec-item-flex" 
                    >
                        红色
                    </div>
                </div>
            </div>
        </div>
        <div class="spec-num">
            <div class="spec-num-title mya">
                <span>数量</span>
            </div>
            <div class="spec-num-counter">
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartSpec",
        components:{
            
        },
        data(){
            return{
                isExpand:false,
                num: 0,
            }
        },
        methods:{
            shutTabar(){
                this.$emit("shutTabar")
            },
            handleChange(value) {
                console.log(value);
            },
        }
    }
</script>

<style scoped>
    .cart-spec-item{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 49px;
        width: 100%;
        /* height: 200px; */
        background-color: white;
    }
    .spec-title{
        height: 15vh;

    }
    .spec-title .spec-img{
        position: relative;
        left:5vh;
        bottom: 4vh;
        float: left;
    }
    .spec-title .spec-img img{
        height: 15vh;
        width: 10vh;
    }
    .spec-title .title{
        position: relative;
        float: left;
        left: 6vh;
        color: #333;
        padding-bottom: .18rem;
        font-size: 1.8vh;
        font-family: Arial;
    }
    .spec-title .spec-title-back{
        float: right;
        margin: 10px;
        font-size: 32px;
        font-weight: bolder;
    }
    .spec-title .title .spec-title-price{
        font-size: 2.3vh;
    }
    .is-expand{
        position: fixed;
        /* float: left; */
        /* width: 100%; */
        /* height: 100%; */
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: white;
        /* text-align: center;
        z-index: 999; */
        
    }
    .is-expand img{
        width: 80%;
        height: 80%;
	    transform:translate(0,10%); /*针对元素本身向左以及向上移动50%*/ 
    }
    .spec-item{

    }
    .spec-item .spec-item-cats{
        margin: 10px 10px 20px 10px;
        padding-bottom: 20px;
        border-bottom: lightgray 1px solid;
    }
    .spec-item-value{
        display: flex;
        flex-wrap: wrap;
        text-align: center;

    }
    .spec-item-value .spec-item-flex{
        /* width: 22%; */
        border: 1px solid rgba(125,125,125,0.4);
        margin: 10px 4px 0 0;
        padding:6px 10px;
    }
    .spec-item-value .choose-spec{
        color: #ff5777;
        border-color: #ff5777;
    }
    .spec-tabar{
        height: 44px;
        position: absolute;
        left: 0;
        right: 0;
        /* bottom: 0; */
        text-align: center;
    }
    .spec-tabar .add-cart,.tobuy{
        width: 50%;
        float: left;
        height: 100%;
        line-height: 44px;
    }
    .spec-tabar .add-cart{
        background: #fee;
        color: #ff5777;
    }
    .spec-tabar .tobuy{
        background-image: linear-gradient(90deg, rgb(255, 87, 119), rgb(255, 70, 143));
        color: white;
    }
    .cart-spec-item .spec-num{
        margin-bottom: 30px;
    }
    .cart-spec-item .spec-num .spec-num-title{
        margin: 10px 10px 20px 10px;
    }
    .spec-num-counter{
        margin: 10px 10px 20px 10px;
        height: 30px;
    }
    .mya{
        line-height: .24rem;
        font-size: .25rem;
        margin-bottom: .14rem;
        color: #999;
    }
    .ball{
        position: relative;
        left: 20%;
        right: 0;
        bottom: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        /* z-index: 1000; */
    }
</style>