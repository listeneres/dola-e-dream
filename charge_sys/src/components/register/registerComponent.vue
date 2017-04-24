<template>
    <div>	
	  <button>yangwei</button>
	</div>
</template>
<!--<script type="text/javascript">
	import { mapGetters, mapActions} from 'vuex'
	import $ from 'jquery'
//	import api from '../../../js/api.js'
	export default {
		data: function(){
			console.log(this)
			return {
//				phone:'',
//				code: '',
//				psw:'',
//				check:'',
//				num:'',
//				value:'手机号不能为空！'
				}
		},
//      computed:{
//       arrString:function(){
//       	if(this.$store.state.random==''){
//       		this.$store.dispatch("random")
//       	}
//       	return this.$store.state.random
//       }
//     },
		methods:{
			...mapActions(["register"]),
            register() {
                try {
                  this.$store.dispatch("register")              
                 }catch(error) {
                     alert(error)
                 }
            }
		}
	}
</script>-->
