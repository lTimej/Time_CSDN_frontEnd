<template>
    <div class="login">
        <nav-bar class="login-nav">
            <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
        </nav-bar>
        <div class="login-item">
            <div class="login-methods">
                <span @click="login_btn('/login/phone')" :class="{phone_login:isPhone}">手机登录</span>
                <span class="su">|</span>
                <span @click="login_btn('/login/account')" :class="{account_login:isAccount}">账号登录</span>
            </div>
            <slot name="which_login"></slot>
            <slot name="which_login2"></slot>
            <div class="login-radio">
                <input type="checkbox">
                <span class="login-outer">我已阅读同意<span class="login-inner">《用户服务条款》</span>与<span class="login-inner">隐私政策</span></span>
            </div>
            <div class="login-confirm" @click="login">
                <el-button type="danger" round class="login-btn">登录</el-button>
            </div>
            <div class="other-login">
                <div>使用其他方式登录</div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "Login",
        props:{//获取子组件的数据
            path:{//路由地址
                type:String
            },
            username:{//用户名
                type:String,
                default:""
            },
            pwd:{//密码或短信验证码
                typy:String,
                default:""
            }
        },
        data() {
            return {

            }
        },
        mounted() {

        },
        components:{
            NavBar,//导航栏
        },
        methods:{
            //返回上个页面
            back(){
                this.$router.back();
            },
            //切换登录模式
            login_btn(path){
                this.$router.replace(path).catch(()=>{})
            },
            //登录
            login(){
                console.log(1111111,this.username);
            }
        },
        computed:{
            isPhone(){//改变切换登录模式的字体颜色
                return this.$route.path !== '/login/phone'
            },
            isAccount(){//改变切换登录模式的字体颜色
                return this.$route.path !== '/login/account'
            }
        }
    }
</script>

<style scoped>
    .login{
        width: 500px;
    }
    .login-nav i{
        color: #333;
        font-size: 16px;
    }
    .login-item{
        position: absolute;
        top: 44px;
    }
    .login-item .login-methods{
        margin: 20px 0 60px 20px;
    }
    .login-item .login-methods span{
        margin-right: 20px;
        font-size: 24px;
    }
    .login-item .login-methods .su{
        color: lightgray;
    }
    .login-input-mobile{
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin:0 20px;
        padding-bottom: 3px;
        border-bottom: 0.2px solid lightgray;
    }
    .login-username input , .login-password input{
        border: none;
        outline: none;
        height: 60px;
        font-size: 20px;
        float: left;
    }
    .login-password{
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin:0 20px;
        padding-bottom: 5px;
        border-bottom: 0.2px solid lightgray;
    }
    .login-password .pwd_span{
        position: absolute;
        left: 240px;
    }
    .login-password span , .login-username span{
        color: lightgray;
        float: right;
        margin-right: 10px;
    }
    .login-radio {
        margin: 20px;
    }
    .login-radio .login-outer{
        color: gray;
    }
    .login-radio .login-outer .login-inner{
        color: blue;
    }
    .login-confirm {
        margin: 0 0 0 20px;
        text-align: center;
    }
    .login-confirm .login-btn{
        width: 360px;
    }
    .other-login{
        margin-top: 240px;
        text-align: center;
    }
    .phone_login , .account_login{
        color: lightgray;
    }
</style>