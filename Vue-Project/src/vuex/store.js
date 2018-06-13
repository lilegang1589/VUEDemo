import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)

// 应用初始状态
const state = {    
    inactive: {
      timer: null,
      time: 20*60
    },
}
// 定义所需的 mutations
const mutations = {    
    RESET_INACTIVE_TIME(state) {
      state.inactive.time = 20*60;
      if(state.inactive.timer) window.clearTimeout(state.inactive.timer);
      state.inactive.timer = window.setTimeout(function() {
        state.inactive.time =60;
        state.inactive.timer = window.setInterval(function() {
          state.inactive.time--;          
        }, 1000);
      }, (state.inactive.time - 60)*1000);
    },
   
}
// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
