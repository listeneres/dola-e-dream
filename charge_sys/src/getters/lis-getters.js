export default {
    arrString: function (state) {
        return state.random
    },
    phoneNum:function(state){
    	return state.phoneNum
    },
    datas:function(state){
//  	var datas = JSON.parse(datas)
    	return state.datas
    },
    Mdata:function(state){
//      var datas = JSON.parse(datas)
        return state.Mdata
    },
    checkLogin: function (state) {
//  	console.log(value)
        return state.loginData
    }
}