import * as types from './types';

const mutations = {
    [types.MARKET](state, payload){
        state.market.data = payload;
    },
    [types.LEAD_UP_DOWN](state, payload){
        state.leadConceptStock.data = payload;
    },
    [types.INFORMATIONS](state, payload){
        state.informationVos.data = payload;
    }
}

export default mutations;