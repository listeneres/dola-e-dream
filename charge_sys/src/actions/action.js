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
    all: ({
        commit
    }) => {
        commit(types.ALL);
    },
    render: ({
        commit
    }) => {
        commit(types.RANDER);
    },
     save: ({
        commit
    },value) => {
        commit(types.SAVE,value);
    },
    doSearch: ({
        commit
    },value) => {
        commit(types.DOSEARCH,value);
    },
    checkLogin: ({
        commit
    },value) => {
        commit(types.CHECKLOGIN,value);
    },
};

