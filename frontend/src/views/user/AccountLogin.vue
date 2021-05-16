<template>
    <login :username="username" :pwd="password">
        <div slot="which_username" class="login-username">
            <div class="login-username-item">
                <input type="text" placeholder="用户名/邮箱/手机号" v-model="username">
                <span v-show="isShowCancel" @click="del_username"><i class="el-icon-circle-close" style="font-size: 18px"></i></span>
            </div>
        </div>
        <div slot="which_password" class="login-username">
            <div class="login-password">
                <input type="password" placeholder="密码" style="float: left;height: 50px" v-model="password">
                <span class="pwd_span" v-show="isShowPwdCancel" @click="del_password"><i class="el-icon-circle-close" style="font-size: 18px"></i></span>
                <span class="forget-pwd">忘记密码？</span>
            </div>
        </div>
    </login>
</template>

<script>
    import Login from "./Login";
    export default {
        name: "AccountLogin",
        data(){
            return{
                username_profix:1,
                username: '',
                password:''
            }
        },
        components:{
            Login
        },
        methods:{
            //重置输入框手机号
            del_username(){
                this.username = ""
            },
            //重置输入框短信验证码
            del_password(){
                this.password = ""
            }
        },
        computed:{
            isShowCancel(){
                return this.username != ''
            },
            isShowPwdCancel(){
                return this.password != ''
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
    .forget-pwd{
        color: darkgrey;
    }
</style>