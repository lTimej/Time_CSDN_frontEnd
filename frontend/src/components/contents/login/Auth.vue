<template>
    <div class="auth">
        <el-drawer
          title="我是标题"
          :visible.sync="drawers"
            :wrapperClosable="false"
          :size=360
          :modal=false
          :before-close="handleClose"
          :show-close="true"
          direction="btt"
          :with-header="false">
          <div class="auth">
              <nav-bar class="auth-nav">
                  <div slot="left" @click="cancelAuth"><i class="el-icon-close"></i></div>
                  <div slot="center"><span>关注精彩内容</span></div>
              </nav-bar>
                <div class="auth-item">
                    <h1>{{userInfo.mobile}}</h1>
                    <div class="shortcut" :class="{'csc':isAccept}">
                        <span>本机号码一键登录</span>
                    </div>
                    <div class="change-login" @click="changeLogin">
                        <span>切换账号</span>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                    <div class="accept">
                        <input type="radio" :checked="accept" @click="change_accept">
                        <span class="login-outer">我已阅读同意<span class="login-inner">《用户服务条款》</span>与<span class="login-inner">隐私政策</span></span>
                    </div>
                </div>
          </div>
        </el-drawer>
    </div>
</template>

<script>
    import NavBar from "../../common/navbar/NavBar";
    import {mapGetters} from 'vuex'
    export default {
        name: "Auth",
        components: {
            NavBar
        },
        props:{
            drawers:{
                type:Boolean,
                default:function () {
                    return false
                }
            }
        },
        data() {
          return {
              accept:false,
              isAccept:false
          };
        },
        methods:{
            handleClose(done) {
                done();
            },
            cancelAuth(){
                this.$emit('cancelAuth')
            },
            changeLogin(){
                this.$emit('changeLogin')
            },
             //同意按钮
            change_accept(){
                this.accept = !this.accept;
                this.isAccept = !this.isAccept
            },
        },
        computed:{
            ...mapGetters({
                userInfo:'get_user_info'
            })
        }
    }
</script>

<style scoped>
    >>> .el-drawer{
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    .auth{
        position: relative;
    }
    .auth .auth-nav{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        font-size: 21px;
        color: #000000;
        font-weight: 600;
    }
    .auth-item{
        position: absolute;
        top: 44px;
        right: 0;
        left: 0;
        text-align: center;
    }
    .auth-item .shortcut{
        width: 300px;
        height: 40px;
        line-height: 40px;
        border-radius: 40px;
        background-color: #cccccc;
        margin: 10px 60px;
        color: #fff;
    }
    .auth-item .change-login{
        margin: 10px 0;
        color: red;
    }
    .auth-item .accept{
        position: fixed;
        bottom: 20px;
        margin: 0 60px;
    }
    .auth-item .accept .login-outer{
        color: gray;
    }
    .auth-item .accept .login-inner{
        color: blue;
    }
    .auth-item .csc{
        background-color: red;
    }
</style>