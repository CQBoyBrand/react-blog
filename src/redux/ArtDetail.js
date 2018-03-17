/**
 * Created By brand On 2018/1/20
 */
import {getArtDetail} from '../api/api'
//actionType
export const GET_ARTICLE_DETAIL = 'GET_ARTICLE_DETAIL'   //获取文章详情
export const ERROR_MSG = 'ERROR_MSG'   //错误页面

//reducer
export function artDetail(state = {}, action) {
    switch (action.type) {
        case GET_ARTICLE_DETAIL:
            return {
                ...state,
                ...action.payload,
                errMsg:{}
            }
        default:
            return state
    }
}

//actionCreator
function getDetailsSuccess(data) {
    return {type: GET_ARTICLE_DETAIL, payload: data}
}
function errorMsg(data) {
    return {type: ERROR_MSG, payload: data}
}


export function getDetails(data) {
    return dispatch => {
        getArtDetail(data).then((res) => {
            if (res.status === 200) {
                if(res.data.code == "-1"){
                    //dispatch(errorMsg(res.data))
                }else {
                    dispatch(getDetailsSuccess(res.data.article))
                }

            }
        })
    }
}