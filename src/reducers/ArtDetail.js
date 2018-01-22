/**
 * Created By brand On 2018/1/20
 */
import {getArtDetail} from '../api/api'
import axios from 'axios'
//actionType
export const GET_ARTICLE_DETAIL = 'GET_ARTICLE_DETAIL'   //获取文章详情

//reducer
export function artDetail(state = {}, action) {
    switch (action.type) {
        case GET_ARTICLE_DETAIL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//actionCreator
function getDetailsSuccess(data) {
    return {type: GET_ARTICLE_DETAIL, payload: data}
}


export function getDetails(data) {
    return dispatch => {
        axios.post(getArtDetail, data).then((res) => {
            if (res.status === 200) {
                dispatch(getDetailsSuccess(res.data.article[0]))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
    }
}