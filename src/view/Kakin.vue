<template>
    <div>
        <button class="route" v-on:click="game">戻る</button>
        <br><br>
        <div class="gamepage">
            <h1 class="gametitle">課金しますか？</h1>
            <img src="../assets/kakin.png">
            <div class="left">
                <a v-on:click="kakinOK">する</a>
                <a v-on:click="kakinNG">しない</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"kakin",
    methods:{
        game:function(){
            this.$router.push({
                path:"/main",
                query:{
                    isKakin:false
            }})
        },
        kakinOK:function(){
            this.$router.push({
                path:"/main",
                query:{
                    isKakin:true
                }
            })
        },
        kakinNG:function(){
            this.$router.push({
                path:"/main",
                query:{
                    isKakin:false
            }})
        }
    }
}
</script>

<style scoped>
.gametitle{
    animation:none;
}
img{
    width:auto;
    height:70%;
}
.left{
    padding-left:40px;
    text-align: left;
    color:black;
}
a{
    font-size:150%;
    margin-right:20px;
}
a:hover{
    opacity:0.6;
    text-decoration: underline;
    cursor:pointer;
}
</style>
