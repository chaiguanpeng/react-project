import * as Types from "../action-type"
let initState = {
    currentLesson:"0",
    slider:{
        loading:false,
        lists:[]
    }
};
export default function home(state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.lesson}
        case Types.GET_SLIDERS:
            return {...state,slider:{...state.slider,loading:true}}
        case Types.GET_SLIDERS_SUCCESS:
            return {...state,slider:{loading:false,lists:action.payload}}
    }
    return state
}