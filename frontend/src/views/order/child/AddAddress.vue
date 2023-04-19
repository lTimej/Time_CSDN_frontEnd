<template>
    <div class="address">
        <el-drawer
            :visible="drawer.d"
            :with-header="false"
            :before-close="handleClose"
            direction="btt"
            size="80%"
        >
            <div>
                <div class="address-img">
                    <img src="https://s10.mogucdn.com/p2/170222/upload_1ga8374ha4c1e315k293bce18d3b9_514x258.png">
                    <p>您还没有收货地址哦～</p>
                </div>
                <div 
                    @click="innerDrawer = true"
                    class="address-add"
                >
                    <span>+ </span>
                    <span>新增地址</span>
                </div>
                <el-drawer
                    :append-to-body="true"
                    :with-header="false"
                    :visible.sync="innerDrawer"
                    direction="rtl"
                    size="100%"
                >
                    <div class="address-item">
                        <div class="address-title address-input">
                            <span>收货人</span>
                            <el-input v-model="receiver" placeholder=""></el-input>
                        </div>
                        <div class="address-title address-input">
                            <span>手机号</span>
                            <el-input v-model="phone" placeholder=""></el-input>
                        </div>
                        <div class="address-title">
                            <span>省份</span>
                            <el-select v-model="province" filterable placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <div class="address-title">
                            <span>城市</span>
                            <el-select v-model="city" filterable placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <div class="address-title">
                            <span>地区</span>
                            <el-select v-model="district" filterable placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <div class="address-title address-input">
                            <span>详细地址</span>
                            <el-input
                                type="text"
                                placeholder=""
                                v-model="place"
                                maxlength="35"
                                show-word-limit
                            >
                            </el-input>
                        </div>
                        <div class="address-title address-input">
                            <span>邮编</span>
                            <el-input v-model="email" placeholder=""></el-input>
                        </div>
                    </div>
                    <div class="address-button">
                        <el-button>取消</el-button>
                        <el-button type="danger" @click="addAddress">确定</el-button>
                    </div>
                </el-drawer>
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
                type: Object,
                default: () =>{
                    return{
                        d:{
                            type: Boolean,
                            default: false,
                        }
                    }
                }
            }
        },
        data(){
            return{
                isShowDrawer: this.drawer,
                innerDrawer: false,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'},
                    {
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'},
                    {
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'}
                ],
                receiver: "",
                phone: "",
                province: '',
                city: "",
                district: "",
                place: "",
                email: ""

            }
        },
        methods:{
            handleClose(done) {
                // done();
                this.drawer.d = !this.drawer.d;
            },
            addAddress(){
                console.log(this.province,this.city,this.district,"------------")
            }
        },
        computed:{},
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
    >>> .el-drawer{
        width: 100%;
        height: 80%;
        bottom: 0;
        top: unset;
    }
    .address{
        bottom: 0;
        z-index: 1;
    }
    .address-item{
        /* text-align: center; */
    }
    .address-item .address-title{
        font-size: 16px;
        color: #666;
        border-bottom: 1px solid #eee;
    }
    .address-item .address-title >>> input{
        border: none;
    }
    .address-item .address-input >>> .el-input{
        width: 70%;
    }
    .address-item .address-title >>> .el-select{
        width: 70%;
    }
    .address-item .address-title span:first-child{
        display: inline-block;
        border-right: 1px solid lightgray;
        /* border-bottom: 1px solid #eee; */
        width: 30%;
        text-align: center;
        padding: 10px 0;
    }
    .address-item .address-title span:last-child{
        display: inline-block;
        /* border-right: 1px solid red; */
        width: 70%;
        /* border-bottom: 1px solid #eee; */
        padding: 10px 0;
    }
    
    .address .address-add{
        position: fixed;
        bottom: 0;
        text-align: center;
        width: 100%;
        border-top: 1px solid lightgray;
        padding: 10px 0;
        color: red;
    }
    .address-button{
        text-align: center;
        margin: 20px 20px;
    }
    .address-button >>> el-button{
        margin: 23px 0;
    }
    .address-img img{
        width: 100%;
        text-align: center;
    }
    .address-img p{
        margin-top: 0;
        margin-bottom: 1rem;
        text-align: center;
        color: #999;
    }
</style>