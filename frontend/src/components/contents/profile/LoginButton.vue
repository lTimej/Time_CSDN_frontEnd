<template>
    <div class="login-button">
        <router-link to="/login/phone">
            <div class="login-button-entry">
                <span>登录</span>
            </div>
        </router-link>
        <div class="login-button-imply">
            <span>登陆后，随时收藏、关注</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginButton"
    }
</script>

<style scoped>
    .login-button{
        text-align: center;
    }
    .login-button a{
        text-decoration: none;
    }
    .login-button-entry{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: rgba(255, 0, 0, 0.79);
        margin: 20px auto auto auto;
        line-height: 100px;
    }
    .login-button-entry span{
        font-size: 20px;
        color: #ffffff;
        font-weight: 600;
    }
    .login-button-imply{
        margin: 30px;
        font-size: 18px;
    }
</style>