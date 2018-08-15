// 创建关于首页更改redux的所有动作
import * as Types from "../action-type"
let action = {
  setCurrentLesson(type){
      console.log(type);
      return {type:Types.SET_CURRENT_LESSON,lesson:type}
  }
};
console.log("act",action);
export default action;