<template>
    <div class="edit-data-item">
        <settings-item class="e">
            <div slot="left">昵称</div>
            <div slot="right"><span v-model="namenick">{{individuleInfo.user_name}}</span><i class="el-icon-arrow-right" ></i></div>
        </settings-item>
        <settings-item class="e">
            <div slot="left">性别</div>
           <div slot="right">
                <el-radio-group v-model="gender" size="mini">
                  <el-radio-button label="男"></el-radio-button>
                  <el-radio-button label="女"></el-radio-button>
                </el-radio-group>
           </div>
        </settings-item>
        <settings-item class="e">
            <div slot="left">简介</div>
            <div slot="right" :style="introduce==='未填写'?'color:lightgray':'#333'"><span v-model="introduce">{{introduce}}</span><i class="el-icon-arrow-right" ></i></div>
        </settings-item>
        <div class="tag">
            <settings-item  class="e">
                <div slot="left">标签</div>
                <div slot="right">
                    <div class="tag-item" :style="tag==='未填写'?'color:lightgray':'#333'">
                        <span v-model="tag">{{tag}}</span>
                    </div>
                    <i class="el-icon-arrow-right" ></i>
                </div>
            </settings-item>
        </div>
        <settings-item  class="e">
            <div slot="left">真实姓名</div>
            <div slot="right" :style="authName==='未填写'?'color:lightgray':'#333'"><span v-model="authName">{{authName}}</span><i class="el-icon-arrow-right" ></i></div>
        </settings-item>
        <settings-item  class="e">
            <div slot="left">生日</div>
            <div slot="right" :style="birthday==='未填写'?'color:lightgray':'#333'"><span v-model="birthday">{{birthday}}</span><i class="el-icon-arrow-right" ></i></div>
        </settings-item>
        <settings-item class="e">
            <div slot="left">地区</div>
            <div slot="right" :style="areas==='未填写'?'color:lightgray':'#333'"><span v-model="areas">{{areas}}</span><i class="el-icon-arrow-right" ></i></div>
        </settings-item>
        <settings-item class="e">
            <div slot="left">开始工作时间</div>
            <div slot="right" :style="workTime==='未填写'?'color:lightgray':'#333'"><span v-model="workTime">{{workTime}}</span><i class="el-icon-arrow-right" ></i></div>
        </settings-item>
    </div>
</template>

<script>
    // import Settings from "views/settings/Settings";
    import SettingsItem from "views/settings/SettingsItem";
    export default {
        name: "EditMyDataItem",
        props:{
            individuleInfo:{
                type:Object
            }
        },
        data(){
            return {
                namenick:'未填写',
                gender:'男',
                introduce:'未填写',
                tag:'未填写',
                authName:'未填写',
                birthday:'未填写',
                areas:'未填写',
                workTime:'未填写'
            }
        },
        components:{
            // Settings,
            SettingsItem
        },
    }
</script>

<style scoped>
    .edit-data-item{
        background-color: #ededed;
    }
    .tag{
        margin: 20px 0;
    }
    .tag .tag-item{
        display: inline-block;
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        border: 1px solid lightgray;
        border-radius: 50px;
    }
    .e{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        border-bottom: 1px solid lightgray;
    }
</style>