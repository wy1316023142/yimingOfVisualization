import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        eventFlag: '', //工程征地面积图饼
        peopleFlag:'' //受影响人口圆环

    },
    mutations: {
        setEventFlag(state, data) {
            state.eventFlag = data;
        },
        setPeopleFlag(state, data) {
            state.eventFlag = data;
        }
    },
    actions: {
        //工程征地面积图饼
        controlEventFlagAction(context, data) {
            context.commit('setEventFlag', data);
        }
    },
    getters: {
        getEventFlag(state) {
            return state.eventFlag;
            console.log(state.eventFlag, "111111");
            
        },
        getPeopleFlag(state) {
            return state.eventFlag;

        },
        
    }
})
