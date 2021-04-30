<template>
    <login :username="mobile" :pwd="code">
        <div slot="which_username" class="login-username" >
            <div class="mobile-profix">
                <select v-model="mobile_profix" style="width: 69px;text-align: center;">
                    <option label="+86" value="1" selected>+86 中国大陆</option>
                  <option label="+1" value="2">+1  美国</option>
                  <option label="+1" value="3">+1  加拿大</option>
                  <option label="+852" value="4" checked>+852 中国香港</option>
                  <option label="+86" value="5">+86  中国台湾</option>
                  <option label="+81" value="6">+81  日本</option>
                </select>
            </div>
            <div class="login-username-item">
                <input type="text" placeholder="请输入手机号" v-model="mobile">
                <span v-show="isShowCancel" @click="del_username"><i class="el-icon-circle-close" style="font-size: 18px"></i></span>
            </div>
        </div>
        <div slot="which_password" class="login-username">
            <div class="login-password">
                <input type="text" placeholder="请输入手机验证码" style="float: left;height: 50px" v-model="code">
                <span class="pwd_span" v-show="isShowPwdCancel" @click="del_password"><i class="el-icon-circle-close" style="font-size: 18px"></i></span>
                <span>获取动态码</span>
            </div>
        </div>
    </login>
</template>

<script>
    import Login from "./Login";
    export default {
        name: "PhoneLogin",
        data(){
            return{
                mobile_profix:1,
                mobile: '',
                code:''
            }
        },
        components:{
            Login
        },
        methods:{
            //重置输入框手机号
            del_username(){
                this.mobile = ""
            },
            //重置输入框短信验证码
            del_password(){
                this.code = ""
            }
        },
        computed:{
            isShowCancel(){
                return this.mobile != ''
            },
            isShowPwdCancel(){
                return this.code != ''
            }
        },
    }
</script>

<style scoped>

    .login-username{
        height: 69px;
        line-height: 69px;
        text-align: center;
        margin: 0 10px;
        border-bottom: 1px solid lightgray;
    }
    .mobile-profix{
        float: left;
        margin-left: 20px;
    }
    .login-username select{
        border: none;
        outline: none;
        height: 39px;
        font-size: 16px;
    }
    .login-username select option{
        font-size: 13px;
        background-color: rgba(125,125,125,0.1);
        border: none;
    }
     .login-username input{
        border: none;
        outline: none;
        height: 59px;
        font-size: 20px;
    }
    .login-username-item{
        float: left;
    }
    .pwd_span{
        position: absolute;
        left: 240px;
    }
</style>