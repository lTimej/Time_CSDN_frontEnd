<template>
    <div class="search-suggest">
        <scroll class="content">
            <div class="search-suggest-item" v-for="search in searchs" >
                <div class="s" @click="toSearch(search)"><span>{{search}}</span></div>
                <div class="ss" @click="equalSear(search)"><i class="el-icon-top-left"></i></div>
                <div class="x"></div>
            </div>
            <div class="add">

            </div>
        </scroll>
    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    export default {
        name: "SearchSuggest",
        props:{
            searchs:{
                type:Array,
                default:function () {
                    return []
                }
            }
        },
        components:{
            Scroll
        },
        methods:{
            toSearch(search){
                this.$router.push({
                    path:'/allsearch',
                    query:{
                        ky:search
                    }
                })
            },
            equalSear(search){
                this.$emit('equalSear',search)
            }
        }
    }
</script>

<style scoped>
    .search-suggest .content{
        position: absolute;
        overflow: hidden;
        top: 48px;
        left: 0;
        right: 0;
        height: calc(100% - 48px);
    }
    .search-suggest .search-suggest-item{
        margin: 15px;
        font-size: 19px;
        height: 30px;
    }
    .search-suggest .search-suggest-item .s{
        float: left;
        color: #333;
        overflow: hidden;
        width: 80%;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .search-suggest .search-suggest-item .ss{
        float: right;
    }
    .search-suggest .search-suggest-item .x{
        height: 1px;
        width: 100%;
        background-color: rgba(211, 211, 211, 0.84);
        float: left;
        margin: 15px 0;
    }
    .search-suggest .add{
        height: 600px;
    }
</style>