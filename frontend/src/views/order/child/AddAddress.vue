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
                <div class="address-img" v-if="address==null">
                    <img src="https://s10.mogucdn.com/p2/170222/upload_1ga8374ha4c1e315k293bce18d3b9_514x258.png">
                    <p>您还没有收货地址哦～</p>
                </div>
                <div v-else>
                    <div class="address-list" v-for="(i,index) in address" 
                        :class="{'address-list-choice':isAddress==index}"
                        @click="toAddress(index)"
                    >
                        <div class="address-user-info">
                            <span>{{ i.receiver }}</span>
                            <span>{{ i.mobile }}</span>
                        </div>
                        <div class="address-user-place">
                            <span>{{i.province}}{{i.city}}{{i.district}}{{i.place}}</span>
                        </div>
                        <div class="address-user-setting">
                            <i class="el-icon-success address-default" 
                                :class="{'address-default-open':chooice_default==index}"
                                @click.stop="toChose(index)"
                            >
                            </i>
                            <span>设为默认</span>
                            <div class="address-user-del">
                                <i class="el-icon-delete"></i>
                                <span>删除</span>
                            </div>
                            <div class="address-user-edit" @click.stop="editAddress(index)">
                                <i class="el-icon-edit-outline"></i>
                                <span>编辑</span>
                            </div>
                        </div>
                    </div>
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
                            <el-select v-model="province" filterable placeholder="请选择" @change="addProvince">
                                <el-option
                                    v-for="item in provinces"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <div class="address-title">
                            <span>城市</span>
                            <el-select v-model="city" :disabled="province==''" filterable placeholder="请选择" @change="addCity">
                                <el-option
                                    v-for="item in cities"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <div class="address-title">
                            <span>地区</span>
                            <el-select v-model="district" :disabled="city==''" filterable placeholder="请选择">
                                <el-option
                                    v-for="item in districts"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id"
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
    import {getcity} from "network/city/city"
    import {addAddress} from "network/users/address"
    import {getAddress} from "network/users/address"
    import {updateAddress} from "network/users/address"
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
                            chooice: false,
                        }
                    }
                }
            }
        },
        data(){
            return{
                isShowDrawer: this.drawer,
                innerDrawer: false,
                provinces: [],
                cities: [],
                districts: [],
                receiver: "",
                phone: "",
                province: "",
                city: "",
                district: "",
                place: "",
                email: "",
                address: null,
                chooice_default:-1,
                isAddress: -1,
            }
        },
        methods:{
            handleClose(done) {
                // done();
                this.drawer.d = !this.drawer.d;
            },
            addAddress(){
                console.log(this.province,this.city,this.district,"------------")
                addAddress(this.receiver,this.phone,this.province,this.city,this.district,this.place,this.email).
                    then(res =>  {
                        console.log(res,"========")
                }).catch(err =>{
                    console.log(err)
                })
                this.innerDrawer = false;
                this.get_address()
            },
            get_city(pid){
                getcity(pid).then(res => {
                    console.log(res.data.data,"************")
                    this.provinces = res.data.data.city;
                }).catch(err => {
                    console.log(err)
                })
            },
            get_address(){
                getAddress().then(res => {
                    if(res.data.data.user_address == null){
                        this.address = null;
                        console.log(res,"|||||||||||||||")
                    }else{
                        this.address = res.data.data.user_address;
                    }
                    console.log(this.address,"===44444444===")
                    if(this.address.length > 0){
                        this.$emit("getAddress",this.address[0])
                    }
                    
                }).catch(err =>{
                    console.log(err)
                })
            },
            addProvince(){
                console.log(this.province,"1111111111111")
                getcity(this.province).then(res => {
                    this.cities = res.data.data.city;
                })
            },
            addCity(){
                console.log(this.city,"2222222222")
                getcity(this.city).then(res => {
                    this.districts = res.data.data.city;
                })
            },
            toChose(index){
                console.log(111111444,"====",index)
                this.chooice_default = index;
                updateAddress(this.address[index],1).then(res =>{
                    console.log(res,"****8888")
                }).catch(err =>{
                    console.log(err)
                })
            },
            toAddress(index){
                this.isAddress = index;
                this.$emit("getAddress",this.address[index])
                this.drawer.d = false;
            },
            editAddress(index){
                console.log(index,"===========")
            }
        },
        computed:{},
        activated(){
            this.get_city(10000000);
            this.get_address();
        },
    }
</script>

<style scoped>
    >>> .el-drawer{
        width: 100%;
        height: 80%;
        bottom: 0;
        top: unset;
    }
    >>> .el-drawer__body{
        background-color: rgba(125,125,125,0.09);
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
        margin: 23px 23px;
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
    .address-list{
        margin: 10px;
        background-color: white;
    }
    .address-list-choice{
        margin: 10px;;
        border: 2px solid red;
    }
    .address-list .address-user-info{
        font-size: 13px;
        color: #333;
        padding: 5px 5px;

    }
    .address-list .address-user-place{
        font-size: 13px;
        color: #333;
        padding: 5px 5px;
    }
    .address-list .address-user-setting{
        font-size: 13px;
        color: #333;
        padding: 5px 5px;
    }
    .address-list .address-user-setting .address-default{
        font-size: 16px;
        color: rgba(125,125,125,0.3);
        padding: 0 5px 0 0;
    }
    .address-list .address-user-setting .address-default-open{
        font-size: 16px;
        color: red;
        padding: 0 5px 0 0;
    }
    .address-list .address-user-setting .address-user-edit{
        display: inline-block;
        float: right;
        font-size:13px;
        z-index: 1;
    }
    .address-list .address-user-setting .address-user-edit i{
        color: red;
        font-size:16px;
        padding: 0 3px 0 0;
        font-weight: 600;
    }
    .address-list .address-user-setting .address-user-del{
        display: inline-block;
        float: right;
        font-size:13px;
    }
    .address-list .address-user-setting .address-user-del i{
        color: red;
        font-size:16px;
        padding: 0 0 0 3px;
        font-weight: 600;
    }
</style>