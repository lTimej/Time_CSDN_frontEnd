<template>
    <div class="sku-spec-tabar">
        <div class="spec-title">
            <div :class="{'spec-img':isExpand==false,'is-expand':isExpand==true}" @click="expand_img">
                <img src="~assets/img/2.png">
            </div>
            <div class="title">
                <div class="spec-title-price"><span>￥{{ price }}</span></div>
                <div class="spec-title-stock"><span>库存： {{ sku_spec.stock }}</span></div>
                <div class="spec-title-size"><span>请选择 {{ init_label }}</span></div>
            </div>
            <div class="spec-title-back" @click="shutTabar">
                <i class="el-icon-close"></i>
            </div>
        </div>
        <div class="spec-item">
            <div class="spec-item-cats" v-for="(spec,indey) in sku_spec.spec_list">
                <div class="spec-item-title mya">
                    <span>{{ spec.label_name }}</span>
                </div>
                <div class="spec-item-value">
                    <div class="spec-item-flex" 
                        v-for="(item,index) in spec.specs" 
                        @click="toSpec(index,item.spec_opt_id,item.sku_id,spec.label_name,item.name,indey)"
                        :class="['spec-item-flex' + indey]"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
        <div class="spec-num">
            <div class="spec-num-title mya">
                <span>数量</span>
            </div>
            <div class="spec-num-counter">
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="sku_spec.stock" label="描述文字"></el-input-number>
            </div>
        </div>
        <div class="spec-tabar">
            <div class="add-cart" @click="addCart">
                <span>加入购物车</span>
            </div>
            <div class="tobuy">
                <span>立即购买</span>
            </div>
            <transition
                @before-enter="beforeEnter"
                @enter="Enter"
                @after-enter="afterEnter"
            >
                <div v-if="showBall" class="ball"></div>
            </transition>
        </div>
    </div>
</template>

<script>
    import {addCart} from "network/shop/product"
    export default {
        name: "SkuSpecTabar",
        props:{
            sku_spec:{
                type: Object,
                default:function () {
                    return {}
                }
            },
            price:{
                type: Number,
                defautl:0,
            },
            Ilabel:{
                type: String,
                default: "",
            }
        },
        components:{
            
        },
        data(){
            return{
                isExpand:false,
                num: 1,
                choose:{},
                init_label:"",
                sku_id: [],
                showBall:false,
            }
        },
        methods:{
            expand_img(){
                this.isExpand = !this.isExpand;
            },
            shutTabar(){
                this.$emit("shutTabar")
            },
            handleChange(value) {
                console.log(value);
            },
            // has(value){//判断{}是否存在该值
            //     return  this.label.hasOwnProperty(value);
            // },
            toSpec(index,spec_opt_id,sku_id,label_name,name,indey){
                var arr1 = document.getElementsByClassName("spec-item-flex" + indey);
                if(arr1[index].getAttribute('class').indexOf('choose-spec') > -1){
                    arr1[index].classList.remove("choose-spec")
                    delete this.choose[label_name]
                    this.sku_id.splice(indey,1);
                }else{
                    arr1[index].classList.add("choose-spec");
                    for (let i = 0; i < arr1.length; i++) {
                        if(i != index && arr1[i].getAttribute('class').indexOf('choose-spec') > -1){
                            arr1[i].classList.remove("choose-spec")
                        }
                    }
                    this.choose[label_name] = name
                    this.sku_id[indey] = sku_id;
                }
                this.init_label = ""
                for (let key in this.choose) {
                    this.init_label += this.choose[key] += " "
                }
                console.log("&&&&&&&&&&&&",this.sku_id,this.num,this.Ilabel)
                
                
            },
            addCart(){
                this.$emit("getcartlocation")
                console.log(this.sku_spec.spec_list.length,"::::",this.sku_id.length)
                if(this.sku_id.length < this.sku_spec.spec_list.length){
                    this.$toast.show("请选择商品规格",3000)
                    return
                }
                // this.$emit("toShowBall")
                this.showBall = !this.showBall
                addCart(this.sku_id,this.num).then(res =>{
                    console.log(res)
                }).catch(err =>{
                    console.log(err)
                })
            },
            beforeEnter(el,done){
                // let elContent = document.querySelector(".sku-to-cart").getBoundingClientRect()
                // let x = elContent.y
                
                console.log("进入动画之前")
                el.offsetHeight;
                el.style.transform="translate(0,0)"
                console.log(el,"*******")
                // el.style.top = "0"
                // el.style.left = "0"

            },
            Enter(el,done){
                let elContent = document.querySelector(".sku-to-cart").getBoundingClientRect()
                let x = elContent.top
                let y = elContent.right
                let w = y - (window.innerWidth - y) - 45;
                let h = -(window.innerHeight - x - 54);
                console.log(w,"!!!!!!!!!!!!!!!!",h)
                var test = `translate(${w}px,${h}px)`
                // var test = `translate(210px,-485px)`
                console.log(test,"----hhhhh")
                el.offsetHeight;
                el.style.transform = test
                // el.style.transform = "translate(0,0)"
                // el.style.top = `${x}px`
                // el.style.left = `${y}px`
                // el.style.transition = " left 0s ,top 0s ease-in-out";
                el.style.transition = " all 0.8s ease-in-out";
                // setTimeout(()=>{
                //     el.style.transition = " left 1s linear,top 1s ease-in-out";
                // },20)
                console.log(el,"$$$$$$$$$")
                el.addEventListener("transilated",done);
                done();
            },
            afterEnter(){
                console.log("动画进入后");
                this.showBall = !this.showBall;
            },
        },
        updated : function(){
            if(this.init_label == ""){
                this.init_label = this.sku_spec.label;
            }
        },
        watch:{
            init_label:{
                handler(newValue,oldValue){
                    let l = newValue
                    // console.log(this.choose,"1111111111",this.sku_spec.label)
                    // let ll = this.sku_spec.label.split(' ')
                    // console.log(ll,"呵呵呵呵呵呵")
                    // if(l != this.sku_spec.label){
                        
                    // }
                    this.$emit("changeLabel",l)
                },
                deep:true,
                immediate:true
            }
        }
    }
</script>

<style scoped>
   .sku-spec-tabar{
        position: fixed;
        left:0;
        right:0;
        bottom: 0;
        /* height: 65%; */
        bottom: 44px;
        z-index: 999;
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
        float: left;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: black;
        text-align: center;
        z-index: 999;
        
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
    .sku-spec-tabar .spec-num{
        margin-bottom: 30px;
    }
    .sku-spec-tabar .spec-num .spec-num-title{
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