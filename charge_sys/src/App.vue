<template>
	<div id="box">
		<h1>hello world1</h1>
		<ul>
			<li>
				<router-link to="/">
			        123
		        </router-link>
			</li>
			<li>
				<router-link to="/register">
			       456
		        </router-link>
			</li>
			<li>
				<router-link to="/login">
			        789
		        </router-link>
			</li>
			<li>
				<router-link to="/goods">
			        GOODS
		        </router-link>
			</li>
			
		</ul>
		<div id="content">
	       <router-view></router-view>
	    </div>
	</div>
</template>
<!--<script type="text/javascript">-->
<!--//export default {
//
//  }-->
<!--</script>-->
<style lang="css">
	@import url("./App.css");
</style>