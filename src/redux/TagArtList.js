/**
 * Created By brand On 2018/1/20
 */
import {getArtListByTagId} from '../api/api'
//actionType
export const GET_TAG_ART_LIST = 'GET_TAG_ART_LIST'   //根据标签获取文章列表

//reducer
export function tagArtList(state = [], action) {
    switch (action.type) {
        case GET_TAG_ART_LIST:
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
function getTagArtListSuccess(data) {
    return {type: GET_TAG_ART_LIST, payload: data}
}


export function getTagArtList(data) {
    return dispatch => {
        getArtListByTagId(data).then((res) => {
            if (res.status === 200 && res.data.code != "-1") {
                dispatch(getTagArtListSuccess(res.data))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
    }
}