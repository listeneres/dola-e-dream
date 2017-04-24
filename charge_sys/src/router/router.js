import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue'
//yw
import register from '../components/register/registerComponent.vue';
import login from '../components/login/loginComponent.vue';
import goods from '../components/goods/goodsComponent.vue';
Vue.use(VueRouter)
var router = new VueRouter({
	routes: [{
		path: '/',
		component: App,
		children: [{
				path: '/register',
				component: register
			},
			{
				path: '/login',
				component: login
			},{
				path:'/goods',
				component:goods
			}
		]

	}]

})

export default router