import * as Types from "../action-type";
let initState = {
    msg:'',
    err:0, //0代表错误
    user:null
};
export default function reducer(state=initState,action) {
    switch (action.type) {
        case Types.SET_USER_INFO:
            console.log(action.payload);
            return {...action.payload}
    }
    return state
}