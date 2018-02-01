/**
 * Created By brand On 2018/1/20
 */
import {addComment} from '../api/api'
import axios from 'axios'
//actionType
export const ADD_COMMENT = 'ADD_COMMENT'   //新增评论
export const INIT_STATUS = 'INIT_STATUS'   //初始化评论状态
export const INIT_COMMENT = 'INIT_COMMENT'   //初始化评论

const initState = {
    comments: [],
    status: ''
}

//reducer
export function commentsData(state = initState, action) {
    switch (action.type) {
        case INIT_STATUS:
            return {
                comments: [
                    ...state.comments
                ],
                status: ''
            }
        case INIT_COMMENT:
            return {
                comments: [

                ],
                status: ''
            }
        case ADD_COMMENT:
            return {
                comments: [
                    ...state.comments,
                    action.payload.data
                ],
                status: action.payload.status
            }
        default:
            return state
    }
}

//actionCreator
function addCommentSuccess(data) {
    return {type: ADD_COMMENT, payload: data}
}


function initStatusAction() {
    return {type: INIT_STATUS}
}

function initCommentAction() {
    return {type: INIT_COMMENT}
}

export function initStatus() {
    return dispatch => {
        dispatch(initStatusAction())
    }
}
export function initComment() {
    return dispatch => {
        dispatch(initCommentAction())
    }
}

export function addCommentFn(data) {
    return dispatch => {
        axios.post(addComment, data).then((res) => {
            if (res.status === 200) {
                dispatch(addCommentSuccess({data: data, status: res.data}))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
    }
}