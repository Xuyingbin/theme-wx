import axios from 'axios'
import Toast from './components/Toast'

// 拦截请求

axios.interceptors.request.use(function(config){
    // console.log('请求中');
    Toast.open();
    return config;
});

// 拦截响应

axios.interceptors.response.use(function(config){
    // console.log('请求完成');
    Toast.close();


    return config;
});