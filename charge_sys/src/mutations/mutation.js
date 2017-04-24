   import * as types from '../mutations_types/mutations_type.js';
   import $ from 'jquery'
   export default {
        [types.RANDER](state){
        	console.log(123)
           var url = 'http://localhost/dola-e-dream/charge_sys/serverTool/PHP/getMessage.php';  
	        $.ajax(url, {  
	        	type:'GET', 
		        async:false,
		//      dataType:"jsonp",
		//      jsonpCallback:'a',
		        success:function(data) {  
		        	 console.log(12)
		             console.log(data)
		             var data =JSON.parse(data)
		             state.datas=data
		        }
           })
        }   
   }