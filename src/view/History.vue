<template>
    <div>
        <button class="route" v-on:click="game">戻る</button>
        <br><br>
        <div class="gamepage">
            <p class="gametitle">成績上位ランキング</p>
            <table border="1">
                <tr>
                    <th>順位</th>
                    <th class="history-name">名前</th>
                    <th>点数</th>
                    <th class="history-name">日時</th>
                </tr>
                <tr v-for="(history,index) in sortHistories" v-bind:key="index">
                    <td>{{index+1}}</td>
                    <td class="history-name">{{history.name}}</td>
                    <td>{{history.point}}</td>
                    <td class="history-name">{{history.time}}</td>
                </tr>
            </table>
            <br>
            <button v-on:click="allDelete">全消去</button><br>
            <a style="color:black">name</a> <input v-model="addName"><br>
            <a style="color:black">point</a> <input v-model="addPoint"><br>
            <button v-on:click="increase">追加</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"history",
    data:function(){
        return {
            newHistory:{name:"ダウンタウン",grade:2,point:30},
            addName:"",
            addPoint:""
        }
    },
    computed:{
        sortHistories:function(){
            var array = this.$store.getters.getHistories
            array.sort(
                function(a,b){
                    return b.point-a.point
                }
            );
            array = array.slice(0,5)
            return array
        }
    },
    methods:{
        game:function(){
            this.$router.push("/main")
        },
        increase:function(){
            var date = new Date();
            var hours = ""
            var minutes = ""
            if(String(date.getHours()).length==1){
                hours = "0"+date.getHours()
            }else if(String(date.getHours()).length==0){
                hours = "00"
            }else{
                hours = date.getHours()
            }
            if(String(date.getMinutes()).length==1){
                minutes = "0"+date.getMinutes()
            }else if(String(date.getMinutes()).length==0){
                minutes = "00"
            }else{
                minutes = date.getMinutes()
            }
            const now = date.getMonth() + "/" + date.getDate() + " " + hours + ":" + minutes
            var maxId = 0
            for(var gethistory of this.$store.getters.getHistories){
                if(gethistory.id > maxId){
                    maxId = gethistory.id
                }
            }
            const url = "https://s69yjp3wy3.execute-api.us-east-2.amazonaws.com/add-history"
            axios.post(url,{
                id:maxId+1,
                name:this.addName,
                point:this.addPoint,
                time:now
            })
            .then(response => {
                this.$store.commit("setHistories",response.data.body.Items);
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        allDelete:function(){
            const url = "https://ttj57mlea0.execute-api.us-east-2.amazonaws.com/delete-all-histories"
            var newHistories = []
            axios.get(url)
            .then(function (response) {
                newHistories = response.data.body.Items;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(()=>{
                this.$store.commit("setHistories",newHistories);
            })
        }
    }
}
</script>

<style scoped>
.gametitle{
    animation:none;
    border-bottom:2px gold solid;
}
table{
    margin-left:auto;
    margin-right:auto;
    color:#2c3e50;
}
tr:nth-child(2){
    background-color:gold;
    font-size:120%;
}
tr:nth-child(3){
    background-color:silver;
    font-size:110%;
}
th:nth-child(1){
    width:10%
}
th:nth-child(2){
    width:30%;
}
th:nth-child(3){
    width:10%
}
th:nth-child(4){
    width:30%;
}
.history-name{
    text-align:left;
    padding-left:5px;
}
.none-border{
    border:none;
}
</style>
