/**
 * Created By brand On 2018/1/20
 */
import {getWebLink} from '../api/api'
import axios from 'axios'
//actionType
export const GET_LINK_LIST = 'GET_LINK_LIST'   //获取友情链接列表

//reducer
export function linkList(state = [], action) {
    switch (action.type) {
        case GET_LINK_LIST:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}

//actionCreator
function getLinkListSuccess(data) {
    return {type: GET_LINK_LIST, payload: data}
}


export function getWebLinkList() {
    return dispatch => {
        axios.post(getWebLink).then((res) => {
            if (res.status === 200) {
                dispatch(getLinkListSuccess(res.data.linkList))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
    }
}