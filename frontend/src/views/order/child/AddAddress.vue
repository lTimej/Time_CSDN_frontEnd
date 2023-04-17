<template>
    <div class="address">
        <el-drawer
            :visible.sync="isShowDrawer"
            :with-header="false"
            direction="btt"
            size="80%"
        >
            <div class="address-item">
                <div class="address-title">
                    <span>收货人</span>
                    <span>刘军</span>
                </div>
                <div class="address-title">
                    <span>手机号</span>
                    <span>刘军</span>
                </div>
                <div class="address-title">
                    <span>省份</span>
                    <span>刘军</span>
                </div>
                <div class="address-title">
                    <span>城市</span>
                    <span>刘军</span>
                </div>
                <div class="address-title">
                    <span>地区</span>
                    <span>刘军</span>
                </div>
                <div class="address-title">
                    <span>详细地址</span>
                    <span>刘军</span>
                </div>
                <div class="address-title">
                    <span>邮编</span>
                    <span>刘军</span>
                </div>
            </div>
            
        </el-drawer>
    </div>
</template>

<script>
    
    export default {
        name: "OrderAddress",
        components:{
            
        },
        props:{
            drawer:{
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
               
            }
        },
        methods:{
            // closeDrawer(done){
            //     console.log(3333333333)
            //     done();
            // }
        },
        computed:{
            isShowDrawer(){
                return this.drawer;
            }

        }
        // watch:{
        //     drawer:{
        //         handler(newValue,oldValue){
        //             if(newValue == -1){
        //                 this.allSelect = 0
        //             }else{
        //                 this.allSelect = this.carts.length
        //             }
        //             // console.log("我也变动了",newValue)
        //         },
        //         deep:true,
        //         immediate:true
        //     }
        // },
    }
</script>

<style scoped>
    .address{
        /* height: 300px;
        background-color: red;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0; */
        bottom: 0;
        z-index: 1;
    }
    .address .address-item{
        /* text-align: center; */
    }
    .address .address-item .address-title{
        font-size: 16px;
        /* margin: 20px 0; */
    }
    .address .address-item .address-title span:first-child{
        display: inline-block;
        border-right: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        width: 30%;
        text-align: center;
        padding: 10px 0;
    }
    .address .address-item .address-title span:last-child{
        display: inline-block;
        border-right: 1px solid red;
        width: 70%;
        border-bottom: 1px solid lightgray;
        padding: 10px 0;
    }
</style>