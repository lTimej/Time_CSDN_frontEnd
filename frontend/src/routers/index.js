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

const routes = [
    {
      name:'首页',
      component:Home ,
      path:'/'
    },
    {
      name:'首页',
      component:Home ,
      path:'/home'
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
];

const router = new VueRouter({
    routes:routes,
    mode:'history'
});

export default router;