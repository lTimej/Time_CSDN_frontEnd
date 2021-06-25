<template>
    <settings class="setting" :value="value">
        <settings-item>
            <div slot="left">消息设置</div>
            <i class="el-icon-arrow-right" slot="right"></i>
        </settings-item>
        <settings-item>
            <div slot="left">夜间模式</div>
            <div slot="right">
                <el-switch
              v-model="value"
              @change="change"
              active-color="#13ce66"
              inactive-color="gray">
            </el-switch>
            </div>
        </settings-item>
        <settings-item>
            <div slot="left">隐私设置</div>
            <i class="el-icon-arrow-right" slot="right"></i>
        </settings-item>
        <settings-item>
            <div slot="left">清理缓存</div>
            <div  slot="right">0M</div>
        </settings-item>
        <div class="account-manage" v-show="isShowAccountManage">
            <settings-item path="/account/admin">
                <div slot="left">账号与安全管理</div>
                <i class="el-icon-arrow-right" slot="right"></i>
            </settings-item>
        </div>
        <settings-item>
            <div slot="left">分享我的二维码</div>
            <i class="el-icon-arrow-right" slot="right"></i>
        </settings-item>
        <settings-item>
            <div slot="left">给我们评分</div>
            <i class="el-icon-arrow-right" slot="right"></i>
        </settings-item>
        <settings-item>
            <div slot="left">推荐好友</div>
            <i class="el-icon-arrow-right" slot="right"></i>
        </settings-item>
        <settings-item>
            <div slot="left">用户服务条款</div>
            <i class="el-icon-arrow-right" slot="right"></i>
        </settings-item>
        <settings-item>
            <div slot="left">隐私协议</div>
            <i class="el-icon-arrow-right" slot="right"></i>
        </settings-item>
        <settings-item>
            <div slot="left">版本</div>
            <div  slot="right">v4.6.1</div>
        </settings-item>
        <settings-item path="/unloginprofile" v-show="isShowLogout">
            <div slot="left">
                  退出登录
            </div>
        </settings-item>

    </settings>

</template>

<script>
    import Settings from "./Settings";
    import SettingsItem from "./SettingsItem";

    export default {
        name: "MainSettings",
        components:{
            Settings,
            SettingsItem
        },
        data(){
            return{
                value:false,
                isShowAccountManage:true,
                isShowLogout:true
            }
        },
        methods:{
            //改变夜间模式
            change(){
                console.log(this.value);
            },
        },
        //判断是否登录，给想的页面
        activated() {
            if(!window.localStorage.getItem('token')){
                this.isShowLogout = false;
                this.isShowAccountManage = false;
            }
        }
    }
</script>

<style scoped>
    .setting{

    }
  .account-manage{
      margin: 20px 0;
  }
</style>