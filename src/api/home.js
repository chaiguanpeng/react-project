import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000";
axios.interceptors.response.use(function (res) { //
    return res.data
});
//获取轮播图接口
export let getSliders = ()=>{
    return axios.get('/sliders')
};