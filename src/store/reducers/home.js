import * as Types from "../action-type"
let initState = {
    currentLesson:"0",
    slider:{
        loading:false,
        lists:[]
    },
    lesson:{
        loading:false, //是否正在加载
        hasMore:true, //有没有更多数据 判断是否调用接口
        offset:0,      //获取接口的偏移量
        limit:5,        //每次限制五条
        list:[]         //获取的列表
    }
};
export default function home(state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.lesson};
        case Types.GET_SLIDERS:
            return {...state,slider:{...state.slider,loading:true}};
        case Types.GET_SLIDERS_SUCCESS:
            return {...state,slider:{loading:false,lists:action.payload}};
        case Types.GET_LESSONS:
            return {...state,lesson:{...state.lesson,loading:true}}
        case Types.GET_LESSONS_SUCCESS:
            return {...state,lesson:{
                    ...state.lesson,
                    loading:false,
                    hasMore:action.payload.hasMore,
                    list:[...state.lesson.list,...action.payload.list],
                    offset:state.lesson.offset + action.payload.list.length
                }}
        case Types.CLEAR_LESSONS:
            return {
                ...state,lesson:{
                    ...state.lesson,
                    offset:0,
                    list:[],
                    loading:false,
                    hasMore:true
                }
            }
    }
    return state
}