<template>
<div class="app">
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
				<button  type="button" class="btn btn-link"><i class=""></i> 注销</button>
				<ul class="dropdown-menu" id="setting-select-shop">
				</ul>
			</div>
		</div>
	</div>
	<div id="sidebar">
		<ul>
			<li class="">
				<router-link to="/">
					<b class="c1" ></b>
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
							<select class="text-input form-control" id="editTagGoods"><option value="selectTagGoods">所有标签</option><option value="C597504C-4CF8-4EA9-94DB-CB69DC814FE2">爆品 (0)</option><option value="43515FB3-8D78-4203-BED2-7A4119972FCE">新品 (0)</option><option value="26B026AF-7764-402D-87E0-F99470F943CB">清货 (0)</option><option value="42F934B3-6B57-4FF1-A2A4-66C7B8B8AD6A">不管库存 (0)</option></select>
						</td>
						<!-- 按钮 -->
						<td class="goods-content-top">
							<div class="btn-group" role="group">
								<button id="btnAdd" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="新增" onclick="addGoods();" aria-label="Left Align">
									<span class="" aria-hidden="true"></span> 新增
								</button>

								<button id="btnDeletd" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="删除" onclick="deletedGoods();" aria-label="Left Align" disabled="disabled">
									<span class="" aria-hidden="true"></span> 删除
								</button>
							</div>
						</td>

						<td width="180px">
							<div class="input-group input-group-sm">
								<input id="searchText" type="text" class="form-control" placeholder="请输入搜索条件..." onkeypress="enterPress(event)" onkeydown="enterPress()"  />
								<span class="input-group-btn">
									<button class="btn btn-primary" type="button" onClick="doSearch();" id="btnSearch">
										<span class=""></span>
									</button>
								</span>
							</div>
						</td>
						<td class="goods-content-top">
							<div class="btn-group" role="group">    
								<button id="btnImport" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="导入" onclick="openImport();" aria-label="Left Align">
									<span class="" aria-hidden="true"></span> 导入
								</button>
								<button id="btnExport" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="导出" onclick="openExport();" aria-label="Left Align">
									<span class="" aria-hidden="true"></span> 导出
								</button>
							</div>
						</td>


						<td><div class="spaceW5"></div></td>
						<td width="60px">
							<button type="button" class="btn btn-link btn-sm" data-toggle="tooltip" title="高级筛选" id="goodsFilter" aria-label="Left Align"><i class=""></i>&nbsp;开启筛选</button>                   
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<router-view></router-view>
	</div>
	</div>
</template>

<style lang="css">
	
	@import url("../css/strage.css");
	
</style>