<template>
    <div class="all-search">
        <nav-bar class="search-nav">
            <div slot="left" @click="toSearch">
                <el-input
                    placeholder="推荐内容"
                    prefix-icon="el-icon-search"
                    @input="onChange"
                    v-model="search">
                </el-input>
                <i class="el-icon-error cancel-content" v-show="search!==''" @click="toCancelContent"></i>
            </div>
            <div slot="right" @click="cancelSearch"><span style="color: #333;font-size: 20px;margin-left: 1px">取消</span></div>
        </nav-bar>
        <div v-show="!isSuggest">
            <scroll
                class="content"
                :pull-upload="true"
                :pull-down-refresh="true"
                @pullingUp="loadMore"
                @pullingDown="pullingMore"
                ref="scrollTo"
            >
                <div class="search-history" @click="canc">
                    <div class="search-history-title">
                        <span class="title">历史搜索</span>
                        <div class="cl">
                            <span>清空全部历史</span>
                            <i class="el-icon-delete" @click="clearHistory"></i>
                        </div>
                    </div>
                    <div class="search-content">
                        <span class="search-content-item" v-for="history in histories" @click="scSearch(history)">
                            <span>{{history}}</span>
                        </span>
                    </div>
                </div>
                <div class="search-recommend" @click="canc">
                    <h3>热搜</h3>
                    <div class="hot-search">
                        <div class="hot-search-item">
                            <span class="numb n1">1</span>
                            <span class="hot-title">神奇的浏览器插件</span>
                        </div>
                        <div class="hot-search-item">
                            <span class="numb n2">2</span>
                            <span class="hot-title">神奇的浏览器插件</span>
                        </div>
                        <div class="hot-search-item">
                            <span class="numb n3">3</span>
                            <span class="hot-title">神奇的sdadsdddwd浏览器插件</span>
                        </div>
                    </div>
                </div>
            </scroll>
        </div>
        <div v-show="isSuggest">
            <search-suggest :searchs="searchs" @equalSear="equalSear"/>
        </div>
        <div class="btn" v-if="search!==''">
            <div @click="cSearch">确定</div>
        </div>
    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";
    import NavBar from "components/common/navbar/NavBar";
    import SearchSuggest from "./SearchSuggest";
    import {userSearchHistory,clearUserSearchHistory,searchSuggest} from "network/search/search";

    export default {
        name: "AllSearch",
        data(){
            return {
                search:"",
                isBtn:false,
                histories:[],
                isSuggest:false,
                searchs:[]
            }
        },
        components:{
            Scroll,
            NavBar,
            SearchSuggest
        },
        methods:{
            equalSear(search){
                this.search = search
            },
            cancelSearch(){
                this.isBtn = false;
                this.$router.back()
            },
            toCancelContent(){
                this.search = ""
            },
            toSearch(){
                this.isBtn = true;
            },
            canc(){
                this.isBtn = false;
            },
            cSearch(){
                if(!this.search){
                    this.$toast.show("搜索不为空",3000);
                    return
                }
                this.$router.push({
                    path:'/allsearch',
                    query:{
                        ky:this.search
                    }
                });
                this.isBtn = false;
            },
            scSearch(history){
                this.search = history;
                this.$router.push({
                    path:'/allsearch',
                    query:{
                        ky:history
                    }
                });
                this.isBtn = false;
            },
            loadMore(){
                this.isBtn = false;
            },
            pullingMore(){
                this.isBtn = false;
            },
            getSearchHistory(){
                userSearchHistory().then(res=>{
                    this.histories = res.data.data.keywords
                })
            },
            clearHistory(){
                clearUserSearchHistory().then(res=>{
                    this.getSearchHistory()
                })
            },
            onChange(e){
                if(this.search){
                    this.isSuggest = true
                }
                searchSuggest(this.search).then(res=>{
                    this.searchs = res.data.data.searchs
                })
            }
        },
        activated() {
            this.getSearchHistory();
            this.isSuggest = false
        }
    }
</script>

<style scoped>
    .search-nav{
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    >>> .el-input__inner{
        width: 340px;
        border-radius: 30px;
        height: 44px;
        background-color: #f2f2f2;
    }
    .all-search .content{
        position: absolute;
        overflow: hidden;
        top: 48px;
        left: 0;
        right: 0;
        height: calc(100% - 48px);
    }
    .search-history{

    }
    .search-history .search-history-title{
        margin-top: 20px;
        height: 30px;
        line-height: 30px;
    }
    .search-history .search-history-title .title{
        float: left;
        margin-left: 20px;
        font-size: 18px;
        font-weight: 600;
    }
    .search-history .search-history-title .cl{
        float: right;
        margin-right: 20px;
        font-size: 14px;
        color: #c6c6c6;
    }
    .search-history .search-history-title .cl span{
        margin-right: 10px;
    }
    .search-history .search-content{
        margin-top: 10px;
    }
    .search-history .search-content .search-content-item{
        display: inline-block;
        border: 1px solid #fbfbfb;
        border-radius: 30px;
        padding: 5px 15px;
        color: #333;
        background-color: rgba(239, 239, 239, 0.45);
        margin: 5px;
    }
    .search-recommend{
        margin-left: 10px;
    }
    .search-recommend .hot-search{
        display: flex;
        flex-wrap: wrap;
        /*justify-content: space-around;*/
    }
    .search-recommend .hot-search .hot-search-item{
        position: relative;
        width: 48%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 20px;
    }
    .search-recommend .hot-search .hot-search-item .numb{
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        border-radius: 2px;
        margin-right: 3px;
        color: #fff;
    }
    .n1{
        background-color: red;
    }
    .n2{
        background-color: orange;
    }
    .n3{
        background-color: yellow;
    }
    .n{
        background-color: lightgray;
    }
    .cancel-content{
        position: absolute;
        left: 320px;
        top: 17px;
        font-size: 20px;
        color: lightgray;
    }
    .btn{
        position: fixed;
        height: 50px;
        line-height: 50px;
        bottom: 0;
        right: 0;
        left: 0;
        text-align: center;
        font-size: 20px;
        background-color: #fff;
    }
</style>