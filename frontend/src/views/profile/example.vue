<template>
    <div>
         <input type="file">
        <button @click="add">确定</button>
    </div>
</template>

<script>
    import {updateUserProfile} from "network/users/profile";
    export default {
        name: "example",
        data() {
          return {
            // imageUrl: ''
          };
        },
        methods: {
            add(){
                let formData = new FormData()
                formData.append('head_photo',document.querySelector('input[type=file]').files[0])
                updateUserProfile(formData).then(res=>{
                    console.log(res);
                })
            }
            // handleChange(file){
            //     console.log(222222,file.raw);
            //
            //   formData.append('head_photo',file.raw)
            //     updateUserProfile(formData).then(res=>{
            //         console.log(33333333333,res);
            //     })
            // },
        }
    }
</script>

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>