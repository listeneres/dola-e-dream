import * as types from '../mutations_types/mutations_type.js';
import $ from 'jquery'
import mutations from '../mutations/mutation.js';
import dhmutations from '../mutations/dhmutations.js';
import twmutations from '../mutations/twmutations.js';
import zmmutations from '../mutations/login-mutations.js'
// export default {
// 	    [types.ADDGOODS](state){
//          console.log(mutations)
//      }
//     console.log(mutations)
      var object = $.extend(true, mutations,dhmutations);
      var object1 = $.extend(true, object,twmutations);
      var object2 = $.extend(true, object1,zmmutations);
   	   export default object2;   	   
//}    