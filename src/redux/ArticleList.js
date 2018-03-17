/**
 * Created By brand On 2018/3/12
 */
import {getFrontArtList} from '../api/api'

const GET_ARTICLE_LIST = "GET_ARTICLE_LIST" //获取首页文章列表
const ERROR_MSG = "ERROR_MSG"

const initalState = {
    artLists:[],
    total:0
}

export function frontArtList(state = initalState, action) {
    switch (action.type) {
        case GET_ARTICLE_LIST:
            return {
                artLists:[
                    ...state,
                    ...action.payload.artList
                ],
                total:action.payload.total
            }
        default:
            return state
    }
}

function errorMsg(msg) {
    return {type: ERROR_MSG, payload: msg}
}
function getSuccess(data) {
    return {type: GET_ARTICLE_LIST, payload: data}
}

//获取首页文章列表
export function getArtList(data) {
    return dispatch => {
        getFrontArtList(data).then((res)=>{
            if(res.status === 200){
                dispatch(getSuccess(res.data))
            }else {
                dispatch(errorMsg("出错啦"))
            }
        })
    }
}