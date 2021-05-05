<template>
    <div class="info-data">
        <div class="tx" style="height: 50px">
            <img :src="individuleInfo.head_photo">
            <div class="gender"><i class="el-icon-male" style="color: #fff;font-size: 16px"></i></div>
            <div class="edit-data">
                <el-button round class="bu">编辑资料</el-button>
                <el-button type="danger" round class="bu">申请认证</el-button>
            </div>
        </div>
        <div class="info-data-item">
            <h3>{{individuleInfo.user_name}}</h3>
            <div class="info">
                <span>博客排名<span class="_c">86万+</span></span>
                <span>访问<span class="_c">{{individuleInfo.visitor}}</span></span>
                <span>粉丝<span class="_c">{{individuleInfo.fans}}</span></span>
            </div>
            <div class="intro">
                <span>一起海皮</span>
            </div>
            <div class="carrer-codeyear">
                <el-button round>学生</el-button>
                <el-button round>码龄{{individuleInfo.code_year}}年</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "IndividuleData",
        data(){
            return{

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
    .info-data{
        height: 180px;
    }
    .indo-data .tx{
        position: absolute;
        height: 80px;
    }
    .info-data .tx img{
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-left: 20px;
        bottom: 25px;
    }
    .info-data .tx .gender{
        position: relative;
        text-align: center;
        width: 25px;
        height: 25px;
        line-height: 25px;
        border-radius: 50%;
        background-color: rgba(35, 63, 182, 0.85);
        left: 80px;
        bottom: 57px;
    }
    .info-data .tx .edit-data{
        position: relative;
        left: 230px;
        height: 40px;
        line-height: 40px;
        bottom: 100px;
    }
    .info-data .tx .edit-data .bu{
        width: 80px;
        height: 30px;
        padding: 0;
        margin: 0 10px 0 0;
    }
    .info-data-item{
        margin-left: 18px;
    }
    .info-data-item span{
        font-size: 16px;
        margin-right: 8px;
        color: #c9c9c9;
    }
    .info-data-item ._c{
        color: #333;
        margin-left: 5px;
    }
    .carrer-codeyear{
        margin-top: 10px;
        height: 30px;
    }
    .carrer-codeyear .el-button{
        /*width: 40px;*/
        margin: 0 10px 0 0;
        font-size: 13px;
        padding: 5px 12px;
    }
</style>