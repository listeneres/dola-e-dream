<template>
	<div id="listen">
		<input type="button" value="addGoods" @click="addGoods"/>
        <tr>
        	<td><input type="checkbox" /></td>
        	<td>图片</td>
        	<td>名称</td>
        	<td>类别</td>
        	<td>规格</td>
        	<td>单位</td>
        	<td>库存</td>
        	<td>成本</td>
        	<td>批发价</td>
        	<td>库存额</td>
        	<td>创建人</td>
        	<td>创建事件</td>
        	<td>修改时间</td>
        	<td>标签</td>
        </tr>
        <tr>
            <td></td>
        </tr>
	</div>
</template>

<script type="text/javascript">
  import $ from 'jquery'
  import {mapGetters, mapActions} from "vuex";
  export default {
    data: function(){
      return {
      	value:1
      }
    },
//  computed: mapGetters(["findDetailData"]),
    methods:{	
    	...mapActions(["addGoods"]),
    	//增
    	    addGoods(){
    	    	this.$store.dispatch("addGoods",message)
    	    }
    	//删
//  	    delGoods(){}
    	//查
//  	    checkGoods(){}
    	//改
//  	    changeGoods(){}
    }
 }
</script>

<style lang="css">
@import url("./userlist.css");
</style>
