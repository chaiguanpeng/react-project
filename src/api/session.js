//主要实现跟用户相关的接口
import axios from "./index";
export let origin = (userInfo)=>{
    return axios.post("/login",userInfo);
};
//注册
export let reg = (userInfo)=>{
    return axios.post("/reg",userInfo);
};
//登陆
export let login = (userInfo)=>{
    return axios.post("/login",userInfo);
};
//校验
export let validate = ()=>{
  return axios.get('/validate');
};