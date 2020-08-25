import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        histories:[]
    },
    getters:{
        getHistories: state => {
            return state.histories
        }
    },
    mutations:{
        setHistories(state,newHistories){
            state.histories = newHistories
        }
    }
})

export default store