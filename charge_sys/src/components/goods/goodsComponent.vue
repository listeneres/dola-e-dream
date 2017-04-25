<template>
	<div id="listens">
    <thead>
      <tr>
       <th><input type="checkbox" @click='all()' /></th>
       <th  v-for="(value,key) in datas[0]">{{key}}</th>
     </tr>
   </thead>
   <tbody>
    <tr v-for="(value,key1) in datas">
      <td><input type="checkbox" /></td>
      <td v-for='(name,key2) in value' :name=name>{{name}}</td>
    </tr>
  </tbody>

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

    methods:{	
      ...mapActions(["all"]),
      all:function(){
                    try {
                         this.$store.dispatch("all" )
                     }catch(error) {
                         alert(error)
                     }
                },
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
