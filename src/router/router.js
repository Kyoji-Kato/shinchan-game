import Vue from "vue";
import Router from "vue-router";
import Mainpage from "../view/Mainpage.vue";
import History from "../view/History.vue";
import Kakin from "../view/Kakin.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/main',           //パスの設定
      component: Mainpage   //表示するコンポーネント
    },
    {
      path: '/history',            
      component: History
    },
    {
      path:'/kakin',
      component: Kakin
    }
  ]
});