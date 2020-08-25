<template>
    <div class="gamepage">
        <div>
            <h1 class="gametitle">オ</h1>
            <h1 class="gametitle">ラ</h1>
            <h1 class="gametitle">と</h1>
            <h1 class="gametitle">あ</h1>
            <h1 class="gametitle">そ</h1>
            <h1 class="gametitle">ぶ</h1>
            <h1 class="gametitle">ゾ</h1>
        </div>   
        <div class="line"></div>   
        <br><br>
        <div class="kakinMode-before" v-bind:class="{'kakinMode':iskakin}"> 課金モード</div>
        <img class="shinchan" src="../assets/shinchan-home.png">
        <img class="shiro" src="../assets/shiro-home.png">
        <br>
        <div class="mainbtn-posi"><button class="mainbtn" @click="$emit('gamestart')">スタート</button></div>
    </div>
</template>
<script>
export default {
    name: "Gamepage",
    props:{
        isKakin:String
    },
    computed:{
        iskakin:function(){
            if(this.isKakin=="true"){
                console.log("true")
                return true
            }else{
                console.log("false")
                return false
            }
        }
    }
}
</script>
<style>
.gamepage{
    width:450px;
    height:400px;
    background:#ffffe5;
    margin-right:auto;
    margin-left:auto;
    color:gold;
    position:relative;
}
.gametitle{
    font-size:200%;
    display:inline-block;
    font-weight: bold;
    animation-name:title-active;
    animation-duration:2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
}
.gametitle:nth-child(1){
    animation-delay: 0.1s;
}
.gametitle:nth-child(2){
    animation-delay: 0.2s;
}
.gametitle:nth-child(3){
    animation-delay: 0.3s;
}
.gametitle:nth-child(4){
    animation-delay: 0.4s;
}
.gametitle:nth-child(5){
    animation-delay: 0.5s;
}
.gametitle:nth-child(6){
    animation-delay: 0.6s;
}
.gametitle:nth-child(7){
    animation-delay:0.7s;
}
.line{
    width:250px;
    height:3px;
    background-color:gold;
    margin-right:auto;
    margin-left:auto;
}

@keyframes title-active{
    0%{
        transform:translateY(0); 
    }70%{
        transform:translateY(20px);
    }100%{
        transform:translateY(0);
    }
}
.kakinMode-before{
    visibility: hidden;
}
.kakinMode{
    position:absolute;
    top:100px;
    left:270px;
    color:black;
    visibility: visible;
}

.shinchan{
    width:auto;
    height:150px;
}
.shiro{
    width:auto;
    height:100px;
}
.mainbtn-posi{
    position:absolute;
    width:100%;
    top:370px;
    left:50%;
    transform:translate(-50%,-50%);
}
.mainbtn{   
    background-color: gold;
    animation-name:button-active;
    animation-iteration-count: infinite;
    animation-duration:2s;
    animation-delay:0s;
    animation-timing-function: ease;   
}
@keyframes button-active{
    0%{
        transform:scale(1);
    }
    100%{
        transform:scale(1.3)
    }
}
.mainbtn:hover{
    /* transform:translate(-2px,-2px);
    box-shadow:2px 2px 4px 0px grey; */
    background-color:orange;
    color:white;
}
</style>