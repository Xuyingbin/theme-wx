const getters = {
    getMarket(state){
        return state.market.data;
    },
    getLead(state){
        return state.leadConceptStock.data;
    },

    getInfo(state){
        return state.informationVos.data;
    }
}

export default getters;