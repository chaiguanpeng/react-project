import * as Types from "../action-type";
import {reg,login,validate} from "../../api/session";
let actions = {
    toReg(userInfo,push){ //注册
        return (dispatch)=>{
            reg(userInfo).then(result=>{
                if(result.err===1){ //有错误
                    dispatch({type:Types.SET_USER_INFO,payload:result});
                }else {
                    push("/login")
                }
            })
        }
    },
    toLogin(userInfo,push,from){ //登陆
        return (dispatch)=>{
            login(userInfo).then(result=>{
                dispatch({type:Types.SET_USER_INFO,payload:result});
                if(result.err===0){
                    push(from || '/profile')
                }
            })
        }
    },
    toValidate(){
        return (dispatch)=>{
            dispatch({type:Types.SET_USER_INFO,payload:validate()})
        }
    }
};
export default actions