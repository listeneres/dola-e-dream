import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import actions from '../actions/action.js'
//import mutations from '../mutations/lis-mutations.js'
import mutations from '../mutations/login-mutations.js'
//import getters from '../getters/lis-getters.js'
import getters from '../getters/login-getters.js'
Vue.use(Vuex)
const state = {
	random:'',
	phoneNum:'',
	psw:'',
	loginData:'',
};
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
