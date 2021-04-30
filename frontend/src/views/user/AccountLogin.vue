<template>
    <login path='/login/account' :username="username" :pwd="password">
        <div slot="which_login" class="login-input-mobile">
            <div class="login-username">
                <input type="text" placeholder="用户名/邮箱/手机号" v-model="username" clearable>
                <span v-show="isShowCancel" @click="del_username"><i class="el-icon-circle-close" style="font-size: 18px"></i></span>
            </div>
        </div>
        <div slot="which_login2">
            <div class="login-password">
                <input type="password" placeholder="密码" style="float: left;height: 50px" v-model="password">
                <span>忘记密码？</span>
                <span class="pwd_span" v-show="isShowPwdCancel" @click="del_password"><i class="el-icon-circle-close" style="font-size: 18px"></i></span>

            </div>
        </div>
    </login>
</template>

<script>
    import Login from "./Login";

    export default {
        name: "AccountLogin",
        data() {
            return {
              username:'',
              password:''
            }
        },
        components:{
            Login
        },
        methods:{
            //重置输入框用户名
            del_username(){
                this.username = ""
            },
            //重置输入框密码
            del_password(){
                this.password = ""
            }
        },
        computed:{
            isShowCancel(){//是否显示重置按钮
                return this.username != ''
            },
            isShowPwdCancel(){//是否显示重置按钮
                return this.password != ''
            }
        },
    }
</script>

<style scoped>

</style>