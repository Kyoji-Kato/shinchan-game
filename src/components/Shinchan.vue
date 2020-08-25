<template>
    <div>
        <div class="shinchan-later" v-bind:class="{'kakin-shinchan':iskakin}">
            <div class="shinchan-first" v-bind:class="{'kakin-shinchan':iskakin}">
                <img class="shinchan-game"  id="shinchanp" src="../assets/shinchan-game.png">
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    name:"Shinchan",
    props:{
         shinchanP:Number,
         iskakin:Boolean
    },
    data:function(){
        return{
            shinchanTimer:0
        }
    },
    methods:{
        shinchanPosition:function(){
            var shinchanp = document.querySelector('#shinchanp').getBoundingClientRect().left ;
            this.$emit('update:shinchanP',shinchanp)
        },
        calShinchanDistance:function(){
            this.shinchanTimer = setInterval(this.shinchanPosition,100);
        },
        finishShinchan:function(){
            console.log("hihi")
            clearInterval(this.shinchanTimer)
        }
    }
}
</script>

<style scoped>
.shinchan-game{
    z-index:3;
    position: relative;
    left:0;
    top:0;
    width:50px;
    height:auto; 
    animation:shinchan-rotate1 20s 2s,shinchan-rotate2 10s 22s;
    /* animation-name:shinchan-rotate;
    animation-duration:20s;
    animation-delay:2s; */
}

@keyframes shinchan-rotate1{
    0%{
        transform:scale(1,1)
    }0.01%{
        transform:scale(-1,1) 
    }10%{
        transform:scale(-1,1) 
    }24.99%{
        transform:scale(-1,1)
    }25%{
        transform:scale(1,1) 
    }35%{
        transform:scale(1,1)
    }50%{
        transform:scale(1,1)
    }50.01%{
        transform:scale(-1,1)
    }55%{
        transform:scale(-1,1) 
    }55.01%{
        transform:scale(-1,1)
    }90%{
        transform:scale(-1,1)
    }90.01%{
        transform:scale(1,1)
    }100%{
        transform:scale(1,1) 
    }
}
@keyframes shinchan-rotate2{
    0%{
        transform:scale(1,1)
    }0.01%{
        transform:scale(-1,1)
    }10%{
        transform:scale(-1,1)
    }40%{
        transform:scale(-1,1)
    }40.1%{
        transform:scale(1,1)
    }100%{
        transform:scale(1,1)
    }
}
.shinchan-first{
    position:absolute;
    left:0;
    top:0;
    animation-name:shinchan-action;
    animation-duration: 20s;
    animation-delay:2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}
@keyframes shinchan-action{
    0%{
        transform:translateX(0) 
    }0.01%{
        transform:translateX(0) 
    }10%{
        transform:translateX(-150px) /*風間くん*/
    }10.1%{
        transform:translateX(-150px)
    }25%{
        transform:translateX(-150px)
    }35%{
        transform:translateX(150px) /*ボーちゃん*/
    }50%{
        transform:translateX(150px)
    }55%{
        transform:translateX(0px) /*まさおくんストップ */
    }90%{
        transform:translateX(0px)
    }100%{
        transform:translateX(180px) /*ぶりぶりざえもん無視 */
    }
}
.shinchan-later{
    position:absolute;
    left:0;
    top:0;
    animation-name:shinchan-later-action;
    animation-duration: 10s;
    animation-delay:22s;
    animation-timing-function: linear;
    animation-fill-mode:forwards;
}
@keyframes shinchan-later-action{
    0%{
        transform:translateX(0)
    }10%{
        transform:translateX(-300px)
    }40%{
        transform:translateX(-300px)
    }100%{
        transform:translateX(-200px)
    }
}
.kakin-shinchan{
    animation:none;
}
</style>