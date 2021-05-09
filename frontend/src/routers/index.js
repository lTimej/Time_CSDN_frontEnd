import Vue from 'vue'
import VueRouter from 'vue-router'

//注册
Vue.use(VueRouter);

const Home = () => import('views/home/Home');
const Blog = () => import('views/blog/Blog');
const Study = () => import('views/study/Study');
const Message = () => import('views/message/Message');
const Profile = () => import('views/profile/Profile');
const UnloginProfile = () => import('views/profile/UnloginProfile');

// const Login = () => import('views/user/Login');

const PhoneLogin = () => import('views/user/PhoneLogin');
const AccountLogin = () => import('views/user/AccountLogin');
const MainSettings = () => import("views/settings/MainSettings") ;

const NavPhoto = () => import("views/profile/homepageChildren/NavPhoto") ;

const EditMyData = () => import("views/profile/homepageChildren/editMyData/EditMyData") ;
const example = () => import("views/profile/example");
const NickEdit = () => import("views/profile/homepageChildren/editMyData/NickEdit");
const AccountAdmin = () => import("views/settings/children/AccountAdmin");

const routes = [
    {
      name:'首页',
      component:Home ,
      path:'/'
    },
    {
      name:'首页',
      component:Home ,
      path:'/home',
    },
    {
      name:'博客',
      component:Blog ,
      path:'/blog'
    },
    {
      name:'学习',
      component:Study ,
      path:'/study'
    },
    {
      name:'消息',
      component:Message ,
      path:'/message'
    },
    {
      name:'我的',
      component:Profile ,
      path:'/profile'
    },
    {
      name:'我的',
      component:UnloginProfile ,
      path:'/unloginprofile'
    },
    {
      name:'手机号登录',
      component:PhoneLogin ,
      path:'/login/phone',
    },
    {
      name:'账号登录',
      component:AccountLogin ,
      path:'/login/account',
    },
    {
      name:'账号设置',
      component:MainSettings ,
      path:'/account/setting',
      meta:{
          isShowTabbar:true
        }
    },
    {
      name:'头像导航',
      component:NavPhoto ,
      path:'/myAccount',
      meta:{
          isShowTabbar:true
        }
    },
    {
      name:'我的个人资料',
      component:EditMyData ,
      path:'/edit/mydata',
      meta:{
          isShowTabbar:true
        }
    },
    {
      name:'例子',
      component:example ,
      path:'/example',
      meta:{
          isShowTabbar:true
        }
    },
    {
      name:'昵称编辑',
      component:NickEdit ,
      path:'/edit/nick',
      meta:{
          isShowTabbar:true
        }
    },
    {
      name:'账号管理',
      component:AccountAdmin ,
      path:'/account/admin',
      meta:{
          isShowTabbar:true
        }
    },
];

const router = new VueRouter({
    routes:routes,
    mode:'history'
});

router.beforeEach((to,from,next)=>{
    // console.log(to)
    // let white_list = ['/unloginprofile','/profile'];
    // if(white_list.indexOf(to.path)!==-1){
    //
    //
    // }

    next();
});
export default router;