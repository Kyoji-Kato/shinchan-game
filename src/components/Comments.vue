<template>
    <div>
        <div v-if="iskakin">
            <a>ななこおねえさん〜</a>
            <a>いまおひま〜〜？</a>
            <a>お茶しない？</a>
            <a>今日のオラかっこいい？</a>
            <a>それほどでも〜〜</a>
            <a>納豆ネギ入れるタイプ？</a>
            <a>ピーマン好き？</a>
            <a>にんじん食べれる？</a>
            <a>オラと気があうかも〜</a>      
        </div>
        <div v-else>
            <a>お散歩行くゾ</a>
            <a>かざまくんだ！</a>
            <a>ボーちゃん〜〜</a>
            <a>まさおくんーー</a>
            <a>...まさおくんかぁ〜</a>
            <a>あ、ぶりぶりざえもんだ</a>
            <a>そろそろ帰ろうかな</a>
            <a>アクション仮面〜〜</a>
            <a>シロ！そろそろ帰るゾ</a>
            <a>ななこおねえさん〜〜</a>
        </div>
    </div>
</template>
<script>
export default {
    name:"Comments",
    props:{
        iskakin:Boolean
    }
}
</script>
<style scoped>
a{
    position:absolute;
    left:30px;
}
a:nth-child(1){
    animation-name:show;
    animation-delay:0s;
    animation-fill-mode: both;
    animation-duration:2s;
}
a:nth-child(2){
    animation-name:show;
    animation-delay:2s;
    animation-fill-mode: both;
    animation-duration:2s;
}
a:nth-child(3){
    animation-name:show;
    animation-delay:7s;
    animation-fill-mode: both;
    animation-duration:2s;
}
a:nth-child(4){
    animation-name:show;
    animation-delay:12s;
    animation-fill-mode: both;
    animation-duration:1s;
}
a:nth-child(5){
    animation-name:show;
    animation-delay:13s;
    animation-fill-mode: both;
    animation-duration:2s;
}
a:nth-child(6){
    animation-name:show;
    animation-delay:15s;
    animation-fill-mode: both;
    animation-duration:2s;
}
a:nth-child(7){
    animation-name:show;
    animation-delay:20s;
    animation-fill-mode: both;
    animation-duration:2s;
}
a:nth-child(8){
    animation-name:show;
    animation-delay:22s;
    animation-fill-mode: both;
    animation-duration:2s;
}
a:nth-child(9){
    animation-name:show;
    animation-delay:25s;
    animation-fill-mode: both;
    animation-duration:4s;
}
a:nth-child(10){
    animation-name:show;
    animation-delay:29s;
    animation-fill-mode: both;
    animation-duration:5s;
}

@keyframes show{
    0%{
        opacity:0
    }10%{
        opacity:1
    }90%{
        opacity:1
    }100%{
        opacity:0
    }
}
</style>