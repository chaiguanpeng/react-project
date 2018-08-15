import {createStore} from "redux";
import reducer from "./reducers"
//store={getState : {home:{currentLesson:'0'}}
let store=createStore(reducer);
window.store = store;
export default  store
