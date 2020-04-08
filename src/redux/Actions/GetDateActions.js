
import Actiontypes from './Actiontypes';

const getDataStart = () =>({
    type: Actiontypes.GET_DATA_START
})

const getDataSuccess = payload => ({
    type: Actiontypes.GET_DATA_SUCCESS,
    payload
})

const getDataFailure = payload =>({
    type: Actiontypes.GET_DATA_FAILURE,
    payload
})

export const fetchData =() => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return dispatch =>{
        console.log('Dispatched action start')
        dispatch(getDataStart)
        fetch(url)
        .then(res => res.json())
        .then(res => dispatch(getDataSuccess(res)))
        .catch(err => getDataFailure(err))
    }
}
