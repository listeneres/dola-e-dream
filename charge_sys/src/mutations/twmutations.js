import * as types from '../mutations_types/mutations_type.js';
import $ from 'jquery';
export default {
    [types.DELGOODS](state){
        var goodsid='';
     for(var i=0;i<= $('tbody').find("input:checkbox:checked").closest('tr').length-1;i++) {
       var goodsId = goodsId +','+ $('tbody').find("input:checkbox:checked").closest('tr').eq(i).find('td').eq(1).html()
        
     } 
     goodsId ='('+ goodsId.replace('undefined,','')+')'
        console.log( goodsId)
        
        var r= confirm('是否确定删除以下数据')
           if(r){
              $.ajax({
            type:"post",
            url:types.baseUrl + '/dola-e-dream/charge_sys/serverTool/PHP/delgoods.php',
            dataType:"json",
            async:false,
            data:{'goodsid':goodsId},
            success:function(response){ 
           } 
        });
            alert("你删除以下数据成功!")
              location.reload() 
            
           }else{
            alert("你取消了删除以下数据")
           }

    },    

    [types.ALL](state){
        if($( event.target).is(':checked')  ){
            $('tbody').find("input:checkbox").prop("checked",true);
        }else{
            $('tbody').find("input:checkbox").prop("checked",false);
        }

    }
}    