<template>
    <div class="login">
        <nav-bar class="login-nav">
            <div slot="left" @click="back"><i class="el-icon-arrow-left" style="font-size: 24px"></i></div>
        </nav-bar>
        <scroll class="content">
            <div class="login-item">
                <div class="login-methods">
                    <span @click="changeLoginMethod('/login/phone')" :class="{login_status:isPhone}">手机登录</span>
                    <span class="su">|</span>
                    <span @click="changeLoginMethod('/login/account')" :class="{login_status:isAccount}">账号登录</span>
                </div>
                <slot name="which_username"></slot>
                <slot name="which_password"></slot>
                <div class="login-radio">
                    <input type="checkbox">
                    <span class="login-outer">我已阅读同意<span class="login-inner">《用户服务条款》</span>与<span class="login-inner">隐私政策</span></span>
                </div>
                <div class="login-confirm">
                    <el-button type="danger" round class="login-btn" @click="login">登录</el-button>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";

    export default {
        name: "Login",
        props:{//获取子组件的数据
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
            Scroll
        },
        methods:{
            //返回上个页面
            back(){
                this.$router.back();
            },
            //切换登录方式
            changeLoginMethod(path){
                this.$router.replace(path).catch(()=>{})
            },
            //登录
            login(){
                console.log(this.username,this.pwd);
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
        position: relative;
        z-index: 9;
        background-color: white;
        height: 100vh;
    }
    .login-nav{
        position: fixed;
        vertical-align: middle;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .content{
        overflow: hidden;
       position: absolute;
       top: 44px;
       bottom: 49px;
       left: 0;
       right: 0;
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
        text-align: center;
    }
    .login-confirm .login-btn{
        width: 360px;
    }
    .login_status{
        color: lightgray;
    }

</style>