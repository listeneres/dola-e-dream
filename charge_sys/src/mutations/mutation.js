   import * as types from '../mutations_types/mutations_type.js';
   import $ from 'jquery'
   export default  {
        [types.RANDER](state){
           var url = 'http://localhost/dola-e-dream/charge_sys/serverTool/PHP/tw.php';  
          $.ajax(url, {  
            type:'GET', 
            async:false,
//          dataType:"jsonp",
//          jsonpCallback:'a',
            success:function(data) { 
                 var data =JSON.parse(data)
                 state.datas=data
            }
           })
        },
        [types.ADDGOODS](state){
          // console.log($('.model')[0])
          $('.model')[0].style.display="block";
          var url = 'http://localhost/dola-e-dream/charge_sys/serverTool/PHP/getMessage.php';  
          $.ajax(url, {  
            type:'GET', 
            async:false,
//          dataType:"jsonp",
//          jsonpCallback:'a',
            success:function(data) { 
                 var data =JSON.parse(data)
                 state.Mdata=data
            }
           })

        },
        [types.SAVE](state){
            
            var data='';
            
            for(var i=0;i<= $('.input-group').length-1;i++) {
              data = data +'"'+$('.input-group').eq(i).find('input').val()+'"'+','
            }
            data ='('+ data+')'
            data = data.replace(',"",)',')')
           
           var r= confirm('是否确定添加以下数据')
           if(r){
             $.ajax({
            type:"post",
            url:types.baseUrl + '/dola-e-dream/charge_sys/serverTool/PHP/insert.php',
            dataType:"json",
            async:false,
            data:{'data':data},
            success:function(response){ 
           } 
        });
            alert("你添加以下数据成功!")
              location.reload() 
            
           }else{
            alert("你取消了添加以下数据")
           }


        },
        [types.DOSEARCH](state,value){
            var url = 'http://localhost/dola-e-dream/charge_sys/serverTool/PHP/tw.php';  
          $.ajax(url, {  
            type:'GET', 
            async:false,
            data:value,
//          dataType:"jsonp",
//          jsonpCallback:'a',
            success:function(data) { 
                 var data =JSON.parse(data)
                 state.datas=data
            }
           })
        },
   }