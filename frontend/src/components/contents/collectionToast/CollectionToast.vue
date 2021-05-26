<template>
    <div class="collection-toast">
        <div class="tan" v-if="isShow" @click.stop="cancel" >
            <div class="tan-item" @click.stop="isCancel">
                <div class="title">
                    <span>是否取消收藏？</span>
                </div>
                <div class="y-or-n">
                    <span class="y" @click.stop="cf" >确定</span>
                    <span class="n" @click="cancel">取消</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CollectionToast",
        props:{
            isShow:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
            }
        },
        methods:{
             cf(){
                 this.$emit('qxCollection')
            },
            cancel(){
                this.$emit('cancelShow')
            },
            isCancel(){

            },
        }
    }
</script>

<style scoped>
.tan{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(186, 186, 186, 0.68);
        z-index: 99;
    }
    .tan .tan-item{
        width: 200px;
        height: 120px;
        background-color: #fff;
        margin: 300px 100px;
        line-height: 50px;
        text-align: center;
    }
    .tan .tan-item .title{
        font-size: 16px;
        font-weight: 600;
    }
    .tan .tan-item .y-or-n{
        font-size: 16px;
    }
    .tan .tan-item .y{
        padding-right: 20px;
    }
</style>