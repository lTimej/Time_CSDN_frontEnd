import {mapGetters} from "vuex";
import {focusUser,cancelFocusUser,isFocusUser} from "network/users/focus";

export const clickFocus = {
    data(){
        return{
            drawers:false
        }
    },
    methods: {
        focus(user_id,index=-1) {
            console.log("-------------adj-----------")
            if (!window.localStorage.getItem('token')){
                this.drawers = false
                this.drawers = true
                return
            }
            let backFocus = ""
            if(index !== -1){
                if (this.focusList[index].flag === "回关"){
                    backFocus = "回关"
                }
            }
            if (this.isFocus === "关注" || backFocus === "回关") {
                focusUser(user_id).then(res => {
                    if (res.status === 201) {
                        this.isFocus = "已关注";
                        if (backFocus === "回关"){
                            this.focusList[index].flag = "相互关注"
                        }else{
                            if(index !== -1) this.focusList[index].flag = "已关注"
                        }
                        this.$store.state.focusList = [];
                        this.$store.state.fansList = []
                    }
                })
            } else if(this.isFocus === "已关注"){
                cancelFocusUser(user_id).then(res => {
                    if (res.status === 201) {
                        this.isFocus = "关注";
                        if(index !== -1) {
                            this.focusList[index].mutual_focus = false
                            this.focusList[index].flag = "关注"
                        }
                        this.$store.state.focusList = [];
                        this.$store.state.fansList = []
                    }
                })
            }
        },
        //判断是否关注
        getfocusinfo(user_id) {
            isFocusUser(user_id).then(res => {
                if (res.data.isFocusUser) this.isFocus = "已关注";
                else this.isFocus = "关注";
            })
        }
    },
    computed:{
        ...mapGetters({
            article:'get_all_article_detail'
        })
    },
};