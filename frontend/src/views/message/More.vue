<template>
    <div class="more">
        <div class="more-item">
            <div class="icon">
                <svg class="iconfont">
                    <use xlink:href="#icon-tupian"></use>
                </svg>
                <div>
                    <input type="file" 
                        accept="image/gif,image/jpeg,,image/png" 
                        class="upload"
                        ref="file" @click="e=>{e.target.value = ''}"
                        @change="send_photo"
                    >
                </div>
                <p>照片</p>
            </div>
            <div class="icon">
                <svg class="iconfont">
                    <use xlink:href="#icon-paizhao" ></use>
                </svg>
                <div>
                    <input type="file" accept="image/*" capture="camera" class="upload" @click="send_camera">
                </div>
                <p>拍照</p>
            </div>
            <div class="icon" @click="send_audio">
                <svg class="iconfont">
                    <use xlink:href="#icon-yuyin" ></use>
                </svg>
                <p>语音</p>
            </div>
            <div class="icon" @click="send_vedio">
                <svg class="iconfont">
                    <use xlink:href="#icon-shipin" ></use>
                </svg>
                <p>视频</p>
            </div>
            <div class="icon" @click="send_redpag">
                <svg class="iconfont">
                    <use xlink:href="#icon-hongbao" ></use>
                </svg>
                <p>红包</p>
            </div>
            <div class="icon" @click="send_eft">
                <svg class="iconfont">
                    <use xlink:href="#icon-zhuanzhang" ></use>
                </svg>
                <p>转账</p>
            </div>
            <div class="icon" @click="send_address">
                <svg class="iconfont">
                    <use xlink:href="#icon-daohangdizhi" ></use>
                </svg>
                <p>地址</p>
            </div>
            <div class="icon" @click="send_account">
                <svg class="iconfont">
                    <use xlink:href="#icon-zhanghu"></use>
                </svg>
                <p>名片</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {uploadChatPicture} from "network/im/im";
    export default {
        name: "More",
        data(){
            return {
                fileData:null,
            }
        },
        components:{
            
        },
        mounted(){
            
        },
        methods:{
            send_photo(){
                let file = this.$refs.file.files[0];
                let formData = new FormData();
                formData.append('picture',file);
                console.log(formData,"11111111111")
                console.log(file,"22222222222")
                uploadChatPicture(formData).then(res =>{
                    console.log(res,"333333333")
                    console.log(res.data)
                    this.$emit("send_photo",res.data.data.picture)
                }).catch(err =>{
                    console.log(err,"上传图片错误")
                })
            }
        }
        
    }
</script>

<style scoped>
    .more{
        background-color: #FFFFFF;
        display: flex;
        position: fixed;
        bottom: 50px;
    }
    .more-item{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 18px;
    }
    .more-item .icon{
        width: 25%;
        height: 60px;
        margin-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .more-item .icon .iconfont{
        font-size: 30px;
        color: #333;
    }
    .more-item .icon p{
        text-align: center;
        font-size: 16px;
    }
    .upload {
        width: 64px;
        height: 64px;
        position: absolute;
        top: 1px;
        opacity: 0;
    }
</style>