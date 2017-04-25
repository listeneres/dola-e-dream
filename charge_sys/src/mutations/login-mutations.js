import * as types from '../mutations_types/mutations_type.js';
import $ from 'jquery';
import {baseUrl} from '../js/baseURL.js'
   export default {
   	    [types.CHECKLOGIN](state,value){
   	    	console.log(value)
            $.ajax({
            	type:'GET',
            	url:baseUrl+"/dola-e-dream/charge_sys/serverTool/Login/Login.php",
            	async:true,
            	dataType:"jsonp",
            	jsonpcallback:'callback',
            	data:{"names":value.userName,"psw":value.psw},
            	success:function(res){
            		state.loginData = JSON.parse(res)
            		console.log(res)
            		if(res==null){
            			console.log(987)
            		}
					return state
            	}
            });
        }
  }    
