<template>
    <login path="/login/phone" :username="mobile" :pwd="code">
        <div slot="which_login" class="login-input-mobile">
            <div class="login-mobile-profix">
                <select v-model="phone_profix" slot="prepend" placeholder="请选择">
                  <option label="+86" value="1" selected>+86 中国大陆</option>
                  <option label="+1" value="2">+1  美国</option>
                  <option label="+1" value="3">+1  加拿大</option>
                  <option label="+852" value="4" checked>+852 中国香港</option>
                  <option label="+86" value="5">+86  中国台湾</option>
                  <option label="+81" value="6">+81  日本</option>
                </select>
            </div>
            <div class="login-username">
                <input type="text" placeholder="请输入手机号" v-model="mobile">
                <span v-show="isShowCancel" @click="del_username"><i class="el-icon-circle-close" style="font-size: 18px"></i></span>
            </div>
        </div>
        <div slot="which_login2">
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
        data() {
            return {
                phone_profix:'+86',
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
.login-mobile-profix select{
        width: 80px;
        text-align: center;
        background-color: #fff;
        border: none;
        outline: none;
        font-size: 18px;
    }
    .login-mobile-profix select option{
        font-size: 13px;
        background-color: rgba(125,125,125,0.1);
        border: none;
    }
    .login-mobile-profix{
        float: left;
    }
</style>