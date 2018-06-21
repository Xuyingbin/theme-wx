import * as types from './types'
import axios from 'axios'


const url = process.env.NODE_ENV === 'production'?'http://39.107.14.227:8080/':'/api/';
// console.log(process.env.NODE_ENV);
const actions = {
    requestMarket({commit, state}, obj){
        axios({
            method: 'get',
            url: url + 'indexforApp',
            
        })
        .then((res)=>{
            // console.log(res.data);
            if(res.data && res.data.success){
                commit(types.MARKET, res.data.sectionExponential);
                commit(types.LEAD_UP_DOWN, res.data.leadConceptStock);
                commit(types.INFORMATIONS, res.data.informationVos);
            }
            
        })
    }
}

export default actions;