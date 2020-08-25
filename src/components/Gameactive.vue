<template>
    <div class="gamepage" >
        <img class="kusa" src="../assets/kusa.png">
        <img class="kusa" src="../assets/kusa.png">
        <div>
            <h1 class="gametitle">オ</h1>
            <h1 class="gametitle">ラ</h1>
            <h1 class="gametitle">と</h1>
            <h1 class="gametitle">あ</h1>
            <h1 class="gametitle">そ</h1>
            <h1 class="gametitle">ぶ</h1>
            <h1 class="gametitle">ゾ</h1>
        </div>   
        <div class="gamearea">
            <div class="gameclear" v-bind:class="{'is-gameclear':isGameOver}" >GAME CLEAR</div>
            <div class="isGameOver-before" v-bind:class="{'gameover':isGameOver}" >GAME OVER</div>
            <img class="isGameOver-before" v-bind:class="{'shinchan-gameover':isGameOver}" src="../assets/shinchan-gameover.png">
            <img class="misae-clear" v-bind:class="{'is-gameclear':isGameOver}" src="../assets/character/misae.png">
            <Character class="character" :iskakin="iskakin"/>
            <div class="gamemessage">しんちゃん：<br><Comments :iskakin="iskakin"/></div>
            <Shinchan class="shinchan" :shinchanP.sync="shinchanP" ref="child" :iskakin.sync="iskakin"/>
            <div class="shiro-back-fast" v-bind:class="{'back-fast':isBackFast}">
                <div class="shiro-back" v-bind:class="{'back':isBack}" >
                    <div class="shiro-go-fast" v-bind:class="{'go-fast':isGoFast}">
                        <div class="shiro-go" v-bind:class="{'go':isGo}">
                            <img class="shiro" id="shirop" v-bind:class="{'rotate':rotateShiro}" src="../assets/shiro-game.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="finishbtn-posi">
            <button class="mainbtn" @click="finish">終了</button>
        </div>
        <div class="mainbtn-posi">
            <img class="gamebtn" v-on:click="backFast" src="../assets/button/back-fast.png">
            <img class="gamebtn" v-on:click="back" src="../assets/button/back.png">
            <img class="gamebtn" v-on:click="stop" src="../assets/button/stop.png">
            <img class="gamebtn" v-on:click="go" src="../assets/button/go.png">
            <img class="gamebtn" v-on:click="goFast" src="../assets/button/go-fast.png">
        </div>
        <br>
    </div>
</template>
<script>
import Character from "./Character.vue"
import Shinchan from "./Shinchan.vue"
import Comments from "./Comments.vue"
export default {
    name: "Gameactive",
    components:{
        Character,
        Shinchan,
        Comments
    },
    props:{
        isKakin:String
    },      
    data:function(){
        return {
            isGoFast:false,
            isGo:false,
            isBack:false,
            isBackFast:false,
            isGameOver:false,
            rotateShiro:false,
            shiroP:0,
            shinchanP:0,
            distance:0,
            distanceTimer:0
        }
    },
    computed:{
        iskakin:function(){
            if(this.isKakin=="true"){
                return true
            }else{
                return false
            }
        }
    },
    methods:{
        goFast:function(){
            this.isGoFast=true,
            this.isGo=false,
            this.isBack=false,
            this.isBackFast=false,
            this.rotateShiro=false
        },
        go:function(){
            this.isGoFast=false,
            this.isGo=true,
            this.isBack=false,
            this.isBackFast=false,
            this.rotateShiro=false
        },
        stop:function(){
            this.isGo=false,
            this.isGoFast=false,
            this.isBack=false,
            this.isBackFast=false
        },
        back:function(){
            this.isGoFast=false,
            this.isGo=false,
            this.isBack=true,
            this.isBackFast=false,
            this.rotateShiro=true
        },
        backFast:function(){
            this.isGoFast=false,
            this.isGo=false,
            this.isBack=false,
            this.isBackFast=true,
            this.rotateShiro=true
        },
        shiroPosition:function(){
            this.shiroP = document.querySelector('#shirop').getBoundingClientRect().left ;
            this.distance = this.shinchanP - this.shiroP
            console.log(this.distance)
            if(this.distance<-80 ||this.distance>80){
                this.isGameOver = true
                clearInterval(this.distanceTimer)
            }
        },
        calDistance:function(){
            this.$refs.child.calShinchanDistance()
            this.distanceTimer = setInterval(this.shiroPosition,100);
        },
        finish:function(){
            this.isGameOver = false
            this.isGoFast = false
            this.isGo = false
            this.isBack = false
            this.isBackFast = false
            this.rotateShiro = false
            this.distance = 0
            this.shiroP = 0,
            this.shinchanP = 0,
            this.$refs.child.finishShinchan()
            clearInterval(this.distanceTimer)
            this.$emit("gameend")
        }
    }
}
</script>
<style scoped>
.kusa{
    position:absolute;
    top:220px;
    left:0;
    z-index:1;
    width:451px;
}
.gamepage{
    overflow:hidden;
}
.gamearea{
    width:100%;
    height:250px;
    background-color: white;
}
.gameclear{
    position:relative;
    z-index:4;
    left:0px;
    top:80px;
    font-size:400%;
    animation-name:game-clear;
    animation-delay:29s;
    animation-duration:3s;
    animation-fill-mode: backwards;
}
.is-gameclear{
    display:none;
}
.isGameOver-before{
    visibility:hidden;
}
.gameover{
    position:relative;
    z-index:4;
    left:0px;
    top:100px;
    font-size:400%;
    color:black;
    visibility:visible;
}
.misae-clear{
    position:absolute;
    z-index:3;
    width:200px;
    left:450px;
    top:185px;
    animation-name:misae-action;
    animation-duration: 1s;
    animation-delay:32s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
}
.shinchan-gameover{
    position:absolute;
    z-index:3;
    width:200px;
    left:450px;
    top:185px;
    animation-name:misae-action;
    animation-iteration-count: 1;
    animation-fill-mode: both;
    animation-timing-function: linear;
    visibility:visible;
}
@keyframes misae-action{
    0%{
        transform:translateX(0)
    }100%{
        transform:translateX(-130px)
    }
}
@keyframes game-clear{
    0%{
        opacity:0
    }100%{
        opacity:1
    }
}
.gamemessage{
    z-index:2;
    position:absolute;
    top:120px;
    left:50%;
    transform:translate(-50%,0);
    width:200px;
    height:50px;
    border-radius:5%;
    background-color: orange;
    color:white;
    text-align: left;
    padding-left:20px;
}
.character{
    z-index:2;
    position:absolute;
    top:270px;
    left:0;
}
.shinchan{
    z-index:2;
    position: absolute;
    top: 260px;
    left:200px;
}
.shiro-back-fast{
    z-index:2;
    position:absolute;
    top:0px;
    left:0px;
    animation-name:back-active;
    animation-timing-function: linear; 
    animation-iteration-count: infinite;
    animation-duration:25s;
    animation-play-state:paused;
}
.shiro-back{ 
    z-index:2;
    position:absolute;
    top:0px;
    left:0px;
    animation-name:back-active;
    animation-timing-function: linear; 
    animation-iteration-count: infinite;
    animation-duration:50s;
    animation-play-state:paused ;
}
.shiro-go-fast{
    z-index:2;
    position:absolute;
    top:0px;
    left:0px;
    animation-name:go-active;
    animation-timing-function: linear; 
    animation-iteration-count: infinite;
    animation-duration:25s;
    animation-play-state:paused;
}
.shiro-go{
    z-index:2;
    position: absolute;
    top:0px;
    left:0px;
    animation-name:go-active;
    animation-timing-function: linear; 
    animation-iteration-count: infinite;
    animation-duration:50s;
    animation-play-state:paused;
}
.shiro{
    z-index:3;
    position:absolute;
    top:300px;
    left:220px;
    width:40px;
    height:40px;
}
.rotate{
    transform:scale(-1,1)
}
.go-fast{  
    animation-play-state:running; 
}
.go{
    animation-play-state:running;
}
.back{
    animation-play-state:running;
}
.back-fast{
    animation-play-state:running;
}
.finishbtn-posi{
    position:absolute;
    top:20px;
    left:380px;
}
.mainbtn{
    animation: none;
}
@keyframes go-active{
    0%{
        transform:translateX(0);
    }100%{
        transform:translateX(4500px);
    }
}
@keyframes back-active{
    0%{
        transform:translateX(0);
    }100%{
        transform:translateX(-4500px);
    }
}

.gamebtn{
    width:30px;
    height:auto;
    margin-left: 10px;
    margin-right:10px;
}
.gamebtn:hover{
    opacity:0.6;
}

</style>