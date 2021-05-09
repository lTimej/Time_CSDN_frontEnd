<template>
    <div >
        <nav-bar class="update-password-nav">
            <div slot="left" @click="back"><i class="el-icon-arrow-left" style="font-size: 24px"></i></div>
            <div slot="center">修改密码</div>
        </nav-bar>
        <scroll class="content">
            <div class="inp">
                <label class="tag" v-show="individuleInfo.pwd===1">旧密码</label>
                <div class="inp-item" v-show="individuleInfo.pwd===1">
                    <input type="password" placeholder="请输入旧密码" v-model="oldPwd">
                     <span v-show="isShowCanceloldPwd" @click="del_oldPwd"><i class="el-icon-circle-close" style="font-size: 18px;"></i></span>
                </div>
                <label class="tag">新密码</label>
                <div class="inp-item">
                    <input type="password" placeholder="11~20位，含数字和字母组合" v-model="newPwd">
                    <span v-show="isShowCancelnewPwd" @click="del_newPwd"><i class="el-icon-circle-close" style="font-size: 18px"></i></span>
                </div>
                <label class="tag">确认密码</label>
                <div class="inp-item">
                    <input type="password" placeholder="再次输入密码" v-model="confirmPwd">
                    <span v-show="isShowCancelconfirmPwd" @click="del_confirmPwd"><i class="el-icon-circle-close" style="font-size: 18px"></i></span>
                </div>
                <div class="err-msg" >
                    <span v-show="is_err_msg">{{err_msg}}</span>
                </div>
                <div class="confirm-btn" @click="ensure">
                    <el-button type="info" plain :class="{'change_color':isTrue}">确定</el-button>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/scroll/Scroll";
    import {updateUserProfile} from "network/users/profile";
    import {mapGetters} from "vuex";
    export default {
        name: "UpdatePassword",
        data(){
            return{
                oldPwd:"",
                newPwd:"",
                confirmPwd:"",
                isHave:true,
                is_err_msg:true,
                err_msg:'',
                is_summit:true
            }
        },
        components:{
            NavBar,
            Scroll
        },
        methods:{
            back(){
                this.oldPwd = "";
                this.newPwd = "";
                this.confirmPwd = "";
                this.is_err_msg = false;
                this.$router.back();
            },
            del_oldPwd(){
                this.is_err_msg = false;
                this.oldPwd = ""
            },
            del_newPwd(){
                this.is_err_msg = false;
                this.newPwd = ""
            },
            del_confirmPwd(){
                this.is_err_msg = false;
                this.confirmPwd = ""
            },
            checkout_confirmPwd(){
                let re = /^.{8,16}$/;
                if(this.newPwd !== this.confirmPwd){
                    this.is_err_msg = true;
                    this.err_msg = "两次密码输入不一致";
                    this.is_summit = false;
                    return;
                }
                if(!re.test(this.confirmPwd)){
                    this.is_err_msg = true;
                    this.err_msg = "密码必须位8-16位";
                    this.is_summit = false;
                    return;
                }

            },
            ensure(){
                if(!this.isTrue) return;
                this.checkout_confirmPwd();
                if(!this.is_summit) return;
                let data = {};
                if(this.oldPwd){
                    data = {
                        'oldPwd':this.oldPwd,
                        'newPwd':this.newPwd
                    }
                }else{
                    data = {
                        'newPwd':this.newPwd
                    }
                }
                updateUserProfile(data).then(res=>{
                    if(res.status === 400){
                        this.$toast.show("用户输入密码错误",3000)
                    }else if(res.status === 201){
                        this.$toast.show("密码修改成功",3000);
                        this.individuleInfo.pwd = 1;
                        this.back();
                    }
                })

            }
        },
        computed:{
            isShowCanceloldPwd(){
                return this.oldPwd !== ""
            },
            isShowCancelnewPwd(){
                return this.newPwd !== ""
            },
            isShowCancelconfirmPwd(){
                return this.confirmPwd !== ""
            },
            isTrue(){
                if(this.oldPwd) return this.oldPwd !== "" && this.newPwd !== "" && this.confirmPwd !== "";
                else return this.newPwd !== "" && this.confirmPwd !== "";
            },
            ...mapGetters({
                individuleInfo:'get_user_info'
            })
        }

    }
</script>

<style scoped>
 .update-password-nav{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 99;
    }
    .content{
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        height: calc(100% - 44px);
    }
    .inp .tag{
        font-size: 20px;
        color: #000000;
        font-weight: 500;
    }
    .inp{
        margin: 10px 20px;
    }
    .inp .inp-item{
        margin: 10px 0;
        padding: 0 0 10px 0;
        border-bottom: 1px solid lightgray;
    }
    .inp .inp-item input{
        border: none;
        outline: none;
        height: 30px;
        font-size: 17px;
    }
    .inp .inp-item span{
       margin-left: 130px;
    }
    .confirm-btn{
        /*position: absolute;*/
        margin: 30px 0 0 0;
    }
    .el-button{
        background-color: #ebebeb;
        width: 100%;
        color: #fff;
    }
    .change_color{
        background-color: red;
    }
    .err-msg{
        color: red;
        height: 30px;
    }
</style>