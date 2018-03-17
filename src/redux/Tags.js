/**
 * Created By brand On 2018/1/20
 */
import {getTags} from '../api/api'
//actionType
export const GET_TAGS = 'GET_TAGS'   //获取标签

//reducer
export function tagList(state = [], action) {
    switch (action.type) {
        case GET_TAGS:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}

//actionCreator
function getTagsSuccess(data) {
    return {type: GET_TAGS, payload: data}
}


export function getTagList() {
    return dispatch => {
        getTags().then((res) => {
            if (res.status === 200) {
                dispatch(getTagsSuccess(res.data.tagList))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
        /*axios.post(getTags).then((res) => {
            if (res.status === 200) {
                dispatch(getTagsSuccess(res.data.tagList))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })*/
    }
}