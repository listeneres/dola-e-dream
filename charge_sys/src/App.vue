<template>
	<div>
		<div id="zm_login" v-if="isLogin">
			<div class="wrap">
				<div class="secL">
					<h2>企业通讯与销售管理平台</h2>
					<p>
						融合呼叫中心、CRM、OA办公、企业微信等多<br> 种应用，基于云计算SaaS平台架构，随时随地只<br> 要有网络的地方都可使用，超过20万家企业见证<br> 其安全稳定可靠，值得信赖。
					</p>
				</div>
				<div class="secR">
					<form method="post" name="frmLogin" id="loginForm">
						<div class="form">
							<h1>登录平台</h1>
							<p>
								请用<span class="f9c442"> 工号@400号码 </span>作为用户名登录
							</p>
							<div class="item clearfix">
								<label for="userNameIpt"></label>
								<input type="text" tabindex="1" id="userNameIpt" name="dtoUserName" placeholder="工号@400号码" v-model.trim="userName">
							</div>
							<div class="item itempass clearfix">
								<label for="password"></label>
								<input type="password" tabindex="2" id="password" name="password" autocomplete="true" placeholder="请输入密码" v-model.trim="psw">
							</div>
							<div class="item validatepic clearfix">
								<img id="Code" src="../images/12.png" width="75" height="30" style="display: inline; float: left;" />
								<input id="pwdInput" name="dtoUserCode" tabindex="3" class="ipt ipt-y f_l" type="text" style="margin-right: 5px; display: inline;" v-model.trim="code" />
								<a tabindex="4" class="changepic" id="forGetPassword" href="#">换一张?</a>
							</div>
							<div class="item itemRadio clearfix">
								<input type="checkbox" style="float: left;width:13px;height: 25px" id="radioPass" onclick="checkbox();">&nbsp;记住密码
								<a href="" style="float: right;">忘记密码?</a>
							</div>

							<div class="item" id="btnSubmit">
								<button type="button" tabindex="5" id="btnSubmit" @click="loginBtn">登&nbsp;&nbsp;录</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="app" v-if="hasLogin">
			<div class="model">
				<div class="shadow  clear">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="closeWin">×</button>
						<h3 class="modal-title"><span class="" aria-hidden="true"></span>新增/修改货品</h3>
					</div>
					<div class="mes clear">
						<div class="input-group" v-for='(value,key,index) in Mdata[0]'>
							<span class="input-group-addon addS" :id="'tbutton'+index">{{key}}</span>
							<input :id="'tbDescription'+index" type="text" class="form-control" :value="''">
							<span class="input-group-addon"><span class=""></span></span>
						</div>
					</div>
					<div class="img">
						<img src="../images/aa.jpg" alt="">
					</div>
					<div class="modal-footer">
						<span id="indexGoods" style="color:red">请确认商品信息</span>
						<button id="saveGoods" type="button" class="btn btn-primary"  @click="save()"><span class="" aria-hidden="true"></span>保存提交</button>

					</div>
				</div>
			</div>
			<div id="content-top">
				<div>
					<span class="guan">后台管理系统</span>
					<button type="button" class="btn btn-link text" style="color: #323f4c" aria-label="Left Align" id="btnNavigation">

						<span class="" aria-hidden="true"></span>
						隐藏导航栏
					</button>
				</div>
				<div class="container-fluid">
					<div id="settings">
						<button class="btn btn-link"><span class=""></span> 测试</button>
						<button type="button" class="btn btn-link"><i class=""></i> 注销</button>
						<ul class="dropdown-menu" id="setting-select-shop">
						</ul>
					</div>
				</div>
			</div>
			<div id="sidebar">
				<ul>
					<li class="">
						<router-link to="/">
							<b class="c1"></b>
							<span class="icon_bar made"><i class="icons-siderbar "></i> </span>
							<a href="" target="rightBottomFrame">
								<span>   销售汇总</span>
							</a>
						</router-link>
					</li>

					<li class="listactive">
						<router-link to="/">
							<b class="c2" style="width: 40px;"></b>
							<span class="icon_bar made active"><i class="icons-siderbar"></i></span>
							<a href="" target="rightBottomFrame">
								<span>存货列表</span>
							</a>
						</router-link>

					</li>

					<li>
						<router-link to="/">
							<b class="c3"></b>
							<span class="icon_bar made"><i class="icons-siderbar "></i></span>
							<a href="" target="rightBottomFrame">
								<span>订单列表</span>
							</a>
						</router-link>
					</li>

					<li class="">
						<router-link to="/">
							<b class="c4"></b>
							<span class="icon_bar made"><i class="icons-siderbar "></i></span>
							<a href="" target="rightBottomFrame">
								<span>客户列表</span>
							</a>
						</router-link>
					</li>

					<li class="">
						<router-link to="/">
							<b class="c8"></b>
							<span class="icon_bar made"><i class="icons-siderbar "></i></span>
							<a href="" target="rightBottomFrame">
								<span>我的店铺</span>
							</a>
						</router-link>
					</li>
				</ul>
			</div>
			<div id="content">
				<div class="widget-content">
					<table>
						<tbody>
							<tr>
								<td width="150px" id="storage" class="hidden">
									<select class="text-input form-control" id="editStorage"></select>
								</td>
								<td width="150px" id="tagGoods">
									<select class="text-input form-control" id="editTagGoods">
										<option value="selectTagGoods">所有标签</option>
										<option value="C597504C-4CF8-4EA9-94DB-CB69DC814FE2">爆品 (0)</option>
										<option value="43515FB3-8D78-4203-BED2-7A4119972FCE">新品 (0)</option>
										<option value="26B026AF-7764-402D-87E0-F99470F943CB">清货 (0)</option>
										<option value="42F934B3-6B57-4FF1-A2A4-66C7B8B8AD6A">不管库存 (0)</option>
									</select>
								</td>
								<td width="60px">
									<button type="button" class="btn btn-link btn-sm" data-toggle="tooltip" title="高级筛选" id="goodsFilter" aria-label="Left Align"><i class=""></i>&nbsp;开启筛选</button>
								</td>
								<!-- 按钮 -->
								<td class="goods-content-top">
									<div class="btn-group" role="group">
										<button id="btnAdd" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="新增" @click="addGoods();" aria-label="Left Align">
											<span class="" aria-hidden="true"></span> 新增
										</button>

										<button id="btnDeletd" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="删除" @click="delGoods();" aria-label="Left Align" >
											<span class="" aria-hidden="true"></span> 删除
										</button>
									</div>
								</td>

								<td width="180px">
									<div class="input-group input-group-sm">
										<input id="searchText" type="text" class="form-control" placeholder="请输入搜索条件..." @change='search()' />
										<span class="input-group-btn">
											<button class="btn btn-primary" type="button" @Click="doSearch();" id="btnSearch">
												<span class="">。</span>
											</button>
										</span>
									</div>
								</td>
								

								<td>
									<div class="spaceW5"></div>
								</td>
								
							</tr>
						</tbody>
					</table>
				</div>
				<router-view></router-view>
			</div>

		</div>
	</div>
</template>
<script type="text/javascript">
	import login from "./js/login.js"
	import $ from 'jquery'
	import {mapGetters, mapActions} from "vuex";
	export default {
		data: function() {
			return {
				isLogin: true,
				hasLogin: false,
				userName: '',
				psw: '',
				code: ''
			}
		},
		methods: {
			...mapActions(["delGoods","addGoods","save"]),
			loginBtn: function() {
				console.log(this.userName, this.psw, this.code)
				this.isLogin = false;
				this.hasLogin = true
				var obj = {
					userName: this.userName,
					psw: this.psw,
					code: this.code
				}
				login(obj)
				this.isLogin = false;
				this.hasLogin = true
			},
			addGoods(){
				this.$store.dispatch("addGoods")
				this.$store.dispatch("render")
			},
			delGoods:function(){
				try {
					this.$store.dispatch("delGoods" )
				}catch(error) {
					alert(error)
				}
			},
			save(){
				var arr=JSON.stringify(this.datas[0]).replace('{','').replace('}','').split(',')

				this.$store.dispatch("save",arr)
			},
			closeWin(){
				try {
					$('.model').hide()
				}catch(error) {
					alert(error)
				}
			},

			doSearch(){
				try {
					var serMessage =  $('#searchText').val()
					this.$store.dispatch("doSearch",serMessage)
				}catch(error) {
					alert(error)
				}	
			}
		},
		computed: mapGetters(['datas','Mdata'])
	}
</script>

<style lang="css">
	@import url("../css/login.css");
	@import url("../css/strage.css");
</style>