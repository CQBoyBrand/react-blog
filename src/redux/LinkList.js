/**
 * Created By brand On 2018/1/20
 */
import {getWebLink} from '../api/api'
//actionType
export const GET_LINK_LIST = 'GET_LINK_LIST'   //获取友情链接列表
const initState = {
    linkList:[],
    comment:[]
}
//reducer
export function linkList(state = initState, action) {
    switch (action.type) {
        case GET_LINK_LIST:
            return {
                linkList:[
                    ...state.linkList,
                    ...action.payload.linkList
                ],
                comment:[
                    ...state.comment,
                    ...action.payload.comment
                ]
            }
        default:
            return state
    }
}

//actionCreator
function getLinkListSuccess(data) {
    return {type: GET_LINK_LIST, payload: data}
}


export function getWebLinkList(data) {
    return dispatch => {
        getWebLink(data).then((res) => {
            if (res.status === 200) {
                dispatch(getLinkListSuccess(res.data))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
    }
}