<template>
    <div class="toast" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data(){
            return {
                message:'',
                isShow:false
            }
        },
        methods:{
            show(message,duration){//调用show自动显示和消失
                this.isShow = true;
                this.message = message;
                setInterval(()=>{
                    this.isShow = false;
                    this.message = '';
                },duration)
            }
        }
    }
</script>

<style scoped>
.toast{
    font-size: 14px;
    position: fixed;
    /*width: 80px;*/
    /*height:40px;*/
    /*line-height: 40px;*/
    left: 50%;
    top: 40%;
    background-color: rgba(255, 135, 0, 0.25);
    border-radius: 4px;
    transform: translate(-50%,-50%);
    padding: 18px 20px;
    color: #ff6b0f;
    z-index: 99;
  }
</style>