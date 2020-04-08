
import Actiontypes from '../Actions/Actiontypes';

const initialstate = {
    start: false,
    apidata: [],
    error: {}
};

export const DataReducer = (state=initialstate, action) => {
    switch(action.type){
        case Actiontypes.GET_DATA_START :return{
            ...state,
            start: true
        };
        case Actiontypes.GET_DATA_SUCCESS : return{
            ...state,
            apidata: action.payload
        };
        case Actiontypes.GET_DATA_FAILURE: return{
            ...state,
            apidata: action.payload
        };
        default:
        return state
    }
}
