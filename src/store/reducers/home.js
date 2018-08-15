import * as Types from "../action-type"
let initState = {
    currentLesson:"0"
};
export default function home(state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.lesson}
    }
    return state
}