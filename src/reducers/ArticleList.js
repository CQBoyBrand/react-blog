/**
 * Created By brand On 2018/1/18
 */
import {getArticleList} from '../api/api'
import axios from 'axios'
//actionType
export const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST'   //获取首页的文章

//reducer
export function articleList(state = [], action) {
    switch (action.type) {
        case GET_ARTICLE_LIST:
            const data = {
                Lists: [
                    ...state,
                    ...action.payload.artList
                ],
                total: action.payload.total
            }
            return data
        default:
            return state
    }
}

//actionCreator
function getArtListSuccess(data) {
    return {type: GET_ARTICLE_LIST, payload: data}
}


export function getArtList(data) {
    return dispatch => {
        axios.post(getArticleList, data).then((res) => {
            if (res.status === 200) {
                dispatch(getArtListSuccess(res.data))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

