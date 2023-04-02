<template>
    <div class="ma">
        <scroll-x class="content-x">
            <div class="a">
                <span class="b">
                    <span>python</span>
                </span>
                <span class="b">
                    <span>java</span>
                </span>
                <span class="b">
                    <span>c++</span>
                </span>
                <span class="b">
                    <span>c#</span>
                </span>
                <span class="b">
                    <span>web</span>
                </span>
                <span class="b">
                    <span>docker</span>
                </span>
                <span class="b">
                    <span>python</span>
                </span>
                <span class="b">
                    <span>java</span>
                </span>
                <span class="b">
                    <span>c++</span>
                </span>
                <span class="b">
                    <span>c#</span>
                </span>
                <span class="b">
                    <span>web</span>
                </span>
                <span class="b">
                    <span>docker</span>
                </span>
                <span class="b">
                    <span>python</span>
                </span>
                <span class="b">
                    <span>java</span>
                </span>
                <span class="b">
                    <span>c++</span>
                </span>
                <span class="b">
                    <span>c#</span>
                </span>
                <span class="b">
                    <span>web</span>
                </span>
                <span class="b">
                    <span>docker</span>
                </span>
                <span class="b">
                    <span>python</span>
                </span>
                <span class="b">
                    <span>java</span>
                </span>
            </div>
        </scroll-x>
    </div>
</template>

<script>
    import ScrollX from "components/common/scroll/ScrollX";
    export default {
        name: "Cart",
        components:{
            ScrollX
        }
    }
</script>

<style scoped>
     .content-x{
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 650px;
    }
    .a{
        /*display: flex;*/
       height: 42px;
        line-height: 42px;
        font-size: 20px;
        color: #a4a4a4;
        white-space: nowrap;
        text-align: center;
        /*width: 1200px;*/
    }
    .b{
        display: inline-block;
        margin: 5px 10px;
        padding: 0 20px;
        /*flex: 1;*/
    }
    >>> .contents{
        /*width: 1200px;*/
    }
    .ma{
        /*width: 100vh;*/
        /*position: relative;*/
    }

</style>