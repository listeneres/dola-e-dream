import * as types from '../mutations_types/mutations_type.js';
export default  {
    addGoods: ({
        commit
    }) => {
        commit(types.ADDGOODS);
    },

    delGoods: ({
        commit
    }) => {
        commit(types.DELGOODS);
    },
    render: ({
        commit
    }) => {
        commit(types.RANDER);
    },
    

    checkLogin: ({
        commit
    }) => {
        commit(types.CHECKLOGIN);
    }

};

