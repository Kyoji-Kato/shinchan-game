<template>
  <div>
    <!-- <button class="route" v-bind:class="{'btn-hidden':hiddenBtn}" v-on:click="history">成績</button>&emsp;&emsp; -->
    <button class="route" v-bind:class="{'btn-hidden':hiddenBtn}" v-on:click="kakin">課金</button>
    <br><br>
    <Gamepage v-show="isPage" @gamestart="gamestart" :isKakin="isKakin"/>
    <Gameactive v-show="isActive" ref="gameactive"   @gameend="gameend" :isKakin="isKakin"/>
  </div>
</template>

<script>
import Gamepage from '../components/Gamepage.vue'
import Gameactive from '../components/Gameactive.vue'
import axios from 'axios';
export default {
  name: 'Mainpage',
  components:{
      Gamepage,
      Gameactive,
  },
  data:function(){
    return {
      isPage:true,
      isActive:false,
      isKakin:this.$route.query.isKakin,
      hiddenBtn:false
    }
  },
  mounted:function(){
    const url = "https://ga4r51nfbj.execute-api.us-east-2.amazonaws.com/get-histories"
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
  },
  methods:{
    gamestart:function(){
      this.isPage=false,
      this.isActive=true,
      this.hiddenBtn=true,
      this.$refs.gameactive.calDistance()
    },
    gameend:function(){
      this.isPage=true,
      this.isActive=false,
      this.hiddenBtn = false
    },
    history:function(){
      this.$router.push('/history')
    },
    kakin:function(){
      this.$router.push('/kakin')
    }
  }
}
</script>

<style>
.route{
  background-color:orange;
}
.route:hover{
  background-color:orange;
  opacity:0.7;
  transform:translate(-2px,-2px);
  box-shadow: 2px 2px 0px 0px black;
}
.btn-hidden{
  visibility:hidden;
}
</style>
