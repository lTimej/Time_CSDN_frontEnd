<template>
    <div class="nick-edit">
        <nav-bar class="nick-edit-nav">
            <div slot="left" @click="back"><i class="el-icon-arrow-left"></i></div>
            <div slot="center"><span>昵称</span></div>
            <div slot="right" @click="confirmS"><span>确定</span></div>
        </nav-bar>
        <div class="nick-edit-item">
<!--            <input type="text" v-model="userName" placeholder="请输入">-->
            <el-input
              type="text"
              placeholder="请输入内容"
              v-model='namenick'
              maxlength="10"
              show-word-limit
             style="height: 50px">
            </el-input>
            <div class="remind">
                <span>昵称只能一个月修改一次</span>
        </div>
        </div>

    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {updateUserProfile} from "network/users/profile";
    import {mapGetters} from "vuex";


    export default {
        name: "NickEdit",
        data(){
            return {
                namenick:''
            }
        },
        mounted() {
            this.namenick= this.individuleInfo.user_name
        },
        components:{
            NavBar
        },
        methods:{
            back(){
                this.$router.back();
            },
            confirmS(){
                let data = {
                    user_name:this.namenick
                };
                updateUserProfile(data).then(res=>{
                    if (res.status === 201){
                        this.namenick = res.data.user_name
                        this.individuleInfo.user_name = res.data.user_name
                        this.$toast.show('修改成功',3000);
                        setTimeout(()=>{
                            this.$router.replace('/edit/mydata')
                        },3000)
                    }else if(res.status === 409){
                        this.$toast.show('昵称已存在',5000)
                    }else if(res.status === 400){
                        this.$toast.show('昵称格式不对',5000)
                    }

                })
            }

        },
        computed:{
            ...mapGetters({
                individuleInfo:'get_user_info'
            })
        }
    }
</script>

<style scoped>
    .nick-edit-nav{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        font-size: 20px;
        color: #000000;
    }
    .nick-edit-item{
        margin: 84px 20px;
        text-align: center;
    }
    >>> .el-input__inner{
        height: 60px;
    }
    .nick-edit-item input{
        width: 360px;
        height: 40px;
    }
    .remind{
        margin-top: 20px;
        font-size: 18px;
        color: lightgray;
    }
</style>