<template>
	<div id="zm_login">
		<div class="wrap">
			<div class="secL">
				<h2>企业通讯与销售管理平台</h2>
				<p>
					融合呼叫中心、CRM、OA办公、企业微信等多<br> 种应用，基于云计算SaaS平台架构，随时随地只<br> 要有网络的地方都可使用，超过20万家企业见证<br> 其安全稳定可靠，值得信赖。
				</p>
			</div>
			<div class="secR">
				<form action="/platform/login.do" method="post" name="frmLogin" id="loginForm">
					<div class="form">
						<h1>登录平台</h1>
						<p>
							请用<span class="f9c442"> 工号@400号码 </span>作为用户名登录
						</p>
						<div class="item clearfix">
							<label for="userNameIpt"></label>
							<input type="text" tabindex="1" id="userNameIpt" name="dtoUserName" notnull="true" info="用户名" placeholder="工号@400号码">
						</div>
						<div class="item itempass clearfix">
							<label for="password"></label>
							<input type="password" tabindex="2" id="password" name="password" notnull="true" info="密码" autocomplete="true" placeholder="请输入密码">
						</div>
						<div class="item validatepic clearfix">
							<img id="Code" src="../../../images/6.png" width="75" height="30" style="display: inline; float: left;">
							<input id="pwdInput" name="dtoUserCode" tabindex="3" class="ipt ipt-y f_l" type="text" style="margin-right: 5px; display: inline;" notnull="true" info="验证码" autocomplete="off" disableautocomplete="">
							<a tabindex="4" class="changepic" id="forGetPassword" href="#">换一张?</a>
						</div>
						<div class="item itemRadio clearfix">
							<input type="checkbox" style="float: left;width:13px;height: 25px" id="radioPass" onclick="checkbox();">&nbsp;记住密码
							<a href="/platform/jsp/backPass/400NumCenter.jsp" style="float: right;">忘记密码?</a>
						</div>

						<div class="item" id="btnSubmit">
							<router-link to="/goods" >
								<button type="button" tabindex="5" id="btnSubmit">登&nbsp;&nbsp;录</button>
							</router-link>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<!--<script type="text/javascript">
	import { mapGetters, mapActions} from 'vuex'
	import $ from 'jquery'
	export default {
		data: function(){
			return {
				userPhone:'',
				userPsw: '',
				checkPsw:'',
				value:'用户名不能为空！',
				}
		}
	}
</script>-->
<style type="text/css">
	@import url("../../../css/login.css");
</style>
