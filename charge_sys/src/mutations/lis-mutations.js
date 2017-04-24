import * as types from '../mutations_types/mutations_type.js';
import $ from 'jquery'
import mutations from '../mutations/mutation.js';
import dhmutations from '../mutations/dhmutations.js';
import twmutations from '../mutations/twmutations.js';
// export default {
// 	    [types.ADDGOODS](state){
//          console.log(mutations)
//      }
//     console.log(mutations)
      var object = $.extend(true, mutations,dhmutations);
      var object1 = $.extend(true, object,twmutations);
   	   export default object1;   	   
//}    