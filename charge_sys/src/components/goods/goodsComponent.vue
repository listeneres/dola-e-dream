<template>
	<div id="listen">
        <tr>
        	<td><input type="checkbox" /></td>
        	<td  v-for="(value,key) in datas[0]">{{key}}</td>
        </tr>
        <tr>
        	<td><input type="checkbox" /></td>
            <td v-for="(value,key) in datas[0]">{{value}}</td>
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

    	//增
//  	    addGoods(){
//  	    	this.$store.dispatch("addGoods")
//  	    },
//  	    delGoods(){
//  	    	this.$store.dispatch("delGoods")
//  	    }
    	//删
//  	    delGoods(){}
    	//查
//  	    checkGoods(){}
    	//改
//  	    changeGoods(){}
    },
    computed: mapGetters(['datas']),
    created(){
       	        try {
					this.$store.dispatch("render")
				}catch(error) {
                     alert(error)
                 }
       },
 }
</script>

<style lang="css">
@import url("./goodsComponent.css");
</style>
