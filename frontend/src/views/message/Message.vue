<template>
    <div>
        this is a message page
    </div>
</template>

<script>
    export default {
        name: "Message",

        sockets: {
            connect() {
                console.log(111111111111)

                // this.$lib.logInfo("连接socket io服务器成功");
            },
            message(msg) {
                console.log(msg)
                this.$lib.logInfo("接收到服务端的消息：" + msg);
            },
            // focus:data=>{
            //     console.log(data);
            // }
        },
        activated() {
            if (this.$socket != null && !this.$socket.connected) {
                this.$socket.connect();
            }
        },
    }
</script>

<style scoped>

</style>