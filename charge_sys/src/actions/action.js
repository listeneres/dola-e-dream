import * as types from '../mutations_types/mutations_type.js';
export default  {
    addGoods: ({
        commit
    }) => {
        commit(types.ADDGOODS);
    },
    checkLogin: ({
        commit
    },value) => {
        commit(types.CHECKLOGIN,value);
    }
};

