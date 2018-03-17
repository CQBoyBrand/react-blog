/**
 * Created By brand On 2018/1/20
 */
import {getArticleDate} from '../api/api'
//actionType
export const GET_DATE = 'GET_DATE'   //归档

//reducer
export function artArchive(state = [], action) {
    switch (action.type) {
        case GET_DATE:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}

//actionCreator
function getDateListSuccess(data) {
    return {type: GET_DATE, payload: data}
}


export function getDateList() {
    return dispatch => {
        getArticleDate().then((res) => {
            if (res.status === 200) {
                dispatch(getDateListSuccess(res.data))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
        /*axios.get(getArticleDate).then((res) => {
            if (res.status === 200) {
                dispatch(getDateListSuccess(res.data))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })*/
    }
}