/**
 * Created By brand On 2018/1/20
 */
import {getUserInfo} from '../api/api'
import axios from 'axios'
//actionType
export const GET_USER_INFO = 'GET_USER_INFO'   //获取用户信息

//reducer
export function userinfo(state = {}, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//actionCreator
function getUserInfoSuccess(data) {
    return {type: GET_USER_INFO, payload: data}
}


export function getUserData(data) {
    return dispatch => {
        axios.post(getUserInfo, data).then((res) => {
            if (res.status === 200) {
                dispatch(getUserInfoSuccess(res.data.userInfo[0]))
            } else {
                // dispatch(errorMsg(res.data.msg))
            }
        })
    }
}