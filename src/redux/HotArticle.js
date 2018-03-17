/**
 * Created By brand On 2018/1/20
 */
import {getHotArticleList} from '../api/api'
//actionType
export const GET_HOT_ARTICLE = 'GET_HOT_ARTICLE'   //获取热门文章

//reducer
export function HotArtList(state = [], action) {
    switch (action.type) {
        case GET_HOT_ARTICLE:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}

//actionCreator
function getHotSuccess(data) {
    return {type: GET_HOT_ARTICLE, payload: data}
}


export function getHotArtList() {
    return dispatch => {
        getHotArticleList().then((res) => {
            if (res.status === 200) {
                dispatch(getHotSuccess(res.data.hotArtList))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
    }
}