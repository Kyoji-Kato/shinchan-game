<template>
    <div>
        <img class="kazama" src="../assets/character/kazama.png">
        <img class="bo" src="../assets/character/bo.png">
        <img class="masao" src="../assets/character/masao.png">
        <img class="buriburi" src="../assets/character/buriburi.png">
        <img class="akushon" src="../assets/character/akushon.png">
        <img class="kakin-nanako" v-if='iskakin' src="../assets/character/nanako.png">
        <img class="nanako" v-else src="../assets/character/nanako.png">       
    </div>
</template>
<script>
export default {
    name:"Character",
    props:{
        iskakin:Boolean
    },
}
</script>

<style>
.kazama{
    position:absolute;
    width:60px;
    left:-50px;
    animation-name:show-action;
    animation-duration: 5s;
    animation-delay:1s;
    animation-iteration-count: 1;
}
.bo{
    position:absolute;
    width:40px;
    left:450px;
    animation-name:reshow-action;
    animation-duration: 5s;
    animation-delay:6s;
    animation-iteration-count: 1;
}
.masao{
    position:absolute;
    width:40px;
    left:-40px;
    animation-name:show-action;
    animation-duration: 3s;
    animation-delay:11s;
    animation-iteration-count: 1;
}
.buriburi{
    position:absolute;
    width:50px;
    left:-50px;
    animation-name:buriburi-action;
    animation-duration:10s;
    animation-delay:14s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
}
.akushon{
    position:absolute;
    width:80px;
    left:-80px;
    top:-50px;
    animation-name:akushon-action;
    animation-duration:5s;
    animation-delay:21s;
    animation-iteration-count: 1;
}
.nanako{
    position:absolute;
    width:80px;
    left:450px;
    top:-50px;
    animation-name:nanako-action;
    animation-duration:5s;
    animation-delay:27s;
    animation-iteration-count: 1;
    animation-fill-mode:forwards
}
.kakin-nanako{
    position:absolute;
    width:80px;
    left:240px;
    top:-50px;
}

@keyframes show-action{
    0%{
        transform:translateX(0)
    }30%{
        transform:translateX(50px)
    }70%{
        transform:translateX(50px)
    }100%{
        transform:translateX(0)
    }
}
@keyframes reshow-action{
    0%{
        transform:translateX(0)
    }30%{
        transform:translateX(-50px)
    }70%{
        transform:translateX(-50px)
    }100%{
        transform:translateX(0)
    }
}
@keyframes buriburi-action{
    0%{
        transform:translateX(0)
    }10%{
        transform:translateX(50px)
    }40%{
        transform:translateX(420px)
    }40.01%{
        transform:translateX(430px) scale(-1,1)
    }69.99%{
        transform:translateX(50px) scale(-1,1)
    }70%{
        transform:translateX(50px)
    }100%{
        transform:translateX(500px)
    }
}
@keyframes akushon-action{
    0%{
        transform:translateX(0)
    }30%{
        transform:translateX(100px)
    }70%{
        transform:translateX(100px)
    }100%{
        transform:translateX(0)
    }
}
@keyframes nanako-action{
    0%{
        transform:translateX(0)
    }100%{
        transform:translateX(-220px)
    }
}
</style>