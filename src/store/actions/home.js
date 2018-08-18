// 创建关于首页更改redux的所有动作
import * as Types from "../action-type";
import {getSliders,getLessons} from "../../api/home";
let action = {
  setCurrentLesson(type){
      return(dispatch,getState)=>{
          dispatch({type:Types.SET_CURRENT_LESSON,lesson:type});
          dispatch({type:Types.CLEAR_LESSONS}); //清除原有的数据
          action.setLessons()(dispatch,getState); //根据最新类型改变数据
      }
  },
    refresh(){
      return (dispatch,getState)=>{
          dispatch({type:Types.CLEAR_LESSONS}); //清除原有的数据
          action.setLessons()(dispatch,getState); //根据最新类型改变数据
      }
    },
    setSliders(){
      return (dispatch)=>{ //dispatch是中间件包装后的dispatch
          dispatch({type:Types.GET_SLIDERS}); //将redux中数据状态改变成正在加载
          dispatch({type:Types.GET_SLIDERS_SUCCESS,payload:getSliders()})
      }
    },
    setLessons(){ //组件中调用的方法]
      return (dispatch,getState)=>{
          let {currentLesson,lesson:{limit,offset,hasMore,loading}} = getState().home;
          //先把loading改成正在加载
          if(hasMore&&!loading){
              dispatch({type:Types.GET_LESSONS}); //先把loading状态改变
              dispatch({type:Types.GET_LESSONS_SUCCESS,payload:getLessons(limit,offset,currentLesson)})
          }
      }
    }

};
// console.log("act",action);
export default action;