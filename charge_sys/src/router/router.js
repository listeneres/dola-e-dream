import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue'
//yw
//import login from '../components/login/loginComponent.vue';
import goods from '../components/goods/goodsComponent.vue';
Vue.use(VueRouter)
var router = new VueRouter({
	routes: [{
		path: '/',
		component: App,
		children: [
			{
				path:'/',
				component:goods
			}
		]

	}]

})

export default router