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
                    <input type="radio" :checked="accept" @click="change_accept">
                    <span class="login-outer">我已阅读同意<span class="login-inner">《用户服务条款》</span>与<span class="login-inner">隐私政策</span></span>
                </div>
                <div class="login-confirm">
                    <el-button type="danger" round style="width: 360px" :class="{'login_btn':isPhoneLogin}" @click="phoneLogin" v-show="!isPhone">手机登录</el-button>
                    <el-button type="danger" round style="width: 360px" :class="{'login_btn':isAccountLogin}" @click="accountLogin" v-show="!isAccount">账号登录</el-button>
                </div>
            </div>
<!--            <toast v-show="isShow"></toast>-->
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";

    //前端认证
    import {auth,login} from "network/users/login";
    import Toast from "components/contents/toast/Toast";

    import {mapActions} from 'vuex'

    export default {
        name: "Login",
        props:{//获取子组件的数据
            username:{//用户名
                type:String,
                default:""
            },
            pwd:{//密码或短信验证码
                typy:String,
                default:"",
            }
        },
        data() {
            return {
                accept:false,
                // isShow:false
            }
        },
        components:{
            NavBar,//导航栏
            Scroll,
            Toast
        },
        methods:{
            //返回上个页面
            ...mapActions({
                saveToken:'SaveToken',
                saveRefreshToken:'SaveRefreshToken'
            }),
            back(){
                this.$router.back();
            },
            //同意按钮
            change_accept(){
                this.accept = !this.accept;
            },
            //切换登录方式
            changeLoginMethod(path){
                this.$router.replace(path).catch(()=>{})
            },
            login(res){//登录逻辑
                console.log(res);
                    if(res.status=='400'){//验证码过期
                        this.$toast.show('验证码已过期',5000);
                    }else if(res.status=='401'){//验证码输入错误
                        this.$toast.show('验证码输入错误',5000);
                    }else if(res.status=='402'){//用户名或密码输入错误错误
                        this.$toast.show('用户名或密码输入错误',5000);
                    }else if(res.status=='201'){//登录成功
                        this.$toast.show('登录成功',5000)
                        //登录成功，将token值存入locaStorage
                        window.localStorage.clear();
                        window.localStorage.setItem('token',res.data.token);
                        window.localStorage.setItem('refresh_token',res.data.refresh_token);
                        this.saveToken(res.data.token);
                        this.saveRefreshToken(res.data.refresh_token);
                        //跳转到我的页面
                        // this.$router.push('/profile')
                        this.$router.back()
                        // location.href = '/profile'
                    }else {
                        this.$toast.show('用户不存在',5000)
                    }
            },
            //手机号登录
            phoneLogin(){
                //判断是否满足登录条件
                if(!this.isPhoneLogin){
                    return;
                }
                auth(this.username,this.pwd).then(res=>{
                    this.login(res)
                }).catch(err=>{
                    console.log(2222,err);
                })
            },
            //账号登录
            accountLogin(){
                // 判断是否满足登录条件
                if(!this.isAccountLogin){
                    return;
                }
                login(this.username,this.pwd).then(res=>{
                    this.login(res)
                }).catch(err=>{
                    console.log(2222,err);
                })
            }

        },
        computed:{
            isPhone(){//改变切换登录模式的字体颜色
                return this.$route.path !== '/login/phone'
            },
            isAccount(){//改变切换登录模式的字体颜色
                return this.$route.path !== '/login/account'
            },
            isPhoneLogin(){
                let re1 = /^\d{6}$/;
                let re2 = /^1[3-9]\d{9}$/;
                if(re1.test(this.pwd) && re2.test(this.username) && this.accept){
                    return true
                }else{
                    return false;
                }
            },
            isAccountLogin(){
                let re1 = /^.{8,16}$/;
                let re2 = /^.+$/;
                if(re1.test(this.pwd) && re2.test(this.username) && this.accept){
                    return true
                }else{
                    return false;
                }
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
    .login-confirm .login_btn{
        background-color: orangered;
    }
    .login_status{
        color: lightgray;
    }

</style>