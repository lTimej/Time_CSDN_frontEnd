<template>
    <div class="emoj">
        <div class="emoj-item">
            <div class="res"><img src="~assets/doutu/emoj/0.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/1.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/2.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/3.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/4.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/5.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/6.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/7.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/8.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/9.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/10.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/11.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/12.gif" class="small"></div>
            <div class="res"><img src="~assets/doutu/emoj/13.gif" class="small"></div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: "Emoj",
        components:{
            
        },
        methods:{
        
        }
        
    }
</script>

<style scoped>
    .emoj{
        background-color: #FFFFFF;
        display: flex;
        position: fixed;
        bottom: 50px;
    }
    .emoj-item{
        flex-direction: row;
        flex-wrap: wrap;
        display: flex;
    }
    .emoj-item img{
        margin:10px
    }
    .emoj-item .small{
        width: 32px;
        height: 32px;
    }
</style>