/**
 * Created By brand On 2018/1/20
 */
import {getArticleListByDate} from '../api/api'
//actionType
export const GET_ARTLIST_BY_DATE = 'GET_ARTLIST_BY_DATE'   //归档

//reducer
export function artListByDate(state = [], action) {
    switch (action.type) {
        case GET_ARTLIST_BY_DATE:
            const data = {
                Lists: [
                    ...state,
                    ...action.payload.article
                ],
                total: action.payload.total
            }
            return data
        default:
            return state
    }
}

//actionCreator
function getArtListByDateSuccess(data) {
    return {type: GET_ARTLIST_BY_DATE, payload: data}
}


export function getArtListByDate(data) {
    return dispatch => {
        getArticleListByDate(data).then((res) => {
            if (res.status === 200) {
                dispatch(getArtListByDateSuccess(res.data))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
    }
}